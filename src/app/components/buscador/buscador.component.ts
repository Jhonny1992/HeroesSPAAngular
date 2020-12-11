import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Input() heroes: any[] = [];
  termino: string;
  @Input() index:string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data =>{
      this.termino = data['termino'];
      this.heroes = this.heroesService.buscarHeroes(data['termino']);

    });
  }

  verHeroe(){
    this.router.navigate(['/heroe',this.index]);
  }

}
