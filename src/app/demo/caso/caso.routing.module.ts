import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: 'create', data: { breadcrumb: 'create-caso' }, loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
	exports: [RouterModule]
})
export class CasoRoutingModule { }
