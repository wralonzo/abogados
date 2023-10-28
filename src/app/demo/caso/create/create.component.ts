import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { hostGets } from 'src/app/constantes/baseurl';

@Component({
    templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit() {}

    data() {
        const token = localStorage.getItem('token')!;
        const baseurl = hostGets + 'Caso';
        const data = this.http.get<any>(baseurl).subscribe(
            (res) => {
                // this.loading = false;
            },
            (err) => {
                // this.loading = false;
            }
        );
    }
}
