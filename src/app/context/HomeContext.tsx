import { Dispatch, createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

export enum DrawerState {
  Open,
  Close,
}

const HomeContext = createContext<HomeReducerState>({ drawerState: false });
const HomeDispatchContext = createContext<Dispatch<HomeReducerAction> | null>(null);

export type HomeReducerState = {
  drawerState: boolean;
};

export type HomeReducerAction = {
  type: DrawerState;
  payload: HomeReducerState;
};

const initialState: HomeReducerState = {
  drawerState: false,
};

// type Reducer = <S, A>(state: S, action: A) => S;

function homeReducer(state: HomeReducerState, action: HomeReducerAction): HomeReducerState {
  switch (action.type) {
    case DrawerState.Open:
      state.drawerState = action.payload.drawerState;
      return state;

    case DrawerState.Close:
      state.drawerState = action.payload.drawerState;
      return state;

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useImmerReducer(homeReducer, initialState);

  return (
    <HomeContext.Provider value={state}>
      <HomeDispatchContext.Provider value={dispatch}>{children}</HomeDispatchContext.Provider>
    </HomeContext.Provider>
  );
}

export function useHomeState() {
  return useContext(HomeContext);
}

export function useHomeDispatch() {
  return useContext(HomeDispatchContext);
}
