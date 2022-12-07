import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = false;
  mouseEntrando: boolean = false;

  showMessage(): void {
    this.show = !this.show;
    this.mouseEntrando = false;
  }

  showMouseEnter(): void {
    //  const show: boolean = this.show ? false : true;
    //  this.mouseEntrando = show
    this.mouseEntrando = true
  }
}
