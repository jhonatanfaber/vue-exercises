new Vue({
    el: "#exercise",
    data : {
        name : "jhoni",
        age : "22",
        link: "https://www.w3schools.com/images/w3schools_green.jpg"
    },
    methods : {
        getRandomNumber(){
            return Math.random()
        }
    }
})