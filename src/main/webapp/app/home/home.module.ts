import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HuntingDamagesSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HuntingDamagesSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class HuntingDamagesHomeModule {}
