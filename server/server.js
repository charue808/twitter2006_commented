// Define the function(S) we wish to call
var submitTweet = function(textToStore) {
  
  TweetsCollection.insert({
    
    
    createdAt: new Date(),
    tweetText: textToStore
  });
}

// Add function(s) to a dictionary
var serverMethods = {submitTweetOnServer: submitTweet};

// Tell meteor which functions we plan on calling from the client
Meteor.methods(serverMethods);

// Find and return the latest tweet
var tweetPublishingFunction = function() {
  return TweetsCollection.find();
}

// Pass publish function to publish command
Meteor.publish("tweetPublication", tweetPublishingFunction);