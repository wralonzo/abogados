import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'files',
                data: { breadcrumb: 'File' },
                loadChildren: () =>
                    import('./file/filedemo.module').then(
                        (m) => m.FileDemoModule
                    ),
            },
            {
                path: 'tableuser',
                data: { breadcrumb: 'Table-User' },
                loadChildren: () =>
                    import('./table-usuario/table-usuario.module').then(
                        (m) => m.TableUserModule
                    ),
            },
            {
                path: 'tabledocs',
                data: { breadcrumb: 'Table-Doc' },
                loadChildren: () =>
                    import('./table-documento/table-documento.module').then(
                        (m) => m.TableDocumentModule
                    ),
            },
            {
                path: 'tableclient',
                data: { breadcrumb: 'Table-cliente' },
                loadChildren: () =>
                    import('./table/tabledemo.module').then(
                        (m) => m.TableDemoModule
                    ),
            },
            {
                path: 'tablecase',
                data: { breadcrumb: 'Table-Case' },
                loadChildren: () =>
                    import('./table-caso/table-caso.module').then(
                        (m) => m.TableCaseModule
                    ),
            },
            {
                path: 'table',
                data: { breadcrumb: 'Table-Case' },
                loadChildren: () =>
                    import('./table-caso/table-caso.module').then(
                        (m) => m.TableCaseModule
                    ),
            },
            {
                path: 'calendar',
                data: { breadcrumb: 'Calendar' },
                loadChildren: () =>
                    import('./calendar/calendar.module').then(
                        (m) => m.CalendarModule
                    ),
            },
            { path: '**', redirectTo: '/notfound' },
        ]),
    ],
    exports: [RouterModule],
})
export class UIkitRoutingModule {}
