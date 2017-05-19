/**
 * Created by 1521038 on 2017/05/18.
 */
import './rxjs-extensions';

import { Component,OnInit }from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MemberSearchService } from './member-search.service';
import { Member } from './member';

@Component({
  moduleId:module.id,
  selector:'member-search',
  templateUrl:'member-search.component.html',
  styleUrls:['member-search.component.css'],
  providers:[MemberSearchService]
})

export class MemberSearchComponent implements OnInit {
  members: Observable<Member[]>;
  private searchTerms = new Subject<string>();

  constructor(private memberSearchService: MemberSearchService,
              private router: Router) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.members = this.searchTerms
      .debounceTime(300)        // 300ms イベントを止める
      .distinctUntilChanged()   // 次の検索条件が以前と同じなら無視する
      .switchMap(term => term   // 新しいobservableに変換する
        // http検索observableを返す
        ? this.memberSearchService.search(term)
        // または条件がないとき、空のヒーローのobservableを返す
        : Observable.of<Member[]>([]))
      .catch(error => {
        // TODO: 現実のエラーハンドリングを行う
        console.log(error);
        return Observable.of<Member[]>([]);
      });
  }

  gotoDetail(member: Member): void {
    let link = ['/detail', member.name];
    this.router.navigate(link);
  }
}
