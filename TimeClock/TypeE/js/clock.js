const app = new Vue({
  el: '#app',
  data: {
    time: moment(),
    timer: null,
  },
  created() {
    this.momentSetting()
    this.timer = setInterval(() => {
      this.time = moment()
    }, 500)
  },
  methods: {
    momentSetting() {
      moment.locale('zh-tw', {
        weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",]
      })
    }
  }
})
