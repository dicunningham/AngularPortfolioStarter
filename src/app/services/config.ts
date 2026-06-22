import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Config {

  public readonly myName = 'Danie Cunningham';
  public readonly currentYear = new Date().getFullYear();
  
}
