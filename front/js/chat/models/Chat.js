"use strict";

// @TODO
// -----
// 1. Use localStorage to store messages between sessions

function Chat(options) {
	this.messageFactory = new MessageFactory();
    this.messages = [];
    this.threads = [];
    this.users = [];
    this.socket = io();
}

Chat.prototype.receiveMessage = function(message) {
    this.setThread(message);

    this.messages.push(message);

    EventBus.publish("message/new", message);
}

// @TODO
// Refactoring: move to message
Chat.prototype.setThread = function(message) {
    var content = message.content,
        firstChar = content.substr(0, 1),
        firstWord = content.substr(0, content.indexOf(" "));
        
    if (firstChar === ":") {
        var thread = content.substr(1, content.indexOf(" "));
    // check if firstWord is made of letters :)
    } else if (/\W/.test(firstWord)) {
        var thread = firstWord;
    }
    this.threads.push(thread);
    EventBus.publish("thread/new", thread);
}