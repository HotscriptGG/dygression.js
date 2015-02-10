// Publish/Subscribe Pattern implementation
// EventBus should be a Singleton
// @TODO
// Implement Singleton Pattern
var EventBus = {
  topics: {},

  subscribe: function(topic, listener) {
    // create the topic if not yet created
    if(!this.topics[topic]) {
        this.topics[topic] = [];
    }

    // add the listener
    this.topics[topic].push(listener);
    console.log(this.topics);
  },

  publish: function(topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if(!this.topics[topic] || this.topics[topic].length < 1) {
        return false;   
    }

    // send the event to all listeners
    this.topics[topic].forEach(function(listener) {
        listener(data || {});
    });
  }
};