import { Component, Input } from "@angular/core";
import { NgMaterialModule } from "src/app/shared/ng-material/ng-material.module";

@Component({
    selector: "app-header-menu",
    standalone: true,
    imports: [NgMaterialModule],
    templateUrl: "./header-menu.component.html",
    styleUrl: "./header-menu.component.css",
})
export class HeaderMenuComponent {
    @Input() bannerIsScroll: boolean = false;
    goToDiv(section: string) {
        alert(section);
    }
}
