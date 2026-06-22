import { Component, inject } from '@angular/core';
import { Config } from '../../services/config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  config = inject(Config);

}
