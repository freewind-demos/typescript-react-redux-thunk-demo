export type DeleteFruitAction = {
  type: 'DELETE_FRUIT',
  fruitName: string,
}

export type UpdateRemoteDataAction = {
  type: 'UDPATE_REMOTE_DATA',
  data: any
}

export type ActionTypes = DeleteFruitAction | UpdateRemoteDataAction
