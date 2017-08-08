import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import {Jsonp,URLSearchParams} from '@angular/http';

@Injectable()
export class RequestService {

  private HeartRateUrl = 'https://api.fitbit.com/1/user/-/activities/heart/date/';
  private StepsUrl = 'https://api.fitbit.com/1/user/-/activities/steps/date/';
  private backurl = 'http://apihms.swkoubou.com';
  constructor( private http:Http,
              private jsonp:Jsonp) { }

  getWeekHeartRate(token:string,day:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let heartRateUrl = this.HeartRateUrl + day + "/7d.json";
    return this.http.get(heartRateUrl,options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getWeekSteps(token:string,day:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let stepsUrl = this.StepsUrl + day + "/7d.json";
    return this.http.get(stepsUrl,options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getMonth(token:string,day:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'http://gestion2api.swkoubou.com/users/me/attendance_records';
    return this.http.get(monthUrl,options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getProfile(token:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'https://api.fitbit.com/1/user/-/profile.json'
    return this.http.get(monthUrl,options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  putProfile(token:string, fitbitid:string, fitbittoken:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    var params = new URLSearchParams();
    params.set('fitbit_id', fitbitid);
    params.set('fitbit_access_token', fitbittoken);
    let monthUrl = 'http://gestion2api.swkoubou.com/users/me';
    return this.http.put(monthUrl,params, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  GetStress(token:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'http://gestion2api.swkoubou.com/users/me/stress';
    return this.http.get(monthUrl, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  login(mailadress:string,password:string, groupname:string):Observable<string[]>{
    let creUrl = 'http://gestion2api.swkoubou.com/authorize/signin';
    var params = new URLSearchParams();
    params.set('group_name', groupname);
    params.set('email', mailadress);
    params.set('password', password);

    //let options = new RequestOptions({search:params});
    return this.http.post(creUrl ,params,'')
            .map(this.extractData)
            .catch(this.handleError);
  }

  create_group(Mailadress:string,Password:string,Groupname:string,Firstname:string,Lastname:string,Sex:string):Observable<string[]>{
    let creUrl = 'http://gestion2api.swkoubou.com/groups';
    var params = new URLSearchParams();
    params.set('name', Groupname);
    params.set('email', Mailadress);
    params.set('first_name', Firstname);
    params.set('last_name', Lastname);
    params.set('gender', Sex);
    params.set('password', Password);

    return this.http.post(creUrl ,params,'')
            .map(this.extractData)
            .catch(this.handleError);
  }

  group_search(Groupname:string):Observable<string[]>{
    let creUrl = 'http://gestion2api.swkoubou.com/groups/' + Groupname;

    return this.http.get(creUrl)
            .map(this.extractData)
            .catch(this.handleError);
  }

  enter(token:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'http://gestion2api.swkoubou.com/users/me/work/enter';
    return this.http.post(monthUrl,'', options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  logout(token:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'http://gestion2api.swkoubou.com/users/me/work/exit';
    return this.http.post(monthUrl,'', options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getstress(token:string, id:number):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'http://gestion2api.swkoubou.com/users/' + id +'/stress';
    return this.http.get(monthUrl, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getworktime(token:string, id:number):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'http://gestion2api.swkoubou.com/users/' + id +'/attendance_records';
    return this.http.get(monthUrl, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  ChangeUserName(token:string, firstname:string, lastname):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    var params = new URLSearchParams();
    params.set('first_name', firstname);
    params.set('last_name', lastname);
    let monthUrl = 'http://gestion2api.swkoubou.com/users/me';
    return this.http.put(monthUrl,params, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  create_user(Mailadress:string,Password:string,Firstname:string,Lastname:string,Gender:string, token:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let creUrl = 'http://gestion2api.swkoubou.com/users';
    var params = new URLSearchParams();
    params.set('email', Mailadress);
    params.set('first_name', Firstname);
    params.set('last_name', Lastname);
    params.set('gender', Gender);
    params.set('password', Password);

    return this.http.post(creUrl ,params, options)
            .map(this.extractData)
            .catch(this.handleError);
  }

  getuserlist(token:string):Observable<string[]>{
    let headers = new Headers({'Authorization':"Bearer " + token});
    let options = new RequestOptions({headers:headers});
    let monthUrl = 'http://gestion2api.swkoubou.com/users';
    return this.http.get(monthUrl, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }


  //これも定番。
  private extractData(res:Response){
    let body = res.json();
    return body || { };
  }

  //これも定番
  private handleError(error:Response | any){
    let errMsg:string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
