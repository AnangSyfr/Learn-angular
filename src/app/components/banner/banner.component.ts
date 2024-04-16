import { NgFor } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgMaterialModule } from "src/app/shared/ng-material/ng-material.module";

@Component({
    selector: "app-banner",
    standalone: true,
    imports: [NgMaterialModule, NgFor],
    templateUrl: "./banner.component.html",
    styleUrl: "./banner.component.css",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent {
    listOfBanners = [
        "/assets/images/bg-1.jpg",
        "/assets/images/bg-2.jpg",
        "/assets/images/bg-3.jpg",
    ];
}
