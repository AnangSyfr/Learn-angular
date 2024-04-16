import {
    CUSTOM_ELEMENTS_SCHEMA,
    Component,
    ElementRef,
    ViewChild,
} from "@angular/core";
import { DateFormatPipe } from "src/app/pipes/date-format.pipe";
import { NgMaterialModule } from "src/app/shared/ng-material/ng-material.module";
import { SwiperContainer } from "swiper/element";

@Component({
    selector: "app-news",
    standalone: true,
    imports: [NgMaterialModule, DateFormatPipe],
    templateUrl: "./news.component.html",
    styleUrl: "./news.component.css",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsComponent {
    @ViewChild("newSwiper") swiper!: ElementRef<SwiperContainer>;

    listNews = [
        {
            title: "Contoh 1",
            tag: "berita 1",
            datePost: new Date("2023-10-10"),
            author: "John",
            image: "assets/images/news-1.jpg",
        },
        {
            title: "Contoh 2",
            tag: "berita 2",
            datePost: new Date("2023-10-10"),
            author: "John",
            image: "assets/images/news-2.jpg",
        },
        {
            title: "Contoh 3",
            tag: "berita 3",
            datePost: new Date("2023-10-10"),
            author: "John",
            image: "assets/images/news-3.jpg",
        },
    ];

    onPrev() {
        this.swiper.nativeElement.swiper.slidePrev();
    }

    onNext() {
        this.swiper.nativeElement.swiper.slideNext();
    }
}
