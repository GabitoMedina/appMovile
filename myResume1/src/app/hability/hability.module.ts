import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabilityPageRoutingModule } from './hability-routing.module';

import { HabilityPage } from './hability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabilityPageRoutingModule
  ],
  declarations: [HabilityPage]
})
export class HabilityPageModule {}
