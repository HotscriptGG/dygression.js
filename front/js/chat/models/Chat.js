"use strict";

// @TODO
// -----
// 1. Use localStorage to store messages between sessions

function Chat(options) {
	this.messageFactory = new MessageFactory();
    this.messages = [];
    this.threads = [];
}

Chat.prototype.receiveMessage = function(message) {
    this.messages.push(message);
    
    EventBus.publish("message/new", message);
}