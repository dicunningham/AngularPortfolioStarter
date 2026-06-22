import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Config } from '../../services/config';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

  config = inject(Config);

}