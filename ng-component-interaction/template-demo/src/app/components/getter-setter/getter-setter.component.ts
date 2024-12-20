import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getter-setter',
  templateUrl: './getter-setter.component.html',
  styleUrls: ['./getter-setter.component.css']
})
export class GetterSetterComponent implements OnInit {
  private _customerName!: string;

  constructor() { }

  ngOnInit(): void {
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if(value === 'Vishwas') {
      alert('Hello Vishwas')
    }
  }
}
