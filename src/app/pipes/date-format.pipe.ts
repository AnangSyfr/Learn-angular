import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: "dateFormat",
    standalone: true,
})
export class DateFormatPipe implements PipeTransform {
    transform(value: Date, ...args: unknown[]): string {
        const formattedDate = new Date(value).toLocaleString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
        return formattedDate
    }
}
