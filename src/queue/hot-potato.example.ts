/**
 * SCENARIO:
 * Hot potato is children's game. In this game, children are organized in a cirlce,
 * and they pass the hot potato to their neighbor as fast as they can. At a certain
 * point of the game, the hot potato stops being passed around the circle of children,
 * and the child that has the hot potato is removed from the circle. This action is repeated
 * until there is only one child left(the winner)
 *
 * SOLUTION:
 * This game can be implemented using slightly modified versions of the default queue called
 * the "circular queue".
 */
import { Queue } from './queue';
import { randomRangeInclusive } from '../utils/';

export function hotPotato(playerNames) {
  const queue = new Queue();
  let eliminatedPlayers: any = [];

  playerNames.forEach(player => queue.enqueue(player));

  while (queue.size() > 1) {
    // ensure random runs after each elimination
    let runs = randomRangeInclusive(1, 99);

    for (let i = 0; i < runs; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedPlayers.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedPlayers,
    winner: queue.dequeue(),
  };
}

// TEST:
// const players = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// const result = hotPotato(players, 7);
// result.eliminated.forEach(player => console.log(`${player} was eliminated.`));
// console.log(`The winner is ${result.winner}`);
