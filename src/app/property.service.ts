import { Injectable } from '@angular/core';
import mockData from '../assets/mock/data.json';
import { Store } from '@ngrx/store';
import { receivedRecords } from './store/app.actions';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private store: Store) { 
    
  }
  init(){
    this.store.dispatch(receivedRecords({payload: mockData}));
  }
}
