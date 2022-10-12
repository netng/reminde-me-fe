import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  signInMode: boolean = false;

  constructor() { }
}
