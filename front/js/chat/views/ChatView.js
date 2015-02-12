function ChatView(options) {
    this.container = options.container;
    this.chatWindow = options.chatWindow;
    this.input = options.input;
    this.sendButton = options.sendButton;
}

ChatView.prototype.init = function() {
    this.chat = new Chat();
<<<<<<< HEAD
    // Subscribe to events in chat
    EventBus.subscribe("message/new", this.renderMessages, this);
    EventBus.subscribe("user/new", this.renderUsers, this);
=======
    
    // Event subscriptions
    EventBus.subscribe("message/new", this.render, this);
    EventBus.subscribe("thread/new", this.broadcastNewTopic, this);

>>>>>>> 90a34379c4102b634a7962757157546ac1a548fe

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
    
    this.chat.receiveMessage(messageObj);
    this.clearMessageInput();
}

ChatView.prototype.clearMessageInput = function() {
    this.input.value = "";
}

<<<<<<< HEAD
ChatView.prototype.renderMessages = function() {
    // @TODO
    // Refactor
    var newMessage = this.chat.messages.pop();
    var messageView = new MessageView(newMessage);
=======
ChatView.prototype.render = function() {
    var newMessage = this.chat.messages.pop(),
        messageView = new MessageView(newMessage);
    
>>>>>>> 90a34379c4102b634a7962757157546ac1a548fe
    this.chatWindow.appendChild(messageView.render());
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
}

<<<<<<< HEAD
ChatView.prototype.renderUsers = function() {
    console.log(this);
=======
ChatView.prototype.broadcastNewTopic = function() {
    console.log(this.chat.threads.pop());
>>>>>>> 90a34379c4102b634a7962757157546ac1a548fe
}