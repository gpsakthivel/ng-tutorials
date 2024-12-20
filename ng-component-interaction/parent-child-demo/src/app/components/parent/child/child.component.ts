import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() loggedIn!: boolean;
  // @Input('loggedIn') loginFlag!: boolean;

  // private _loggedIn!: boolean;
  // message!: string;
  //
  // get loggedIn(): boolean {
  //   return this._loggedIn;
  // }
  //
  // @Input()
  // set loggedIn(value) {
  //   this._loggedIn = value;
  //   if(value === true) {
  //     this.message = "Welcome back Vishwas";
  //   } else {
  //     this.message = 'Please log in';
  //   }
  // }

  // @Input() loggedIn!: boolean;
  // message!: string;
  //
  // constructor() { }
  //
  // ngOnChanges(changes:SimpleChanges): void {
  //   console.log(changes);
  //   const loggedInValue = changes['loggedIn'];
  //   if(loggedInValue.currentValue === true) {
  //     this.message = "Welcome back Vishwas";
  //   } else {
  //     this.message = 'Please log in';
  //   }
  // }

  // name = 'Vishwas';
  //
  // greetVishwas() {
  //   alert('Hey Vishwas')
  // }



  @Output() greetEvent = new EventEmitter();
  name = 'codevolution';

  callParentGreet() {
    // alert('Hello Vishwas 1');
    this.greetEvent.emit(this.name);
  }

}
