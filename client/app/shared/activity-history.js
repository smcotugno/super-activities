const activityHistory = () => {
  const log = [{
    id: 1,
    activity: 'go jump in the lake',
    date: '2016-05-05 10:00',
    points: 50,
    username: 'Oscar'
  }, {
      id: 2,
      activity: 'Basketball',
      date: '2016-05-06 10:00',
      points: 25,
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
