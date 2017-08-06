import { Injectable, ViewContainerRef, ComponentFactoryResolver, Provider, ReflectiveInjector } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  public vcr: ViewContainerRef;
  private currentComponent = null;

  private contentSource: Subject<boolean> = new Subject<boolean>();
  public content$ = this.contentSource.asObservable();

  constructor(private resolver: ComponentFactoryResolver) { }

  //モーダルの展開
  open(data: any, provider: Provider): void {
    //データがなければ何もしない
    if (!data) {
      return;
    }

    //プロバイダ用のデータに作り直す
    const providers = ReflectiveInjector.resolve([provider]);
    //プロバイダからインジェクタを作成
    const injector = ReflectiveInjector.fromResolvedProviders(providers, this.vcr.parentInjector);

    //コンポーネント複製する。コンストラクタでサービスをやることと同じ
    const factory = this.resolver.resolveComponentFactory(data);
    //コンポーネント作成
    const component = this.vcr.createComponent(factory, this.vcr.length, injector);

    // if other modal container is created
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
    this.contentSource.next(true);
  }

  close(): void {
    if (this.currentComponent) {
      this.currentComponent.destroy();
      this.contentSource.next(false);
    }
  }
}
