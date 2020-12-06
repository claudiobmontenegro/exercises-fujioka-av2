import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardAvatarComponent } from './card-avatar/card-avatar.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardAvatarComponent,
    DiretivasComponent,
    TemplateFormsComponent,
    FormReativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
