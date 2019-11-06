import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  mockResponse = new BehaviorSubject<ContainerData[]>(null);

  constructor() {
    this.init();
  }

  private init() {
    const containerResponse = [];
    containerResponse.push(new ContainerData('success', 'container 1'));
    containerResponse.push(new ContainerData('warning', 'container 2'));
    containerResponse.push(new ContainerData('danger', 'container 2'));

    this.mockResponse.next(containerResponse);
  }

  retrieveData(): Observable<ContainerData[]> {
    return this.mockResponse.asObservable();
  }

}

export class ContainerData {
  constructor(public status: string , public name: string) {}
}

