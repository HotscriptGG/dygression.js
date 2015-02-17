function ChatView(options) {
    this.container = options.container;
    this.chatWindow = options.chatWindow;
    this.input = options.input;
    this.sendButton = options.sendButton;
}

ChatView.prototype.init = function() {
    this.chat = new Chat();

    // Event subscriptions
    EventBus.subscribe("message/new", this.render, this);
    EventBus.subscribe("thread/new", this.broadcastNewTopic, this);

    // DOM Event listeners
    var self = this;
    if (this.sendButton) {
        this.sendButton.addEventListener("click", function(event) {
            event.preventDefault();
            self.sendMessage();
        }, false);
    }
}

ChatView.prototype.sendMessage = function() {
    var messageContent = {content: this.input.value},
        messageObj = this.chat.messageFactory.createMessage(messageContent);

    
        
    this.chat.socket.emit(messageObj);
    this.clearMessageInput();
}

ChatView.prototype.clearMessageInput = function() {
    this.input.value = "";
}

ChatView.prototype.render = function() {
    var newMessage = this.chat.messages.pop(),
        messageView = new MessageView(newMessage);

    this.chatWindow.appendChild(messageView.render());
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
}

ChatView.prototype.broadcastNewTopic = function() {
    console.log(this.chat.threads.pop());
}