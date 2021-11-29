const Monster = require('../lib/Monster.js');
// Test to determine if a monster with a simple stat block is created
test('creates a monster object', () => {
    const monster = new Monster({name: 'Goblin', hp: 7, ac: 15, spd: 30, str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8, wep: 'Scimitar', prof: 2});

    expect(monster.name).toBe('Goblin');
    expect(monster.hp).toBe(7);
    expect(monster.ac).toBe(15);
    expect(monster.spd).toBe(30);
    expect(monster.str).toBe(8);
    expect(monster.dex).toBe(14);
    expect(monster.con).toBe(10);
    expect(monster.int).toBe(10);
    expect(monster.wis).toBe(8);
    expect(monster.cha).toBe(8);
    expect(monster.wep).toBe('Scimitar');
    expect(monster.cha).toBe(2);
});