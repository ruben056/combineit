import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as werkloosheidActions from './werkloosheid.actions';
import { AppState } from '../index';

export interface State {
  todo: string[];
}

export const initialState: State = {
  todo: ['rva','ui','hulpkas'],
}

export const getWerkloosheid = createFeatureSelector<AppState, State>('werkloosheid');
export const getTodos = createSelector(getWerkloosheid, (state: State) => state.todo);

export const reducer = createReducer(
  initialState,
  // on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  // on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  // on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  // on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);
