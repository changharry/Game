new Vue({
    el:'#app',
    data: {
        playerHP: 100,
        monsterHP: 100,
        isRunning: false,
        log: []
    },
    methods: {
        startGame: function() {
            this.isRunning = true;
            this.monsterHP = 100;
            this.playerHP = 100;
            this.log = [];
        },
        attack: function () {
            var dmgMonster = this.damage(3, 10);
            this.monsterHP -= dmgMonster;
            this.log.unshift({
                isPlayer: true,
                text : 'Player hits monster for ' + dmgMonster
            });
            var dmgPlayer = this.damage(5, 12);
            this.playerHP -= dmgPlayer;
            this.log.unshift({
                isPlayer: false,
                text : 'Monster hits player for ' + dmgPlayer
            });
            this.checkWin();
        },
        spAttack: function () {
            var dmgMonster = this.damage(10, 20);
            this.monsterHP -= dmgMonster;
            this.log.unshift({
                isPlayer: true,
                text : 'Player hits monster for ' + dmgMonster
            });
            var dmgPlayer = this.damage(5, 12);
            this.playerHP -= dmgPlayer;
            this.log.unshift({
                isPlayer: false,
                text : 'Monster hits player for ' + dmgPlayer
            });
            this.checkWin();
        },
        heal: function () {
            if (this.playerHP <= 90) {
                this.playerHP += 10;
            } else {
                this.playerHP = 100;
            }
            this.log.unshift({
                isPlayer: true,
                text : 'Player HP increase by 10 '
            });
            var dmgPlayer = this.damage(5, 12);
            this.playerHP -= dmgPlayer;
            this.log.unshift({
                isPlayer: false,
                text : 'Monster hits player for ' + dmgPlayer
            });
            this.checkWin();
        },
        gg: function () {
            this.isRunning = false;
        },
        checkWin: function () {
            if (this.monsterHP <= 0) {
                if (confirm("You Won! Start a new game?")) {
                    this.startGame();
                } else {
                    this.isRunning = false;
                }
                return true;
            } else if (this.playerHP <= 0) {
                if (confirm("You Lost! Start a new game?")) {
                    this.startGame();
                } else {
                    this.isRunning = false;
                }
                return true;
            } else {
                return false;
            }
        },
        damage: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    }
});