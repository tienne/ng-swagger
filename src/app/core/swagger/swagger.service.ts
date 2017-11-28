import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import * as Swagger from 'swagger-parser';
import { Spec, Schema } from 'swagger-schema-official';

import { map } from 'rxjs/operator/map';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class SwaggerService {
  constructor() { }

  swaggerInit(): Observable<any> {
    return this.swaggerParse('http://petstore.swagger.io/v2/swagger2.json');
  }

  /**
   * api 문서를 파싱합니다.
   * @param {string} url
   * @returns {Observable<Spec>}
   */
  swaggerParse(url: string): Observable<Spec> {
    return Observable.fromPromise(Swagger.parse(url)).pipe(
      // map((api: Spec) => api)
    );
  }
}
