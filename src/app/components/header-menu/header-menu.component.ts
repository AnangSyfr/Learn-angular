import { Component } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatListModule } from "@angular/material/list"

@Component({
    selector: "app-header-menu",
    standalone: true,
    imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatListModule],
    templateUrl: "./header-menu.component.html",
    styleUrl: "./header-menu.component.css",
})
export class HeaderMenuComponent {
    goToDiv(section: string) {
        alert(section)
    }
}
