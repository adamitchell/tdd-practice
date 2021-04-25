import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOfLifeComponent } from './game-of-life/game-of-life.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game-of-life', component: GameOfLifeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
