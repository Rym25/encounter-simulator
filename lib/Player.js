function Player(name, hp, ac, spd, str, dex, con, int, wis, cha, wep, prof) {
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
}

module.exports = Player;