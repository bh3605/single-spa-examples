import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app11b-home',
  template: `
    <h2>Home</h2>
    <div>
      [ <a routerLink="/app10a">App10A</a> |
      <a routerLink="/app10b">App10B</a> |
      <a routerLink="/app11">App11</a> |
      App11B ]
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent {}
