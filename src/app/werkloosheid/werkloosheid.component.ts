import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getTodos } from '../reducers/werkloosheid/werkloosheid.reducer';

@Component({
  selector: 'app-werkloosheid',
  templateUrl: './werkloosheid.component.html',
  styleUrls: ['./werkloosheid.component.css']
})
export class WerkloosheidComponent implements OnInit {

  constructor(private store:Store<{}>) { }

  todos$: Observable<string[]>;

  ngOnInit() {
    this.todos$ = this.store.pipe(select(getTodos));
  }

}
