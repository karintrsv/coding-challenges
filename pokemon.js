/*
 * Challenge from nextgencoder on Instagram
 *
 * INPUT
 *  array of pokemon stats (type, attack point, health point)
 *
 * Notes: type available are fire, grass, water
 * ">" means stronger
 * Fire > grass
 * Grass > water
 * Water > fire
 *
 * If a pokemon with a stronger type go against one with weaker type,
 * double its attack points, else halve it.
 *
 * GOAL
 * Find out the winner if each pokemon takes turn attacking each other.
 * The pokemon whose health points are reduced to 0 or less loses.
 *
 * example input
 * ["water", 100, 500, "fire", 200, 400];
 *
 * expected output
 * "Trainer 1 Wins"
 */

const input = ["water", 100, 500, "fire", 200, 400];
class Pokemon {
  constructor(...args) {
    const argsList = ["type", "atk", "hp", "trainer"];
    argsList.forEach((prop, i) => (this[prop] = args[i]));
  }
}

const Pokemon1 = new Pokemon(...input.slice(0, 3), "Trainer 1");
const Pokemon2 = new Pokemon(...input.slice(3, 6), "Trainer 2");

const MapStrengthOver = { water: "fire", fire: "grass", grass: "water" };

const requiredNoOfAttacksBy = (own) => ({
  against: (enemy) => {
    const atkFactor = enemy.type === MapStrengthOver[own.type] ? 2 : 0.5;
    return Math.ceil(enemy.hp / (own.atk * atkFactor));
  },
});

const fightBetween = (P1, P2) => {
  const P1Wins =
    requiredNoOfAttacksBy(P1).against(P2) <
    requiredNoOfAttacksBy(P2).against(P1) + 1;
  const winner = P1Wins ? P1 : P2;
  return { result: winner.trainer + " Wins" };
};

console.log(fightBetween(Pokemon1, Pokemon2).result);
