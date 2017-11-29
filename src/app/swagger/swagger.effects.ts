import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { LocalStorageService, Action } from '@app/core';

import { SwaggerService } from '@app/swagger/swagger.service';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operator/map';
import { catchError } from 'rxjs/operators';

import { SWAGGER_INIT, SWAGGER_KEY } from '@app/swagger/swagger.reducer';

@Injectable()
export class SwaggerEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private swaggerService: SwaggerService
  ) {}

  @Effect({ dispatch: false })
  swaggerInitialize() {
    return this.actions$
      .ofType(SWAGGER_INIT)
      .pipe(
        tap(action => {
          console.log('2');
          return this.localStorageService.setItem(SWAGGER_KEY, { swaggerInit: true });
        })
      );
    // console.log(swagger);
  }

}
