import {DeleteFruitAction, ActionTypes} from '../actions/actionTypes';
import {State} from '../State';

function _handleDelete(state: State, action: DeleteFruitAction): State {
  return {
    ...state,
    fruits: state.fruits.filter(name => name !== action.fruitName)
  }
}

const initStore: State = {
  fruits: ['Apples', 'Oranges']
};

export default function reducers(state = initStore, action: ActionTypes): State {
  switch (action.type) {
    case 'DELETE_FRUIT':
      return _handleDelete(state, action);
    default:
      return state;
  }
}
