const app = new Vue({
    el: '#app',
    data: {
        load: [],
        time: moment(),
    },
    created() {
        // window.location = '#copyright'
        setTimeout(() => {
        this.load = ['d-none']
        }, 1);
    },
})