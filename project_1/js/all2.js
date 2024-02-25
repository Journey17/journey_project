function project() {
  var a = document.getElementById('days').value
  var b = document.getElementById('times').value
  var result = document.getElementById('result')
  var data = {
    星期一: {
      上午: ['吃饭', '上班', '早餐'],
      下午: ['吃饭', '上班', '晚餐'],
    },
    星期二: {
      上午: ['吃饭', '上班', '早餐'],
      下午: ['吃饭', '上班', '晚餐'],
    },
    星期三: {
      上午: ['吃饭', '上班', '早餐'],
      下午: ['吃饭', '上班', '晚餐'],
    },
    星期四: {
      上午: ['吃饭', '上班', '早餐'],
      下午: ['吃饭', '上班', '晚餐'],
    },
    星期五: {
      上午: ['吃饭', '上班', '早餐'],
      下午: ['吃饭', '上班', '晚餐'],
    },
    星期六: {
      上午: ['吃饭', '上班', '早餐'],
      下午: ['吃饭', '上班', '晚餐'],
    },
    星期日: {
      上午: ['吃饭', '上班', '早餐'],
      下午: ['吃饭', '上班', '晚餐'],
    },
  }

  if (a in data) {
    if (b === '上午' || b === '下午') {
      result.innerHTML = data[a][b].join('、 ')
    } else {
      var morningTasks = data[a]['上午'].join('、 ')
      var afternoonTasks = data[a]['下午'].join('、 ')
      result.innerHTML =
        '上午事项：' + morningTasks + '<br>' + '下午事项：' + afternoonTasks
    }
  } else {
    result.innerHTML = '请输入正确的日期和时间'
  }
}
