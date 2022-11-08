import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss'],
})
export class TDFormComponent implements OnInit {
  @ViewChild('form') form!: FormGroup;

  superheroes: Hero[] = [
    {
      name: 'Super Mario',
      alterEgo: 'Mario',
      power: 'Super-strenght',
      enemy: 'Bowser',
      planet: 'Earth',
      weakness: 'Peach',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addHero() {
    let name = this.form.value.name;
    let alterEgo = this.form.value.alterEgo;
    let power = this.form.value.power;
    let enemy = this.form.value.enemy;
    let planet = this.form.value.planet;
    let weakness = this.form.value.weakness;
    let newHero = new Hero(name, alterEgo, power, enemy, planet, weakness);
    console.log(newHero);
    this.superheroes.push(newHero);
    this.form.reset();
  }
}
