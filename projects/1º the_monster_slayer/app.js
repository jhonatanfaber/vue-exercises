new Vue({
    el: "#app",
    data: {
        playerLife: 100,
        monsterLife: 100,
        MONSTERMESSAGE: "Monster hits player for ",
        PLAYERMESSAGE: "Player hits monster for ",
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
            this.playerLife = 100
            this.monsterLife = 100
            this.log = []
        },
        giveUpMatch() {
            this.startGame = true
            this.showControls = false
            this.showLog = false
        },
        attack() {
            this.showLog = true
            let monsterHit = this.generateRandomNumber(4, 5)
            this.playerLife -= monsterHit
            this.saveLogMessage(this.MONSTERMESSAGE, monsterHit)
            if(this.checkForWin(this.playerLife)){
                this.playerLife = 0
                return 
            } 
                
            let playerHit = this.generateRandomNumber(5, 5)
            this.monsterLife -= playerHit
            this.saveLogMessage(this.PLAYERMESSAGE, playerHit)
            if(this.checkForWin(this.monsterLife)) this.monsterLife = 0
        },
        specialAttack() {
            this.showLog = true
            let monsterHit = this.generateRandomNumber(5, 4)
            this.playerLife -= monsterHit
            this.saveLogMessage(this.MONSTERMESSAGE, monsterHit)
            if(this.checkForWin(this.playerLife)){
                this.playerLife = 0
                return 
            }

            let playerHit = this.generateRandomNumber(6, 8)
            this.monsterLife -= playerHit
            this.saveLogMessage(this.PLAYERMESSAGE, playerHit)
            if(this.checkForWin(this.monsterLife)) this.monsterLife = 0
        },
        heal() {
            let monsterHit = this.generateRandomNumber(2, 2)
            this.playerLife -= monsterHit
            this.saveLogMessage(this.MONSTERMESSAGE, monsterHit)

            let playerHealing = this.generateRandomNumber(5, 4)
            this.playerLife += playerHealing
            this.saveLogMessage("PLAYER HEALS HIMSELF FOR ", playerHealing)
            if(this.playerLife >= 100) this.playerLife = 100

        },
        generateRandomNumber(from, possibleResults) {
            return Math.floor((Math.random() * possibleResults) + from)
        },
        saveLogMessage(message, hitPoint) {
            this.log.push(message + hitPoint)
        },
        checkForWin(player) {
            if (player <= 0) {
                this.startGame = true
                this.showControls = false
                this.showLog = false
                return true
            }
            return false
        }
    }
})