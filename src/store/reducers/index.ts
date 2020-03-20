import {ActionTypes} from '../actions/actionTypes';
import {State} from '../State';

const initStore: State = {
  fruits: ['Apples', 'Oranges'],
  remoteData: ''
};

export default function reducers(state = initStore, action: ActionTypes): State {
  switch (action.type) {
    case 'DELETE_FRUIT':
      return {
        ...state,
        fruits: state.fruits.filter(name => name !== action.fruitName)
      };
    case 'UDPATE_REMOTE_DATA':
      return {
        ...state,
        remoteData: action.data
      }
    default:
      return state;
  }
}
