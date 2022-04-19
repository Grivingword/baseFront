import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { MaterialModule} from "../material.module";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

export const ROUTES: Routes = [
  { path: '', component: PanelComponent }
  // {
  //   path: '', component: PanelComponent, children: []
  // },
];

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES),

    FormsModule,
    FontAwesomeModule,
  ]
})
export class PanelModule { }
