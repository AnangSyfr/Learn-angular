import { Component } from "@angular/core";
import { NgMaterialModule } from "src/app/shared/ng-material/ng-material.module";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [NgMaterialModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.css",
})
export class HeaderComponent {}
