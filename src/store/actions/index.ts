import {DeleteFruitAction} from './actionTypes';

export function deleteFruitAction(name: string): DeleteFruitAction {
  return {
    type: 'DELETE_FRUIT',
    fruitName: name
  }
}
