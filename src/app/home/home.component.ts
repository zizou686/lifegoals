import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  metas: any[] = [];
  nuevaMeta: string = '';

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.obtenerMetas().subscribe((data) => {
      this.metas = data;
    });
  }

  agregarMeta(): void {
    if (this.nuevaMeta.trim()) {
      this.metaService.agregarMeta(this.nuevaMeta).then(() => {
        this.nuevaMeta = '';
      });
    }
  }

  eliminarMeta(id: string): void {
    this.metaService.eliminarMeta(id);
  }
}
