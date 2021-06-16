import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabilityPage } from './hability.page';

const routes: Routes = [
  {
    path: '',
    component: HabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabilityPageRoutingModule {}
