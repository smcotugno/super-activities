#!/bin/bash
rm -rf ./node_modules.bak
rm -rf .git.bak

# try our own blue-green logic

# delete the old
echo "delete the old application"
cf delete "${CF_APP}"-"${CF_SPACE}"-old -f -r

# push the new
echo "pushing new application"
cf push "${CF_APP}"-"${CF_SPACE}"-new -d mybluemix.net -i 1 -k 512M -m 512M -n "${CF_APP}"-"${CF_SPACE}"-new --no-start

# bind in my database
echo "bind in my data base"
cf bind-service "${CF_APP}"-"${CF_SPACE}"-new "${CF_APP}"-cloudant-"${CF_SPACE}"

# start the app
echo "start the app"
cf start "${CF_APP}"-"${CF_SPACE}"-new

# See if this sets the VCAP services correctly
# echo "restaging app to make sure VCAP settings are correct"
# cf restage "${CF_APP}"-"${CF_SPACE}"-new

echo "Showing shell environment via set"
set
echo "Showing cf env for new app"
cf env "${CF_APP}"-"${CF_SPACE}"-new
echo "What files are in this directory"
ls -la

# smoke test

# this makes the new app live with the same route as the current
echo "create route for the new app"
cf create-route "${CF_SPACE}" mybluemix.net -n "${CF_APP}"-"${CF_SPACE}"

echo "map current route to the new app"
cf map-route "${CF_APP}"-"${CF_SPACE}"-new mybluemix.net -n "${CF_APP}"-"${CF_SPACE}"

# at this point its in production with the current version since its the same route

# rename the current to the old if the current exists
# requires special BASH logic here
cmd=$(cf app "${CF_APP}"-"${CF_SPACE}" || true)
if [[ $cmd == FAILED* ]]; then
    echo "There is no current version of the app, no rename needed to old"
else
    echo "rename current to old"
    cf rename "${CF_APP}"-"${CF_SPACE}" "${CF_APP}"-"${CF_SPACE}"-old
fi

# rename the new to the current
echo "rename new to current"
cf rename "${CF_APP}"-"${CF_SPACE}"-new "${CF_APP}"-"${CF_SPACE}"

echo "at this point, both new and old have the same route for testing"

# do not use this plugin unless you want to pass in smoke test
# cf add-plugin-repo CF-Community http://plugins.cloudfoundry.org
# cf install-plugin blue-green-deploy -r CF-Community <<< y
# cf help bgd
# cf bgd "${CF_APP}"-dev

# once the old one is not needed we can stop it
# cf stop "${CF_APP}"-"${CF_SPACE}"-old
# cf unbind-service "${CF_APP}"-"${CF_SPACE}"-old "${CF_APP}"-cloudant-"${CF_SPACE}"
