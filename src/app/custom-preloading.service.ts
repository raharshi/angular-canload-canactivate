import { Injectable } from '@angular/core';
import { PreloadingStrategy,Route } from '@angular/router';
import { Observable, timer, observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class CustomPreloadingService implements PreloadingStrategy{

  constructor() { }

  preload(route:Route,load:() => Observable<any>):Observable<any>{
    if(route.data && route.data['preload']== true){
      console.log('Preload Path: ' + route.path + ', delay:' + route.data['delay']);
      if(route.data && route.data['delay']==true){
        return timer(5000).mergeMap(() => load());
      }
      return load();
    }
    else{
      return Observable.of(null);
    }
  }

}