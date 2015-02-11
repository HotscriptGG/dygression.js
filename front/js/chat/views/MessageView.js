"use strict";

function MessageView(message) {
	this.content = message.content;
}

MessageView.prototype.render = function() {
	var view = document.createElement("div");
	view.classList.add("alert");
	view.classList.add("alert-success");

	var content = document.createTextNode(this.content);
	view.appendChild(content);
	return view;
}