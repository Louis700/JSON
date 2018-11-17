"use strict";

class JSONFile {
	constructor() {
			
	}
	
	importFrom(link, onload) {
		this.link = link;
		
		let req = new XMLHttpRequest();
		req.open("GET", link, true);

		req.onload = () => {
			this.content = req.response;
			this.object = JSON.parse(this.content);
			onload();
		}

		req.send();
	}
}
