import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form2!: FormGroup;

  superheroes: Hero[] = [
    {
      name: 'Superman',
      alterEgo: 'Clark Kent',
      power: 'Flight',
      enemy: 'Lex Luthor',
      planet: 'Krypton',
      weakness: 'Kryptonite',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.form2 = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      alterEgo: new FormControl(null, [Validators.required]),
      power: new FormControl(null, [Validators.required]),
      enemy: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
      planet: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      weakness: new FormControl(null),
    });
  }

  addHero() {
    let newHero = new Hero(
      this.form2.value.name,
      this.form2.value.alterEgo,
      this.form2.value.power,
      this.form2.value.enemy,
      this.form2.value.planet,
      this.form2.value.weakness
    );
    this.superheroes.push(newHero);
    this.form2.reset();
  }
}
