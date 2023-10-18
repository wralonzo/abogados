import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalendarComponent } from "./calendar.component";
import { CalendarRoutingModule } from "./calendar-routing.module";
import { FullCalendarModule } from "@fullcalendar/angular";


@NgModule({
	imports: [
		CommonModule,
		CalendarRoutingModule,
		FullCalendarModule
	],
	declarations: [CalendarComponent]
})
export class CalendarModule { }
