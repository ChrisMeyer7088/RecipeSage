import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessageThreadPage } from './message-thread.page';

@NgModule({
  declarations: [
    MessageThreadPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MessageThreadPage
      }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
})
export class MessageThreadPageModule {}
