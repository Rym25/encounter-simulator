const inquirer = require('inquirer');

const Monster = require('./Monster');

const Player = require('./Player');

function Encounter() {

    this.roundNumber = 0;

    this.enemies = [];

    this.players = [];

    this.initOrder = [];

    Encounter.prototype.intializeEncounter = function () {
        // This is too much could just use the one initOrder array and push the objects into it.
        this.enemies.push(new Monster('Goblin', 7, 15, 30, 8, 14, 10, 10, 8, 8, 'Scimitar', 2))
        this.enemies.push(new Monster('Goblin Bobert', 7, 15, 30, 8, 14, 10, 10, 8, 8, 'Scimitar', 2))

        this.players.push(new Player('Randy', 12, 16, 30, 16, 13, 14, 9, 15, 11, 'Greataxe', 2))
        
        for(let i = 0; i < this.enemies.length; i++) {
            this.initOrder.push(this.enemies[i]);
        }

        for(let i = 0; i < this.players.length; i++) {
            this.initOrder.push(this.players[i]);
        }

        this.initOrder.sort(function(a,b){return b.init - a.init})

        console.log(this.initOrder);
    };

}

module.exports = Encounter;