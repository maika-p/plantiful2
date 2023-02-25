import {
  createReducer,
  on,
  createActionGroup,
  emptyProps,
  props,
  createFeature,
  createSelector,
  provideState,
  Store,
} from '@ngrx/store';
import { createEffect, Actions, ofType, provideEffects } from '@ngrx/effects';
import { inject, makeEnvironmentProviders } from '@angular/core';
import { exhaustMap, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

export const loadEntries$ = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(EntriesActions.enter),
      map(() => {
        console.log('enter');

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

export function provideEntriesFeature() {
  return makeEnvironmentProviders([
    provideState(entriesFeature),
    provideEffects({ loadEntries$ }),
  ]);
}

export function injectEntriesFeature() {
  const store = inject(Store);

  return {
    enter: () => store.dispatch(EntriesActions.enter()),
    entries$: store.select(selectEntries),
  };
}
