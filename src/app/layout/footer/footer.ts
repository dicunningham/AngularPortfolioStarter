import { Component, inject } from '@angular/core';
import { Config } from '../../services/config';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  config = inject(Config);

}
