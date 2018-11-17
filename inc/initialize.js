"use strict";

let json;

window.onload = function () {
	json = new JSONFile();
	json.importFrom("inc/file.json", ()=>console.log(json.object));
}
