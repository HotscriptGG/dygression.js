/* Dygression.js */
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

function Chat(options) {
	this.container = options.container;
	this.messageFactory = new MessageFactory();
    this.container = options.container;
    this.input = options.input;
    this.sendButton = options.sendButton;
    this.messages = [];
}

Chat.prototype.init = function() {
    var self = this;
    // Check chat prerequisites
    if (!this.container) {
        throw "Container must be specified.";
    }
    
    if (!this.input) {
        throw "Input field must be specified.";
    }

    if (!this.sendButton) {
        throw "Send button must be specified.";
    }
    
    // Event listeners
    if (this.sendButton) {
        this.sendButton.addEventListener("click", function(event) {
            event.preventDefault();
            self.sendMessage();
        }, false);
    }
}

Chat.prototype.sendMessage = function() {
    var message = this.input.value;
    console.log(message);
    
    var messageObj = this.messageFactory.createMessage({
        authorId: 1,
        content: message
    });
    
    this.messages.push(messageObj);
    console.log(this.messages);
}

var config = {
    container: document.getElementById("chat-container"),
    input: document.getElementById("message"),
    sendButton: document.getElementById("chat-send")
};
var chat = new Chat(config);
chat.init();