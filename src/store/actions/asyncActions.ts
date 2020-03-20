import {Dispatch} from 'react';
import axios from 'axios';
import {updateRemoteData} from './index';

export function sendDataToRemote(fruitNames: string[]) {
  return function (dispatch: Dispatch<any>) {
    return axios.post("http://httpbin.org/post", {fruitNames})
      .then(({data}) => {
        dispatch(updateRemoteData(data));
      });
  };
}

