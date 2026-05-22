import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  nombre: string = 'Arturo';
  email: string = 'zs24003912@estudiantes.uv.mx';
  github: string = 'https://github.com/zizou686';
}
