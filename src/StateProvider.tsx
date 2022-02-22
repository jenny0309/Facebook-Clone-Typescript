import React, { createContext, useContext, useReducer } from 'react';
import { initialState, IState } from './reducer';

// interface IContextProps {
//   state: IState;
//   dispatch: ({ type }: { type: string }) => void;
// }

interface StateProps {
  children: React.ReactElement;
  initialState: IState | any;
  reducer: IState | any;
}

export const StateContext = createContext<IState | any>(initialState);

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: StateProps): React.ReactElement => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
