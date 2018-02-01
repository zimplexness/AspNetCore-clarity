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
        { link: ['/', 'home'], icon: 'home' },
        { link: ['/', 'settings'], icon: 'cog' }
    ];

    subLinks = [
        { link: ['/', 'home'], label: 'Home' },
        { link: ['/', 'about'], label: 'About' }
    ];

}
