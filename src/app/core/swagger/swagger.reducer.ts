import { Action } from '../core.interfaces';

export const initialState = {
  swaggerInit: false,
  api: {}
};

export const SWAGGER_KEY = 'SWAGGER';
export const SWAGGER_INIT = 'SWAGGER_INIT';

export const actionSwaggerInit = (swagger: string) => ({
  type: SWAGGER_INIT,
  payload: swagger
});


export const selectorSwagger = state => state.swagger;

export function swaggerReducer(state = initialState, action: Action) {
  switch (action.type) {
    // case SWAGGER_INIT:
    //   return Object.assign({}, state, {
    //     api: action.payload
    //   });

    default:
      return state;
  }
}
