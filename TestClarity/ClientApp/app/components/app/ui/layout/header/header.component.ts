import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: []
})
export class HeaderComponent {
    constructor(private router : Router) {  }

    headerLinks = [
        { link: ['/', 'home'], icon: 'home', label : 'Home' },
        { link: ['/', 'settings'], icon: 'cog' , label : 'Settings'}
    ];

    subLinks = [
        { link: ['/', 'home'], label: 'Home' },
        { link: ['/', 'about'], label: 'About' }
    ];

}
