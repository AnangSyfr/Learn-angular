import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { AboutUsComponent } from "@components/about-us/about-us.component";
import { AchievementComponent } from "@components/achievement/achievement.component";
import { BannerComponent } from "@components/banner/banner.component";
import { FooterComponent } from "@components/footer/footer.component";
import { HeaderMenuComponent } from "@components/header-menu/header-menu.component";
import { HeaderComponent } from "@components/header/header.component";
import { NewsComponent } from "@components/news/news.component";
import { TestimonialComponent } from "@components/testimonial/testimonial.component";

@Component({
    selector: "app-main",
    standalone: true,
    imports: [
        HeaderComponent,
        HeaderMenuComponent,
        BannerComponent,
        AboutUsComponent,
        NewsComponent,
        AchievementComponent,
        TestimonialComponent,
        FooterComponent,
    ],
    templateUrl: "./main.component.html",
    styleUrl: "./main.component.css",
})
export class MainComponent implements OnInit {
    bannerEl: any;
    headerEl: any;

    bannerIsScroll: boolean = false;

    constructor(private el: ElementRef) {}
    ngOnInit(): void {
        this.headerEl = this.el.nativeElement.querySelector("#headerId").offsetTop;
        this.bannerEl = this.el.nativeElement.querySelector("#bannerId").offsetTop;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.bannerIsScroll = window.scrollY > this.headerEl;
    }
}
