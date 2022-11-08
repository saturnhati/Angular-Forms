import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TDFormComponent } from './tdform/tdform.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'TDForm',
  },
  {
    path: 'TDForm',
    component: TDFormComponent,
  },
  {
    path: 'ReactiveForm',
    component: ReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
