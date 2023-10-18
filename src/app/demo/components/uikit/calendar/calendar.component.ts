import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
    templateUrl: './calendar.component.html',
    providers: []
})
export class CalendarComponent implements OnInit {
    ngOnInit(): void {
    }

    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin],
    };
    
}