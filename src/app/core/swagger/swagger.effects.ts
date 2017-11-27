import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { Action } from '@app/core';

import { tap } from 'rxjs/operators/tap';

import { parse } from 'swagger-parser';
import { SWAGGER_INIT, SWAGGER_KEY } from '@app/core/swagger/swagger.reducer';

@Injectable()
export class SwaggerEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  swaggerInit() {
    return this.actions$
      .ofType(SWAGGER_INIT)
      .pipe(
        tap(action => {
          console.log(action);
          return this.localStorageService.setItem(SWAGGER_KEY, { swaggerInit: true });
        })
      );
    // const swagger = parse('http://petstore.swagger.io/v2/swagger.json');
    // console.log(swagger);
  }

}
