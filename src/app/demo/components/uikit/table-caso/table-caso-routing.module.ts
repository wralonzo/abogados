import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableCaseComponent } from './table-caso.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TableCaseComponent }
	])],
	exports: [RouterModule]
})
export class TableDemoRoutingModule { }
