const app = Vue.createApp({
    data() {
        return {
            firstOutput: 'OUTPUT',
            secondOutput: 'SECOND OUTPUT'
        }
    },
    methods: {
        showAlert() {
            alert('Hello there!')
        },
        showUserInput(event) {
            this.firstOutput = event.target.value
        },
        showUserInputOnEnter(event) {
            this.secondOutput = event.target.value
        }
    }
});

app.mount('#assignment')
