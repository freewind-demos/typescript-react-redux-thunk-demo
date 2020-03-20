import {DeleteFruitAction, UpdateRemoteDataAction} from './actionTypes';
import {Dispatch} from 'react';
import axios from 'axios';

export function deleteFruitAction(name: string): DeleteFruitAction {
  return {
    type: 'DELETE_FRUIT',
    fruitName: name
  }
}

export function updateRemoteData(data: any): UpdateRemoteDataAction {
  return {
    type: 'UDPATE_REMOTE_DATA',
    data
  }
}

