"use strict";

function Message(options) {
	this.autorId = options.authorId;
	this.content = options.content;
}

// @TODO
// Implement more message types then standard text message
// to take advantage of factory pattern
function MessageFactory() {};

MessageFactory.prototype.createMessage = function(options) {
	return new Message(options);
}