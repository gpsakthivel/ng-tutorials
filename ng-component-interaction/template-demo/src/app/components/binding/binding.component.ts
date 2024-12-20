import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name!: string;

  incrementCount() {
    this.count += 1;
  }

  decrementCount() {
    this.count -= 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
