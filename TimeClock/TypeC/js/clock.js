const app = new Vue({
  el: '#app',
  data: {
    time: moment(),
    timer: null,
    rgbtimer: null,
    styleClass: {
      R: 0,
      G: 0,
      B: 0,
    }
  },
  created() {
    this.momentSetting()
    this.timer = setInterval(() => {
      this.time = moment()
    }, 1000)
    this.rgbtimer = setInterval(() => {
      this.styleClass.R = this.getRandom(1, 255)
      this.styleClass.G = this.getRandom(1, 255)
      this.styleClass.B = this.getRandom(1, 255)
    }, 500);
  },
  computed: {
    style() {
      return {
        'transition': '1s',
        'color': 'rgb(' + this.styleClass.R + ',' + this.styleClass.G + ',' + this.styleClass.B + ')'
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
    }
  }
})

