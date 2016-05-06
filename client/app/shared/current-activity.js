const theCurrentActivity = () => {
  let currentActivity = {
    name: '',
    description: '',
    points: 0
  };

  let isActive = false;

  return {
    set: function(theActivity) {
      currentActivity = theActivity;
    },
    get: function() {
      return (currentActivity);
    },
    setActive: function() {
      isActive = true;
    },
    setInActive: function() {
      isActive = false;
    },
    isActive: function() {
      return isActive;
    },
    isNotActive: function() {
      return (!isActive);
    },
    name: function() {
      return currentActivity.name;
    },
    description: function() {
      return currentActivity.description;
    },
    points: function() {
      return currentActivity.points;
    }
  };
};

export {theCurrentActivity};
