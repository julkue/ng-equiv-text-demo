import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  declarations: [
    SharedComponent,
    HelloWorldComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedComponent,
    HelloWorldComponent,
  ]
})
export class SharedModule { }
