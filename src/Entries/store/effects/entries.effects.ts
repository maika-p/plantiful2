import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, delay, map, of, switchMap, tap } from 'rxjs';
import { EntriesActions } from '../reducers/entries.reducer';
import { EntriesService } from './../../entries.service';

const loadEntries$ = createEffect(
  (actions$ = inject(Actions)) => {
    const entriesService = inject(EntriesService);
    const store = inject(Store);

    return actions$.pipe(
      ofType(EntriesActions.initEntries),
      tap(() => store.dispatch(EntriesActions.loadEntries())),
      switchMap(() => {
        return entriesService.getEntries().pipe(
          delay(1500),
          map((response) => {
            return EntriesActions.entriesLoadedSuccess({ entries: response });
          }),
          catchError((error) =>
            of(
              EntriesActions.entriesLoadedFailure({
                error: error.toString(),
              })
            )
          )
        );
      })
    );
  },
  { functional: true }
);

const selectEntryRouterEffect$ = createEffect(
  (actions$ = inject(Actions)) => {
    const router = inject(Router);
    return actions$.pipe(
      ofType(EntriesActions.entrySelected),
      map(({ entryId }) => router.navigate([`entries/${entryId}`]))
    );
  },
  { functional: true, dispatch: false }
);

const selectEntryRouterE2ffect$ = createEffect(
  (actions$ = inject(Actions)) => {
    const router = inject(Router);
    return actions$.pipe(
      ofType(EntriesActions.entrySelected),
      map(({ entryId }) => router.navigate([`entries/${entryId}`]))
    );
  },
  { functional: true, dispatch: false }
);

const goBackRouterEffect$ = createEffect(
  (actions$ = inject(Actions)) => {
    const router = inject(Router);
    return actions$.pipe(
      ofType(EntriesActions.goBack),
      map(() => {
        router.navigate(['entries/']);
      })
    );
  },
  { functional: true, dispatch: false }
);

export const entriesEffects: any[] = [
  loadEntries$,
  selectEntryRouterEffect$,
  goBackRouterEffect$,
];
