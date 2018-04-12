import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { list_hero } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './messages.service';
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return of(list_hero);
  }
}
