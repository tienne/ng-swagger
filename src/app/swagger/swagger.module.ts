import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared';

import { SwaggerEffects } from '@app/swagger/swagger.effects';
import { swaggerReducer } from '@app/swagger/swagger.reducer';
import { SwaggerService } from '@app/swagger/swagger.service';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('swagger', swaggerReducer),
    EffectsModule.forFeature([SwaggerEffects])
  ],
  declarations: [SwaggerService]
})
export class SwaggerModule { }
