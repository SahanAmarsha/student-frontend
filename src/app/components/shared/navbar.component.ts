import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-light bg-light shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Student Marks Management</h1>
      <ul class="nav nav-pills row justify-content-between" style="font-size: 20px">
        <li class="align-self-start mr-5" style="color: black; background-color: greenyellow;" routerLinkActive="active"><a [routerLink]="['/add']">ADD</a></li>
        <li  class="align-self-end ml-5" style="color: black; background-color: aqua;" routerLinkActive="active"><a [routerLink]="['/display']">DISPLAY</a></li>
      </ul>
    </nav>
    `
})
export class NavbarComponent {

}
