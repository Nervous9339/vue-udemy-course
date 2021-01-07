const app = Vue.createApp({
    data() {
        return {
            name: 'Nikita',
            age: 27,
            imageUrl: 'random.jpg'
        };
    },
    methods: {
        newAge() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment')