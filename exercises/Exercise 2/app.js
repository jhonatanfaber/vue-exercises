new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            alert("this is an alert")
        },
        storeValue(event) {
            this.value = event.target.value
        }
    }
});