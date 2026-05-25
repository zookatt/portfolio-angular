import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Hero } from './features/hero/hero';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Projects, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
