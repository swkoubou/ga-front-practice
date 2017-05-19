/**
 * Created by 1521038 on 2017/05/18.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import './rxjs-extensions';

import { Member } from './member';

@Injectable()

export class MemberSearchService{

  constructor(private http:Http){ }

  search(term:string):Observable<Member[]>{
    return this.http
                 .get('app/members/?name=${term}')
                 .map(response => response.json().data as Member[]);

  }

}
