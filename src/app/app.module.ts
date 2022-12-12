// app.module is the root module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'  // don't need the extension
//NgModule is a decorator
@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}