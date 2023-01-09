import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'mw-media-item',
	templateUrl: './media-item.component.html',
	styleUrls: ['media-item.component.css']
})
export class MediaItemComponent {
	name = "Glass Onion";
	wasWatched() {
		return true;
	};
	onDelete() {
		console.log("deleted!");
		this.delete.emit(this.mediaItem);
	};
	@Input() mediaItem;
	@Output() delete = new EventEmitter;
}