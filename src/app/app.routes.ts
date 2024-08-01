import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PieComponent } from './components/pie/pie.component';
import { BarComponent } from './components/bar/bar.component';
import { LineComponent } from './components/line/line.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'pie', component: PieComponent },
    { path: 'bar', component: BarComponent },
    { path: 'line', component: LineComponent },
    { path: '**', component: MainComponent, pathMatch: 'full' },
];
