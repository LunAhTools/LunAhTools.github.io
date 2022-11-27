const app = new Vue({
  el: '#app',
  data: {
    time: moment(),
    timer: null,
    settingBtn: false,
    settingModal: [],
    rootStyle: {
      marginSwitch: false,
      marginSetting: 0,
      width: 5,
      fsize: 3,
      padTop: 8,
      padRight: 0,
      padButtom: 0,
      padLeft: 0,
      padding: 8,
      padSwitch: false,
      fontColor: '#000000',
    },
    style: {
      bgColor: '#ffffff',
      bgOpacity: 1,
      fontOpacity: 1,
      borderSwitch: false,
      border: {
        borderStyle: 'solid',
        borderColor: '#000000',
        borderSize: 4,
        borderRadius: 20,
        top: 1,
        bottom: 2,
        left: 3,
        right: 4,
      }
    },
    userData: [],
  },
  created() {
    this.momentSetting();
    this.getCookie();
  },
  computed: {
    marginSetting() {
      if (this.rootStyle.marginSwitch) {
        return {
          'margin': `${this.rootStyle.marginSetting}px`
        }
      }
    },
    clockStyle() {
      if (this.rootStyle.padSwitch) {
        return {
          'color': this.rootStyle.fontColor,
          'width': `${this.rootStyle.width}em`,
          'font-size': `${this.rootStyle.fsize}em`,
          'padding': `${this.rootStyle.padTop}px ${this.rootStyle.padRight}px ${this.rootStyle.padButtom}px ${this.rootStyle.padLeft}px `,
        }
      } else {
        return {
          'color': this.rootStyle.fontColor,
          'width': `${this.rootStyle.width}em`,
          'font-size': `${this.rootStyle.fsize}em`,
          'padding': `${this.rootStyle.padding}px`,
        }
      }

    },
    fontStyle() {
      return {
        'Opacity': this.style.fontOpacity,
      }
    },
    borderStyle() {
      if (this.style.borderSwitch) {
        return {
          'border-width': `${this.style.border.top}px ${this.style.border.right}px ${this.style.border.bottom}px ${this.style.border.left}px`,
          'border-radius': `${this.style.border.borderRadius}px`,
          'border-color': this.style.border.borderColor,
          'border-style': this.style.border.borderStyle,
        }
      } else {
        return {
          'border': `${this.style.border.borderSize}px ${this.style.border.borderColor} ${this.style.border.borderStyle}`,
          'border-radius': `${this.style.border.borderRadius}px`,
        }
      }
    },
    bgStyle() {
      return {
        'border-radius': `${this.style.border.borderRadius}px`,
        'background-color': this.style.bgColor,
      }
    }
  },
  methods: {
    momentSetting() {
      moment.locale('zh-tw', {
        weekdays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",],
        weekdaysShort: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
      })
    },
    openModel() {
      if (!this.settingBtn) {
        this.settingModal = ['is-visible']
        this.settingBtn = true
      } else {
        this.settingModal = ['']
        this.settingBtn = false
      }
    },
    getCookie() {
      this.timer = setInterval(() => {
        this.time = moment()
      }, 500);
      if (this.$cookies.get('userSetting').root && this.$cookies.get('userSetting').style) {
        try {
          this.rootStyle = this.$cookies.get('userSetting').root;
          this.style = this.$cookies.get('userSetting').style;

          console.log('yes');
        } catch (error) {
          console.error(error);
          this.removeCookie();
        }
      } else {
        console.log('no');
      }
    },
    saveCookie() {
      this.userData = {
        root: this.rootStyle,
        style: this.style
      }
      this.$cookies.set('userSetting', this.userData);
    },
    removeCookie() {
      this.$toastr.s({
        msg: "清除成功",
        clickClose: false,
        timeout: 1000,
        position: "toast-top-left",
        progressbar: false,
        preventDuplicates: true,
      });
      this.$cookies.remove('userSetting');
      setTimeout(() => {
        location.reload();
      }, 1000);
    },
    saveFile() {
      var filename = 'userStyleSetting.save'
      var saveData = localStorage.getItem('userClockSettings')
      this.downLoad(filename, saveData)
    },
    downLoad(filename, input) {
      var element = document.createElement('a')
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(input));
      element.setAttribute('download', filename);
      document.body.appendChild(element);
      element.click();
    },
  }
})

function chahgeSeyle() {
  let el = document.querySelector('');
  el.style.getPropertyValue("--allWidth");
  getComputedStyle(el).getPropertyValue("--allWidth");
  el.style.setProperty("--allWidth", '50vw');
}