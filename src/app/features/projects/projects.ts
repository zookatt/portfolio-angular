import { Component } from '@angular/core';
import { PROJECTS } from '../../../assets/data/portfolio.data';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-projects',
  imports: [ButtonComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;
}
