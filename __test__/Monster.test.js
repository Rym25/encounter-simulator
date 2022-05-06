const Monster = require('../lib/Monster.js');
// Test to determine if a monster with a simple stat block is created
test('creates a monster object', () => {
    const monster = new Monster('Goblin', 7, 15, 30, 8, 14, 10, 10, 8, 8, 'Scimitar', 2);

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
    expect(monster.prof).toBe(2);
});

test('gets the modifier of a specific stat', () => {
    const monster = new Monster('Goblin', 7, 15, 30, 8, 14, 10, 10, 8, 8, 'Scimitar', 2);

    expect(monster.getMods()).toHaveProperty('strMod');
    expect(monster.getMods()).toHaveProperty('dexMod');
    expect(monster.getMods()).toHaveProperty('conMod');
    expect(monster.getMods()).toHaveProperty('intMod');
    expect(monster.getMods()).toHaveProperty('wisMod');
    expect(monster.getMods()).toHaveProperty('chaMod');
    expect(monster.getMods()).toHaveProperty('hp');
    expect(monster.getMods()).toHaveProperty('ac');
    expect(monster.getMods()).toHaveProperty('prof');
});