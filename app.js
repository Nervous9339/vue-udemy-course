const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: ''
            // fullName: ''
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0
            }
        }
        // name(value) {
        //   if (value === '') {
        //     this.fullName = ''
        //   } else {
        //     this.fullName = value + ' ' + this.lastName()
        //   }
        // },
        // lastName(value) {
        //   if (value === '') {
        //     this.fullName = ''
        //   } else {
        //     this.fullName = this.name + ' ' + value
        //   }
        // }
    },
    computed: {
        fullName() {
            console.log('Running again')
            if (this.name === '' || this.lastName === '') {
                return '';
            }
            return this.name + ' ' + this.lastName
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = ''
        }
    }
});

app.mount('#events');
