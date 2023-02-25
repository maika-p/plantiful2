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

export interface Entry {
  id: number;
  name: string;
}

export interface EntriesState {
  entries: Entry[];
  currentEntryId: number | null;
}

export const initialState: EntriesState = {
  entries: [],
  currentEntryId: null,
};

export const EntriesActions = createActionGroup({
  source: 'Entries',
  events: {
    enter: emptyProps(),
    'Entry Selected': props<{ entryId: number }>(),
    'Entries Loaded Success': props<{ entries: Entry[] }>(),
    'Entries Loaded Failure': props<{ error: string }>(),
  },
});

export const entriesFeature = createFeature({
  name: 'entries',
  reducer: createReducer(
    initialState,
    on(EntriesActions.enter, (state) => {
      return {
        ...state,
        entries: [],
      };
    }),
    on(EntriesActions.entrySelected, (state, { entryId }) => {
      return {
        ...state,
        currentEntryId: entryId,
      };
    }),
    on(EntriesActions.entriesLoadedSuccess, (state, action) => {
      return {
        ...state,
        entries: action.entries,
      };
    })
  ),
});

export const { selectEntriesState, selectEntries, selectCurrentEntryId } =
  entriesFeature;

export const selectEntry = createSelector(
  selectEntriesState,
  (state: EntriesState) =>
    state.entries.find((entry) => entry.id === state.currentEntryId)
);

export const loadEntries$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(EntriesActions.enter),
      map(() => {
        const entries: Entry[] = [
          { id: 1, name: 'entry1' },
          { id: 2, name: 'entry2' },
        ];
        return EntriesActions.entriesLoadedSuccess({ entries });
      })
    );
  },
  { functional: true }
);

export const selectEntryRouterEffect$ = createEffect(
  (actions$ = inject(Actions)) => {
    const router = inject(Router);
    return actions$.pipe(
      ofType(EntriesActions.entrySelected),
      map(({ entryId }) => {
        router.navigate(['entries/' + entryId.toString()]);
      })
    );
  },
  { functional: true, dispatch: false }
);

export function provideEntriesFeature() {
  return makeEnvironmentProviders([
    provideState(entriesFeature),
    provideEffects([{ loadEntries$ }, { selectEntryRouterEffect$ }]),
  ]);
}

export function injectEntriesFeature() {
  const store = inject(Store);

  return {
    enter: () => store.dispatch(EntriesActions.enter()),

    entries$: store.select(selectEntries),
  };
}
