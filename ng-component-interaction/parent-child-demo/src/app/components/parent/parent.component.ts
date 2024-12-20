import {Component} from '@angular/core';
// import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  // userLoggedIn = true;
  // @ViewChild(ChildComponent) childComponentRef!: ChildComponent;
  //
  // constructor() { }
  //
  // ngOnInit(): void {
  // }
  //
  // ngAfterViewInit(): void {
  //   this.childComponentRef.message = "Message from parent component";
  // }



  greet(name: string) {
    alert('Hello ' + name);
  }
}
