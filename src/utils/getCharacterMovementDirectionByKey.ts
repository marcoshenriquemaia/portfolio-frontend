import { Directions } from '../interfaces'

export function getCharacterMovementDirectionByKey(keys: string[]): Directions {
  const keyToDirectionMap: Record<string, Directions> = {
    w: 'up',
    s: 'down',
    a: 'left',
    d: 'right',
    aw: 'up-left',
    dw: 'up-right',
    as: 'down-left',
    ds: 'down-right',
  }

  const keyCombination = keys.sort().join('')
  const direction = keyToDirectionMap[keyCombination]

  return direction || 'up'
}
