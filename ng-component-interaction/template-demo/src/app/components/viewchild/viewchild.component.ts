import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  name!: string;
  @ViewChild('nameRef') nameElementRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
}
