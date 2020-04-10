import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEventPagePageRoutingModule } from './add-event-routing.module';

import { AddEventPage } from './add-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEventPagePageRoutingModule,
  ],
  declarations: [AddEventPage]
})
export class AddEventPagePageModule {
}
