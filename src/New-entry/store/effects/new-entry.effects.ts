// import { Router } from '@angular/router';
// import { map, Observable } from 'rxjs';
// import { EntriesActions, Entry } from '../reducers/entries.reducer';
// import { inject } from '@angular/core';
// import { createEffect, Actions, ofType, FunctionalEffect } from '@ngrx/effects';

// const loadEntries$ = createEffect(
//   (actions$ = inject(Actions)) => {
//     return actions$.pipe(
//       ofType(EntriesActions.enter),
//       map(() => {
//         const entries: Entry[] = [
//           { id: 1, name: 'entry1' },
//           { id: 2, name: 'entry2' },
//         ];
//         return EntriesActions.entriesLoadedSuccess({ entries });
//       })
//     );
//   },
//   { functional: true }
// );

// const selectEntryRouterEffect$ = createEffect(
//   (actions$ = inject(Actions)) => {
//     const router = inject(Router);
//     return actions$.pipe(
//       ofType(EntriesActions.entrySelected),
//       map(({ entryId }) => {
//         router.navigate([`entries/${entryId}`]);
//       })
//     );
//   },
//   { functional: true, dispatch: false }
// );

// const goBackRouterEffect$ = createEffect(
//   (actions$ = inject(Actions)) => {
//     const router = inject(Router);
//     return actions$.pipe(
//       ofType(EntriesActions.goback),
//       map(() => {
//         router.navigate(['entries/']);
//       })
//     );
//   },
//   { functional: true, dispatch: false }
// );

// export const entriesEffects: any[] = [
//   loadEntries$,
//   selectEntryRouterEffect$,
//   goBackRouterEffect$,
// ];
