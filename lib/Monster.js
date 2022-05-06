function Monster(name, hp, ac, spd, str, dex, con, int, wis, cha, wep, prof) {
    this.name = name;
    this.hp = hp;
    this.ac = ac;
    this.spd = spd;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.wep = wep;
    this.prof = prof;
    this.init = Math.floor(Math.random()*20)+1+Math.floor((this.dex-10)/2);

    this.getMods = function() {
        return {
            strMod: Math.floor((this.str-10)/2),
            dexMod: Math.floor((this.dex-10)/2),
            conMod: Math.floor((this.con-10)/2),
            intMod: Math.floor((this.int-10)/2),
            wisMod: Math.floor((this.wis-10)/2),
            chaMod: Math.floor((this.cha-10)/2),
            hp: this.hp,
            ac: this.ac,
            prof: this.prof
        }
    }
}

module.exports = Monster;