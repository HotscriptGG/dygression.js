function ChatView(options) {
    this.container = options.container;
    this.input = options.input;
    this.sendButton = options.sendButton;
}

ChatView.prototype.init = function() {
    this.chat = new Chat();
    // Subscribe to events in chat
    // @TODO
    // This implementation of PubSub looses scope
    EventBus.subscribe("message/new", this.render, this);


    // Event listeners
    var self = this;
    if (this.sendButton) {
        this.sendButton.addEventListener("click", function(event) {
            event.preventDefault();
            self.sendMessage();
        }, false);
    }
}

ChatView.prototype.sendMessage = function() {
    var messageContent = this.input.value;

    var messageObj = this.chat.messageFactory.createMessage({
        // @TODO
        // Hardcoded authorId
        authorId: 1,
        content: messageContent
    });

    this.chat.receiveMessage(messageObj);

    this.clearMessageInput();
}

ChatView.prototype.clearMessageInput = function() {
    this.input.value = "";
}

ChatView.prototype.render = function() {
    console.log(this.chat.messages);
}