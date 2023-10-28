import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

interface expandedRows {
    [key: string]: boolean;
}

@Component({
    templateUrl: './table-caso.component.html',
    providers: [MessageService, ConfirmationService],
})
export class TableCaseComponent implements OnInit {
    public dataRequest = [];

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;

    constructor(
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.getdata();
    }

    onSort() {
        this.getdata();
    }

    getdata() {
        this.dataRequest = [
            {
                id_caso: 0,
                nombre: 'Caso 1',
                id_cliente: 0,
                id_abogado: 0,
                fecha_inicio: '2023-10-28T15:35:41.595Z',
                fecha_finalizacion: '2023-10-28T15:35:41.595Z',
                creado_por: 0,
                fecha_creacion: '2023-10-28T15:35:41.595Z',
                modificado_por: 0,
                fecha_modificacion: '2023-10-28T15:35:41.595Z',
                estado: true,
            },
            {
                id_caso: 0,
                nombre: 'Caso 2',
                id_cliente: 0,
                id_abogado: 0,
                fecha_inicio: '2023-10-28T15:35:41.595Z',
                fecha_finalizacion: '2023-10-28T15:35:41.595Z',
                creado_por: 0,
                fecha_creacion: '2023-10-28T15:35:41.595Z',
                modificado_por: 0,
                fecha_modificacion: '2023-10-28T15:35:41.595Z',
                estado: true,
            },
            {
                id_caso: 0,
                nombre: 'Caso 3',
                id_cliente: 100,
                id_abogado: 0,
                fecha_inicio: '2023-10-28T15:35:41.595Z',
                fecha_finalizacion: '2023-10-28T15:35:41.595Z',
                creado_por: 0,
                fecha_creacion: '2023-10-28T15:35:41.595Z',
                modificado_por: 0,
                fecha_modificacion: '2023-10-28T15:35:41.595Z',
                estado: true,
            },
        ];
        this.loading = false;
    }
    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
}
