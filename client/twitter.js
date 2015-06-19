Router.route('/', function() {
  this.render('Home');
});

Template.recentUpdates.onCreated(function () {
  
  // Use this.subscribe inside onCreated callback
  this.subscribe("tweetPublication");
});

Template.recentUpdates.helpers({
  mostRecentTweets: function() {
    // Create variable that acts as a parameter
    var mySelector = {};
    // list in descending order
    var myOptionFields = {createdAt: -1};
    // sort data by order
    var myOptions = {sort: myOptionFields};
    // create variable that finds items in collection
    var latestTweetTextDictionaries = TweetsCollection.find(mySelector, myOptions);
    
    // result from Collection displayed
    return latestTweetTextDictionaries;
    
  }
});

Template.submitTweetLayout.events({
  'click button': function() {
    // Meteor server method call
    Meteor.call('submitTweetOnServer', $("#tweetInputBox").val() );
    
    // Reset the text input box
    $("#tweetInputBox").val('');
  }
});