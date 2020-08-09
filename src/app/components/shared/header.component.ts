import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills" style="font-size: 20px">
                    <li routerLinkActive="active"><a [routerLink]="['/add']">Add Student</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['/display']">Display Students</a></li>
                </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}