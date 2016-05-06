const activityHistory = () => {
  const log = [{
    id: 1,
    activity: 'Go jump in the lake',
    date: '2016-05-03 15:40',
    points: 100,
    username: 'Oscar'
  }, {
    id: 1,
    activity: 'Basketball',
    date: '2016-05-04 16:30',
    points: 50,
    username: 'Oscar'
  }, {
      id: 2,
      activity: 'Baseball',
      date: '2016-05-06 18:30',
      points: 40,
      username: 'Oscar'
    }];

  //const lastActivity = log[0].activity;
  var lastActivity = function() {
    let getlast = log[0];
    log.forEach(function (el) {
      if (getlast.date < el.date) getlast = el;
    });
    return getlast;
  };

  var totalPoints = function(){
    let total = 0;
    log.forEach(function(el){
        total += el.points;
    });
    return total;
  };

  return {
    log: log,
    lastActivity: lastActivity,
    totalPoints: totalPoints
  };
};

export {activityHistory};
