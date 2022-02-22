export interface IState {
  user: any;
}

export enum actionTypes {
  SET_USER = 'SET_USER',
}

export type IAction = {
  type: actionTypes.SET_USER;
  user: any;
};

export const initialState = {
  user: null,
};

const reducer = (state: IState, action: IAction) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
