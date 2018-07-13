import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// STEP 3 
const routes: Routes = [
  // Routes go here
];
// STEP 4 

// STEP 5
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
