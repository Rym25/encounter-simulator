const Player = require('../lib/Player.js');

test('creates Player object', () => {
    const player = new Player('Randy', 12, 16, 30, 16, 13, 14, 9, 15, 11, 'Greataxe', 2);

    expect(player.name).toBe('Randy');
    expect(player.hp).toBe(12);
    expect(player.ac).toBe(16);
    expect(player.spd).toBe(30);
    expect(player.str).toBe(16);
    expect(player.dex).toBe(13);
    expect(player.con).toBe(14);
    expect(player.int).toBe(9);
    expect(player.wis).toBe(15);
    expect(player.cha).toBe(11);
    expect(player.wep).toBe('Greataxe');
    expect(player.prof).toBe(2);
})

test('gets the modifier of a specific stat', () => {
    const player = new Player('Randy', 12, 16, 30, 16, 13, 14, 9, 15, 11, 'Greataxe', 2);

    expect(monster.getMod(str)).toBe(3);
    expect(monster.getMod(dex)).toBe(1);
    expect(monster.getMod(con)).toBe(2);
    expect(monster.getMod(int)).toBe(-1);
    expect(monster.getMod(wis)).toBe(2);
    expect(monster.getMod(cha)).toBe(0);
});