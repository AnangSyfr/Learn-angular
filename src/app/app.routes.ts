import { Routes } from "@angular/router"
import { MainComponent } from "./template/main/main.component"
import { AdminComponent } from "./template/admin/admin.component"

export const routes: Routes = [
    {
        path: "",
        component: MainComponent,
    },
    {
        path: "admin",
        component: AdminComponent,
    },
]
