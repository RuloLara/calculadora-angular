import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado = 0;
  opA = 0;
  opB = 0;
  
  
  realizarSuma(){
    this.resultado = this.opA + this.opB;
  }
}
