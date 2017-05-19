/**
 * Created by 1521038 on 2017/05/18.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let members=[
      {id:'Leader',name:'sakamoto'},
      {id:'Backend' ,name:'urano'},
      {id:'Infrastructure',name:'yuudai'},
      {id:'Front',name:'abe'},
      {id:'Design',name:'haga'},
      {id:'Backend',name:'ogasawara'},
      {id:'Backend',name:'isojima?'},
      {id:'Infrastructure',name:'haruki'},
      {id:'Front',name:'nishi3'},
      {id:'Front',name:'uchida'},
      {id:'Front',name:'hisa'}
    ];
    return {members}
  }
}
