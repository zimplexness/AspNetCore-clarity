import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { WeatherService } from '../models/index';
import { SharedModule} from '../shared/index';


@NgModule({
    imports: [SharedModule,HomeRoutingModule],
    declarations: [routedComponents],
    providers: [WeatherService]
})

export class HomeModule { }
