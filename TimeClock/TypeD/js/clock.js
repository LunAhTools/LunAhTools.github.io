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
    deg: 90
  },
  created() {
    this.momentSetting()
    this.timer = setInterval(() => {
      this.time = moment()
      this.getTimeSec()
      if (this.deg === 360) {
        this.deg = 360
      }
      this.deg = ((this.sec / 60) * 360)
    }, 500)
  },
  computed: {
    cirsec() {
      return {
        'transition': '1s',
        'transform': 'rotate(' + this.deg + 'deg)'
      }
    },
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

