import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableDocumentComponent } from './table-documento.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TableDocumentComponent }
	])],
	exports: [RouterModule]
})
export class TableDemoRoutingModule { }
