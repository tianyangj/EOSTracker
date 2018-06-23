import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './contracts1.component.html',
  styleUrls: ['./contracts1.component.css']
})
export class Contracts1Component implements OnInit {

  columnHeaders = [
    'actionId',
    'transactionId',
    'createdAt',
    'authorization',
    'handler',
    'name'
  ];
  actions$: Observable<Action[]>;
  total: number;

  constructor(
    private route: ActivatedRoute,
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.actions$ = this.route.queryParams.pipe(
      switchMap(params => this.actionService.getActions(params.page || 1)),
      tap(actions => {
        console.log(actions);
        if (actions[0]) {
          this.total = actions[0].id;
        }
      })
    );
  }

}
