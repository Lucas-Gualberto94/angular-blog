// component-resolver.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ComponentMap } from './component-map.component';
import { HomeComponent } from '../home/home.component';

@Injectable({ providedIn: 'root' })
export class DecideComponent implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];

    const component = ComponentMap[id] || HomeComponent;

    return component;


     }
}

