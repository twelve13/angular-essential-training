// app.module is the root module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // don't need the extension
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';

//NgModule is a decorator
@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		MediaItemComponent,
		MediaItemListComponent,
		FavoriteDirective
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}