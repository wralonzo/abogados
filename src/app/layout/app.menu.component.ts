import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home/dashboard'] }
                ]
            },
            {
                label: 'Mi bufete',
                items: [
                    { label: 'Clientes', icon: 'pi pi-fw pi-id-card', routerLink: ['/home/uikit/tableclient'] },
                    { label: 'Casos', icon: 'pi pi-fw pi-check-square', routerLink: ['/home/uikit/tablecase'] },
                    { label: 'Calendario', icon: 'pi pi-fw pi-bookmark', routerLink: ['/home/uikit/calendar'] },
                    { label: 'Documentos', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/home/uikit/files'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-box', routerLink: ['/home/uikit/tableuser'] },
                ]
            },
        ];
    }
}
