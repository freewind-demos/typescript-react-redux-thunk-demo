import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {State} from '../store/State';
import {ActionTypes} from '../store/actions/actionTypes';
import {deleteFruitAction} from '../store/actions';
import {sendDataToRemote} from '../store/actions/asyncActions';

type StateProps = {
  fruits: string[],
  remoteData: any
}

type DispatchProps = {
  deleteFruit: (fruitName: string) => void,
  sendDataToRemote: (fruitNames: string[]) => void
};

type Props = StateProps & DispatchProps;

function Hello({fruits, deleteFruit, remoteData, sendDataToRemote}: Props) {
  return <div>
    <h1>Hello, I like:</h1>
    <ul>
      {
        fruits.map(name => <li key={name}>
          {name}
          <button title="delete" onClick={() => deleteFruit(name)}>x</button>
        </li>)
      }
    </ul>
    <button onClick={() => sendDataToRemote(fruits)}>Send Data to Remote</button>
    <div>{JSON.stringify(remoteData, null, 4)}</div>
  </div>
}

const mapStateToProps = ({fruits, remoteData}: State): StateProps => ({
  fruits,
  remoteData
})

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): DispatchProps => ({
  deleteFruit: (name) => dispatch(deleteFruitAction(name)),
  // FIXME don't know how to write it right
  sendDataToRemote: (fruitNames) => dispatch(sendDataToRemote(fruitNames) as any)
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
