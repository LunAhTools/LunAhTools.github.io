const app = new Vue({
  el: '#app',
  data: {
    time: moment(),
    timer: null,
    sec: null,
    rgbtimer: null,
    styleClass: {
      R: 0,
      G: 0,
      B: 0,
    },
    gagueValue: 0
  },
  created() {
    this.momentSetting()
    this.timer = setInterval(() => {
      this.time = moment()
      this.gagueValue = moment().seconds() / 0.6


    }, 500)
  },
  computed: {
    gaugeStyle() {
      return {
        // 'transition': '1s',
        '--value': this.gagueValue,
      }
    }
  },
  methods: {
    momentSetting() {
      moment.locale('zh-tw', {
        weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",]
      })
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getTimeSec() {
      this.sec = this.time.seconds()
    }
  }
})

