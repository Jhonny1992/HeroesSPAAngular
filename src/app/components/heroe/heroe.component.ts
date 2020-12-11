import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroeServices: HeroesService
    ) { 

    this.activatedRoute.params.subscribe(data =>{
      this.heroe = this.heroeServices.getHeroe(data['id']);
    })
  }


}
