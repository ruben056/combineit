import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromJeugdvakantie from './jeugdvakantie/jeugdvakantie.reducer';
import * as fromWerkloosheid from './werkloosheid/werkloosheid.reducer';

export interface AppState {
  'werkloosheid': {};
  'jeugdvakantie': {};
}

const initialState: AppState = {
  'werkloosheid': fromWerkloosheid.initialState,
  'jeugdvakantie': fromJeugdvakantie.initialState,
}

export const reducers: ActionReducerMap<AppState> = {
  'werkloosheid': fromWerkloosheid.reducer,
  'jeugdvakantie': fromJeugdvakantie.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
