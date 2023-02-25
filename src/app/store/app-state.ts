import {
  createReducer,
  on,
  createActionGroup,
  emptyProps,
  props,
  createFeature,
  provideState,
  Store,
  createSelector,
} from '@ngrx/store';
import { createEffect, Actions, ofType, provideEffects } from '@ngrx/effects';
import { Inject, inject, makeEnvironmentProviders } from '@angular/core';
import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// export interface User {
//   id: number;
//   name: string;
// }

export interface AppState {
  // entries: Entry[];
  // currentEntryId: number | null;
}

export const initialState: AppState = {};

export const AppActions = createActionGroup({
  source: 'app',
  events: {
    init: emptyProps(),
    StartInit: props<{ params: string }>(),
  },
});

export const appFeature = createFeature({
  name: 'app',
  reducer: createReducer(
    initialState,
    on(AppActions.init, (state) => {
      return {
        ...initialState,
      };
    })
  ),
});

export const { selectAppState } = appFeature;

export const initAppEffect$ = createEffect(
  (actions$ = inject(Actions)) => {
    const router = inject(Router);
    return actions$.pipe(
      ofType(AppActions.init),
      tap(() => {
        router.navigate(['/']);
      })
    );
  },
  { functional: true, dispatch: false }
);

export function provideAppFeature() {
  return makeEnvironmentProviders([
    provideState(appFeature),
    provideEffects([{ initAppEffect$ }]),
  ]);
}

export function injectAppFeature() {
  const store = inject(Store);

  return {
    init: () => store.dispatch(AppActions.init()),
  };
}
