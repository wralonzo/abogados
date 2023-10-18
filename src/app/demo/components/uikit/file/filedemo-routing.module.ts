import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileComponent } from './filedemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FileComponent }
	])],
	exports: [RouterModule]
})
export class FileDemoRoutingModule { }
