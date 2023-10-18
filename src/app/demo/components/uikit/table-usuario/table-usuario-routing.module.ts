import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableUserComponent } from './table-usuario.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TableUserComponent }
	])],
	exports: [RouterModule]
})
export class TableDemoRoutingModule { }
