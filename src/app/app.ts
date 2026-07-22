import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router'; 
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    RouterOutlet,
    FormsModule, 
    ReactiveFormsModule,  
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class App {
  private router = inject(Router);

  protected readonly title = signal('Author-Website');

  routeToPage(routeText: string) {
    this.router.navigate([routeText])
  }
}
