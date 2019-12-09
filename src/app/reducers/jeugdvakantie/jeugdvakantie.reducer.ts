import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  createReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as jeugdvakantieActions from './jeugdvakantie.actions';
import { AppState } from '../index';

export interface State {
  hobbies: string[];
}

export const initialState: State = {
  hobbies: ['skaten', 'surfen', 'snowboardn'],
}

export const getJeugdvakantie = createFeatureSelector<AppState, State>('jeugdvakantie');
export const getHobbies = createSelector(getJeugdvakantie, (state: State) => state.hobbies);


export const reducer = createReducer(
  initialState,
  // on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
  // on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
  // on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
  // on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
);
