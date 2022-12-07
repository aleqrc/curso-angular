import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  size = 23
  font = 'Agency FB'
  color = 'blue'

  classes = ['green-title', 'small-title'];
  underline = 'underline-title';

}
