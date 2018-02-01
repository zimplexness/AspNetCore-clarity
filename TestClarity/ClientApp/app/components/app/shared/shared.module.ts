import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ClarityModule
    ],
    declarations: [
    ],
    providers: []
})
export class SharedModule { }