import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getHobbies } from '../reducers/jeugdvakantie/jeugdvakantie.reducer';

@Component({
  selector: 'app-jeugdvakantie',
  templateUrl: './jeugdvakantie.component.html',
  styleUrls: ['./jeugdvakantie.component.css']
})
export class JeugdvakantieComponent implements OnInit {

  hobbies$: Observable<string[]>

  constructor(private store: Store<{}>) { }

  ngOnInit() {
    this.hobbies$ = this.store.pipe(select(getHobbies));
  }

}
