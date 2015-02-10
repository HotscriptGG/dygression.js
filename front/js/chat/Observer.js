"use strict";

function ObserverList() {
   this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
}

ObserverList.prototype.count = function() {
    return this.observerList.count;
}

ObserverList.prototype.get = function(index) {
    // If index referes to array element
    if (index > -1 && index < this.count) {
        return this.observerList[index];
    }
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;
    while (i < this.count) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i += 1;
    }
    
    return -1;
}

ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(i, 1);
}