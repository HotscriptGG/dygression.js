"use strict";

// @TODO
// -----
// 1. Use localStorage to store messages between sessions

function Chat(options) {
	this.messageFactory = new MessageFactory();
    this.messages = [];
    this.threads = [];
    this.users = [];
}

Chat.prototype.receiveMessage = function(message) {
    this.setThread(message);
    
    this.messages.push(message);

    EventBus.publish("message/new", message);
}

<<<<<<< HEAD
Chat.prototype.userConnect = function(user) {
	this.users.push(user);

	EventBus.publish("user/new");
=======
// @TODO
// Refactoring: move to message
Chat.prototype.setThread = function(message) {
    // @TODO
    // Refactoring: set if..else conditions to vars
    
    var content = message.content;
    // When thread is described a word,
    // eg. `:cars Have you seen last TopGear...`
    if (content.substr(0, 1) === ":") {
        var thread = content.substr(1, content.indexOf(" "));
    // When thread is described by a shortcode,
    // eg. `$$ Today beer is on me...`
    } else if (/\W/.test(content.substr(0, content.indexOf(" ")))) {
        var thread = content.substr(0, content.indexOf(" "));
    }
    this.threads.push(thread);
    EventBus.publish("thread/new", thread);
>>>>>>> 90a34379c4102b634a7962757157546ac1a548fe
}