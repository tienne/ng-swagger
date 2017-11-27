import { Action } from '../core.interfaces';

export const initialState = {
  swaggerInit: false
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
    // case AUTH_LOGIN:
    //   return Object.assign({}, state, {
    //     isAuthenticated: true
    //   });
    //
    // case AUTH_LOGOUT:
    //   return Object.assign({}, state, {
    //     isAuthenticated: false
    //   });

    default:
      console.log(action);
      console.log(state);
      return state;
  }
}
