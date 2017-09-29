import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShortTermPage } from './short-term';

@NgModule({
  declarations: [
    ShortTermPage,
  ],
  imports: [
    IonicPageModule.forChild(ShortTermPage),
  ],
})
export class ShortTermPageModule {}
