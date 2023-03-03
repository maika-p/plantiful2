// import {
//   createReducer,
//   on,
//   createActionGroup,
//   emptyProps,
//   props,
//   createFeature,
//   provideState,
//   Store,
//   createSelector,
// } from '@ngrx/store';
// import { createEffect, Actions, ofType, provideEffects } from '@ngrx/effects';
// import { Inject, inject, makeEnvironmentProviders } from '@angular/core';
// import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { entriesEffects } from '../effects/entries.effects';

// export interface Entry {
//   id: number;
//   name: string;
// }

// export interface EntriesState {
//   entries: Entry[];
//   currentEntryId: number | undefined | null;
// }

// export const initialState: EntriesState = {
//   entries: [],
//   currentEntryId: null,
// };

// export const EntriesActions = createActionGroup({
//   source: 'Entries',
//   events: {
//     enter: emptyProps(),
//     'Entry Selected': props<{ entryId: number }>(),
//     'Entries Loaded Success': props<{ entries: Entry[] }>(),
//     'Entries Loaded Failure': props<{ error: string }>(),
//     goBack: emptyProps(),
//   },
// });

// export const entriesFeature = createFeature({
//   name: 'entries',
//   reducer: createReducer(
//     initialState,
//     on(EntriesActions.enter, (state) => {
//       return {
//         ...state,
//         entries: [],
//       };
//     }),
//     on(EntriesActions.entrySelected, (state, { entryId }) => {
//       return {
//         ...state,
//         currentEntryId: entryId,
//       };
//     }),
//     on(EntriesActions.entriesLoadedSuccess, (state, action) => {
//       return {
//         ...state,
//         entries: action.entries,
//       };
//     }),
//     on(EntriesActions.goback, (state) => ({ ...state, currentEntryId: null }))
//   ),
// });

// export const { selectEntriesState, selectEntries, selectCurrentEntryId } =
//   entriesFeature;

// export const selectEntry = createSelector(
//   selectEntriesState,
//   (state: EntriesState) =>
//     state.entries?.find((entry) => entry?.id === state.currentEntryId)
// );

// export function provideEntriesFeature() {
//   return makeEnvironmentProviders([
//     provideState(entriesFeature),
//     provideEffects({ ...entriesEffects }),
//   ]);
// }

// export function injectEntriesFeature() {
//   const store = inject(Store);

//   return {
//     enter: () => store.dispatch(EntriesActions.enter()),

//     entries$: store.select(selectEntries),
//   };
// }
