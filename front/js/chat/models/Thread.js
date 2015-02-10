"use strict";

function Thread() {
    this.messageContent = options.messageContent;
    this.signature = this.messageContent.substr(0, 2);
}

Thread.prototype.getType = function() {
    return true;
}