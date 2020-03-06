import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {State} from '../store/State';
import {DeleteFruitAction} from '../store/actions/actionTypes';
import {deleteFruitAction} from '../store/actions';

type StateProps = {
  fruits: string[]
}

type DispatchProps = {
  deleteFruit: (fruitName: string) => void
}

type Props = StateProps & DispatchProps;

function Hello({fruits, deleteFruit}: Props) {
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
  </div>
}

const mapStateToProps = (state: State): StateProps => ({
  fruits: state.fruits
})

const mapDispatchToProps = (dispatch: Dispatch<DeleteFruitAction>): DispatchProps => ({
  deleteFruit: (name) => dispatch(deleteFruitAction(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
