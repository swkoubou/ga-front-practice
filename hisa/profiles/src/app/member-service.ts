/**
 * Created by 1521038 on 2017/05/15.
 */
import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member } from './member';


@Injectable()
export class MemberService{

  private membersUrl='api/members';
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // デモの目的のみ
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(member:Member ): Promise<Member> {
    const url = `${this.membersUrl}/${member.id}`;
    return this.http
      .put(url, JSON.stringify(member), {headers: this.headers})
      .toPromise()
      .then(() => member)
      .catch(this.handleError);
  }



  constructor(private http:Http){ }

  getMembers():Promise<Member[]>{
    return this.http.get(this.membersUrl)
      .toPromise()
      .then(response => response.json().data as Member[])
      .catch(this.handleError);
  }

  create(name: string): Promise<Member> {
    return this.http
      .post(this.membersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    let url = `${this.membersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}
