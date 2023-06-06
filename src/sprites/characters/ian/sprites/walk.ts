import { Directions } from '../../../../interfaces'
import { SpriteMovement } from '../../../../interfaces/sprites'

export const walk: Record<Directions, SpriteMovement[]> = {
  down: [
    {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 0,
      width: 100,
      height: 100,
    },
    {
      x: 200,
      y: 0,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 0,
      width: 100,
      height: 100,
    },
  ],
  left: [
    {
      x: 0,
      y: 100,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
    },
    {
      x: 200,
      y: 100,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
    },
  ],
  right: [
    {
      x: 0,
      y: 200,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 200,
      width: 100,
      height: 100,
    },
    {
      x: 200,
      y: 200,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 200,
      width: 100,
      height: 100,
    },
  ],
  up: [
    {
      x: 0,
      y: 300,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 300,
      width: 100,
      height: 100,
    },
    {
      x: 200,
      y: 300,
      width: 100,
      height: 100,
    },
    {
      x: 100,
      y: 300,
      width: 100,
      height: 100,
    },
  ],
  'down-left': [
    {
      x: 300,
      y: 0,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 0,
      width: 100,
      height: 100,
    },
    {
      x: 500,
      y: 0,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 0,
      width: 100,
      height: 100,
    },
  ],
  'down-right': [
    {
      x: 300,
      y: 100,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 100,
      width: 100,
      height: 100,
    },
    {
      x: 500,
      y: 100,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 100,
      width: 100,
      height: 100,
    },
  ],
  'up-left': [
    {
      x: 300,
      y: 200,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 200,
      width: 100,
      height: 100,
    },
    {
      x: 500,
      y: 200,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 200,
      width: 100,
      height: 100,
    },
  ],
  'up-right': [
    {
      x: 300,
      y: 300,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 300,
      width: 100,
      height: 100,
    },
    {
      x: 500,
      y: 300,
      width: 100,
      height: 100,
    },
    {
      x: 400,
      y: 300,
      width: 100,
      height: 100,
    },
  ],
}

// export const walk: Record<Directions, SpriteMovement[]> = {
//   down: [
//     {
//       x: 31,
//       y: 8,
//       width: 37,
//       height: 83,
//     },
//     {
//       x: 133,
//       y: 8,
//       width: 38,
//       height: 90,
//     },
//     {
//       x: 234,
//       y: 7,
//       width: 33,
//       height: 93,
//     },
//     {
//       x: 333,
//       y: 7,
//       width: 36,
//       height: 90,
//     },
//     {
//       x: 431,
//       y: 8,
//       width: 37,
//       height: 85,
//     },
//     {
//       x: 531,
//       y: 7,
//       width: 35,
//       height: 90,
//     },
//     {
//       x: 631,
//       y: 8,
//       width: 34,
//       height: 91,
//     },
//     {
//       x: 731,
//       y: 8,
//       width: 35,
//       height: 88,
//     },
//   ],
//   left: [
//     {
//       x: 31,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//     {
//       x: 133,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//     {
//       x: 234,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//     {
//       x: 333,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//     {
//       x: 431,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//     {
//       x: 531,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//     {
//       x: 631,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//     {
//       x: 731,
//       y: 8,
//       width: 55,
//       height: 91,
//     },
//   ],
//   right: [
//     {
//       x: 28,
//       y: 229,
//       width: 37,
//       height: 68,
//     },
//     {
//       x: 131,
//       y: 229,
//       width: 30,
//       height: 69,
//     },
//     {
//       x: 230,
//       y: 229,
//       width: 37,
//       height: 68,
//     },
//     {
//       x: 131,
//       y: 229,
//       width: 30,
//       height: 69,
//     },
//   ],
//   up: [
//     {
//       x: 31,
//       y: 331,
//       width: 37,
//       height: 68,
//     },
//     {
//       x: 133,
//       y: 330,
//       width: 32,
//       height: 67,
//     },
//     {
//       x: 231,
//       y: 331,
//       width: 37,
//       height: 68,
//     },
//     {
//       x: 133,
//       y: 330,
//       width: 32,
//       height: 67,
//     },
//   ],
//   'down-left': [
//     {
//       x: 332,
//       y: 27,
//       width: 43,
//       height: 72,
//     },
//     {
//       x: 437,
//       y: 26,
//       width: 31,
//       height: 73,
//     },
//     {
//       x: 532,
//       y: 27,
//       width: 35,
//       height: 68,
//     },
//     {
//       x: 437,
//       y: 26,
//       width: 31,
//       height: 73,
//     },
//   ],
//   'down-right': [
//     {
//       x: 336,
//       y: 127,
//       width: 42,
//       height: 72,
//     },
//     {
//       x: 433,
//       y: 126,
//       width: 30,
//       height: 73,
//     },
//     {
//       x: 533,
//       y: 127,
//       width: 35,
//       height: 68,
//     },
//     {
//       x: 433,
//       y: 126,
//       width: 30,
//       height: 73,
//     },
//   ],
//   'up-left': [
//     {
//       x: 332,
//       y: 228,
//       width: 43,
//       height: 66,
//     },
//     {
//       x: 437,
//       y: 229,
//       width: 34,
//       height: 70,
//     },
//     {
//       x: 532,
//       y: 228,
//       width: 39,
//       height: 71,
//     },
//     {
//       x: 437,
//       y: 229,
//       width: 34,
//       height: 70,
//     },
//   ],
//   'up-right': [
//     {
//       x: 325,
//       y: 328,
//       width: 43,
//       height: 66,
//     },
//     {
//       x: 429,
//       y: 329,
//       width: 35,
//       height: 70,
//     },
//     {
//       x: 530,
//       y: 328,
//       width: 38,
//       height: 71,
//     },
//     {
//       x: 429,
//       y: 329,
//       width: 35,
//       height: 70,
//     },
//   ],
// }
