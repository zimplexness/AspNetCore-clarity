import { NgModule } from '@angular/core';
import { AboutRoutingModule, routedComponents } from './about-routing.component';


@NgModule({
    imports: [AboutRoutingModule],
    declarations: [routedComponents],
    providers: []
})

export class AboutModule { }