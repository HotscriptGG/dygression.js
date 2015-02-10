"use strict";

function Subject() {
    this.observerList = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
    this.observerList.add(observer);
}

Subject.prototype.removeObserver = function(observer) {
    this.observerList.removeAt(this.observerList.indexOf(observer, 0))
}

Subject.prototype.notify = function(context) {
    var observersCount = this.observerList.count();
    for (var i = 0; i < observersCount; i += 1) {
        this.observerList.get(i).update(context);
    }
}