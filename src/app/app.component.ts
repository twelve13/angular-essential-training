import { Component } from '@angular/core';

@Component({
	selector: 'app-root', //this is in index.html, where the content will be placed
	// template: '<h1>My App!</h1>'
	templateUrl: './app.component.html',
	// styles: [`
	// 	h1 { color: #ffffff; }
	// 	.description {
	// 		font-style: italic;
	// 		color: magenta;
	// 	}
	// `]
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	firstMediaItem = {
		id: "1",
		name: "Maniac",
		medium: "Series",
		category: "Dark Comedy",
		year: 2018,
		watchedOn: 1294166565384,
		isFavorite: true
	};

	onMediaItemDelete(mediaItem) {};
}
