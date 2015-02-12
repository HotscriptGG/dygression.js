function ChatView(options) {
    this.container = options.container;
    this.chatWindow = options.chatWindow;
    this.input = options.input;
    this.sendButton = options.sendButton;
}

ChatView.prototype.init = function() {
    this.chat = new Chat();
    // Subscribe to events in chat
    EventBus.subscribe("message/new", this.renderMessages, this);
    EventBus.subscribe("user/new", this.renderUsers, this);

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

ChatView.prototype.renderMessages = function() {
    // @TODO
    // Refactor
    var newMessage = this.chat.messages.pop();
    var messageView = new MessageView(newMessage);
    this.chatWindow.appendChild(messageView.render());
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
}

ChatView.prototype.renderUsers = function() {
    console.log(this);
}