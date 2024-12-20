import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-two-way-binding',
  templateUrl: './split-two-way-binding.component.html',
  styleUrls: ['./split-two-way-binding.component.css']
})
export class SplitTwoWayBindingComponent implements OnInit {
  username!: string;

  constructor() { }

  ngOnInit(): void {
  }

  greetVishwas(updatedValue: string) {
    this.username = updatedValue;
    if(updatedValue === 'Vishwas') {
      alert('Welcome back Vishwas')
    }
  }
}
