import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from '../../../views/home/home.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ MatSidenavModule, MatListModule, HomeComponent, RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
