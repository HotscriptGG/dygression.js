define([
    //"chat/helpers/Observer",
    //"chat/helpers/Subject",
    "chat/helpers/EventBus",
    "chat/helpers/helpers",

    "chat/models/Message",
    "chat/models/Thread",
    "chat/models/Chat",

    "chat/views/ChatView",
    "chat/views/MessageView",
    "chat/main",
], function(){});

// Features to do:
//----------
// Simple communication

// Remote and local storage

// UserA broadcasts thread proposition
// UserX, UserY, UserZ... can join thread by using thread code

// Escaping threads

// User must keep track of which threads he participates in

// Filters, eg. `?$$` -> all `$$` messages

// Messages must keep thread reference

// Thread hinting

// Timestamps

// Is writting
// Sent, received, read