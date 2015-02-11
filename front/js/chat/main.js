var config = {
    container: document.getElementById("chat-container"),
    chatWindow: document.getElementById("chat-window"),
    input: document.getElementById("message"),
    sendButton: document.getElementById("chat-send")
};
var chatView = new ChatView(config);
chatView.init();