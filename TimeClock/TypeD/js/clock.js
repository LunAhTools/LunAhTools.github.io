const app = new Vue({
  el: '#app',
  data: {
    time: moment(),
    timer: null,
    sec: null,
    cirtimer: null,
    styleClass: {
      R: 0,
      G: 0,
      B: 0,
    },
    deg: 0,
    degrever:0,
  },
  created() {
    this.momentSetting()
    this.timer = setInterval(() => {
      this.time = moment()
      this.getTimeSec()
      this.styleClass.R = this.getRandom(1, 255)
      this.styleClass.G = this.getRandom(1, 255)
      this.styleClass.B = this.getRandom(1, 255)
    }, 500)
    this.cirtimer = setInterval(() => {
      if (this.degrever == 360) {
        this.degrever = 0
      }
      this.degrever += 10
    }, 24);
  },
  computed: {
    clockstyle() {
      return {
        'transition': '1s',
        'color': 'rgb(' + this.styleClass.R + ',' + this.styleClass.G + ',' + this.styleClass.B + ')'
      }
    },
    cirsec() {
      return {
        // 'transition': '1s',
        'transform': 'rotate(-' + this.degrever + 'deg)'
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
      this.sec = this.time.utc().seconds()
    }
  }
})

