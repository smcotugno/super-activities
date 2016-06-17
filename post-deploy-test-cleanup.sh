#!/bin/bash

# once all the testing is done with the new app we can decommision the old

# you can run any testing here to see if everything is ok

# and remove the temporary route of new
echo "removing temporary route to the new version of the app"
cf unmap-route "${CF_APP}"-"${CF_SPACE}" mybluemix.net -n "${CF_APP}"-"${CF_SPACE}"-new

# once the old one is not needed we can stop it and remove the route

# requires special BASH logic here to see if the old exists
cmd=$(cf app "${CF_APP}"-"${CF_SPACE}"-old || true)
if [[ $cmd == FAILED* ]]; then
    echo "There is no old version of the app, no need to process it"
else
    echo "unmapping route to old version, stopping old version, and unbind data base"
    cf unmap-route "${CF_APP}"-"${CF_SPACE}"-old mybluemix.net -n "${CF_APP}"-"${CF_SPACE}"
    cf stop "${CF_APP}"-"${CF_SPACE}"-old
    cf unbind-service "${CF_APP}"-"${CF_SPACE}"-old "${CF_APP}"-cloudant-"${CF_SPACE}"
fi

