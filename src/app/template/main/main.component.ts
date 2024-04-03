import { Component } from "@angular/core"
import { AboutUsComponent } from "@components/about-us/about-us.component"
import { BannerComponent } from "@components/banner/banner.component"
import { HeaderMenuComponent } from "@components/header-menu/header-menu.component"
import { HeaderComponent } from "@components/header/header.component"
import { NewsComponent } from "@components/news/news.component"

@Component({
    selector: "app-main",
    standalone: true,
    imports: [
        HeaderComponent,
        HeaderMenuComponent,
        BannerComponent,
        AboutUsComponent,
        NewsComponent,
    ],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.css",
})
export class MainComponent {}
