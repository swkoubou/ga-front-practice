/**
 * Created by 1521038 on 2017/03/02.
 */
//---------------------------
//通信処理
//---------------------------
import {Injectable} from "@angular/core";
import {RequestOptions, URLSearchParams, Jsonp,Response, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class HttpService{
  WEB_API_URL:string="https://webservice.recruit.co.jp/ab-road/tour/v1/";
  //APIキー
  API_KEY="c3accc5d3624f6e0";
  DEFAULT_SIZE="30";
  //取得の順番(人気順:5)
  SORT_RANKING="5";
  //JSONPコールバック関数名
  CALLBACK="JSONP_CALLBACK";

  constructor(private jsonp:Jsonp){

  }

  //クラウドからツアー情報取得
  getTourData(areaCode:string):Observable<any>{
    //接続設定
    let option=this.setParam(areaCode);
    //データ取得
    return this.reqData(option);
  }

  //通信設定値作成
  setParam(areaCode:string):RequestOptions{
    //urlパラメータオブジェクト作成
    let param=new URLSearchParams();
    param.set("key",this.API_KEY);
    param.set("area",areaCode);
    param.set("order",this.SORT_RANKING);
    param.set("count",this.DEFAULT_SIZE);
    param.set("format","jsonp");
    param.set("callback",this.CALLBACK);
    //通信設定オブジェクト
    let options:RequestOptionsArgs={
      method:"get",
      url:this.WEB_API_URL,
      search:param
    };
    return new RequestOptions(options);
  }

  //HTTPリクエストとレスポンス処理
  reqData(config:RequestOptions):Observable<any>{
    return this.jsonp.request(config.url, config)//通信実行処理
      .map((response)=>{//レスポンスデータの加工
      let tourData;
      let obj=response.json();
      if(obj.results.error){
        //Web APIリクエスト失敗
        let err=obj.results.error[0];
        tourData={
          error:err.code,
          message:err.message
        }
      }else{
        //Web APIリクエスト成功
        let dataObj=obj.results.tour;
        tourData={
          error:null,
          data:dataObj,
        };
      }
      console.dir(tourData);
      return tourData;
      }
      );
  };
}
