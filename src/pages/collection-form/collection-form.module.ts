import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionFormPage } from './collection-form';

@NgModule({
  declarations: [
    CollectionFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionFormPage),
  ],
})
export class CollectionFormPageModule {}
