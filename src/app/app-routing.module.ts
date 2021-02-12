import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsEditorComponent } from './page/events-editor/events-editor.component';
import { EventsListComponent } from './page/events-list/events-list.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: 'event/:id',
    component: EventsEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
