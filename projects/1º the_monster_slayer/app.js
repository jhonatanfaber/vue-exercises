new Vue({
    el: "#app",
    data: {
        playerLife: 100,
        monsterLife: 100,
        MONSTERMESSAGE : "Monster hits player for ",
        PLAYERMESSAGE : "Player hits monster for ",
        startGame: true,
        showControls: false,
        showLog: false,
        log: [],
        monsterStyle: {
            "background-color": "#FFB6C1",
            "color": "#8B0000"
        },
        playerStyle: {
            "background-color": "#87CEFA",
            "color": "#0000FF"
        }
    },
    methods: {
        startNewGame() {
            this.startGame = false
            this.showControls = true
        },
        giveUpMatch() {
            this.showControls = false
            this.startGame = true
            this.showLog = false
            this.playerLife = 100
            this.monsterLife = 100
            this.log = []
        },
        attack() {
            this.showLog = true

            let monsterHit = this.generateRandomNumber(4, 5)
            this.playerLife = this.playerLife - monsterHit
            this.saveLogMessage(this.MONSTERMESSAGE,monsterHit)

            let playerHit = this.generateRandomNumber(5, 5)
            this.monsterLife = this.monsterLife - playerHit
            this.saveLogMessage(this.PLAYERMESSAGE,playerHit)
        },
        specialAttack() {
            this.showLog = true

            let monsterHit = this.generateRandomNumber(5, 4)
            this.playerLife = this.playerLife - monsterHit
            this.saveLogMessage(this.MONSTERMESSAGE,monsterHit)

            let playerHit = this.generateRandomNumber(6, 8)
            this.monsterLife = this.monsterLife - playerHit
            this.saveLogMessage(this.PLAYERMESSAGE,playerHit)
        },
        heal() {
            let monsterHit = this.generateRandomNumber(2, 2)
            this.playerLife = this.playerLife - monsterHit
            this.saveLogMessage(this.MONSTERMESSAGE,monsterHit)

            let playerHealing = this.generateRandomNumber(5, 4)
            this.playerLife = this.playerLife + playerHealing
            this.saveLogMessage("PLAYER HEALS HIMSELF FOR ",playerHealing)

        },
        generateRandomNumber(from, possibleResults) {
            return Math.floor((Math.random() * possibleResults) + from)
        },
        saveLogMessage(message, hitPoint) {
            this.log.push(message + hitPoint)
        }
    }
})