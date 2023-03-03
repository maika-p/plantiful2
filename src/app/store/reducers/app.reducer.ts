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
import { inject, makeEnvironmentProviders } from '@angular/core';
import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// export interface User {
//   id: number;
//   name: string;
// }

export interface AppState {
  appInit: boolean;
}

export const initialState: AppState = {
  appInit: false,
};

export const AppActions = createActionGroup({
  source: 'app',
  events: {
    init: emptyProps(),
  },
});

export const appFeature = createFeature({
  name: 'app',
  reducer: createReducer(
    initialState,
    on(AppActions.init, (state) => {
      return {
        ...initialState,
        appInit: true,
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
        router.navigate(['/entries']);
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

// export function injectAppFeature() {
//   const store = inject(Store);

//   return {
//     init: () => store.dispatch(AppActions.init()),
//   };
// }
