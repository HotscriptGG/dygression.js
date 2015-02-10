var config = {
    container: document.getElementById("chat-container"),
    input: document.getElementById("message"),
    sendButton: document.getElementById("chat-send")
};
var chatView = new ChatView(config);
chatView.init();