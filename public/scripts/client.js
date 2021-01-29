/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1611639431836
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1611725831836
  }
]

 $(document).ready(function() {
   const createTweetElement = function(tweetObject) {
    const tweetDocObj = $('<article class="user-tweet"></article>');
    const user = tweetObject.user;
    const profilePicture = $('<img src=' + user.avatars + ' alt="' + user.name +'">');
    const profileName = $('<div class="profile">' + user.name + '</div>');
    const handle = $('<div class="user-name">' + user.handle + '</div>');
    const tweetTop = $('<div class="tweet-top"></div');
    const pictureName = $('<div class="picture-name"></div>');
    const content = tweetObject.content.text;
    const tweet = $('<div class="tweet">' + content + '</div>');
    const date = new Date(tweetObject.created_at);
    const footer = $('<footer></footer>');
    const dateCreated = $('<div class="date">' + date.toLocaleDateString() + '</div>');
    const icons = $('<div class="icons"><i class="fas fa-flag"></i><i class="fas fa-heart"></i><i class="fas fa-retweet"></i></div>');
    pictureName.append(profilePicture);
    pictureName.append(profileName);
    tweetTop.append(pictureName);
    tweetTop.append(handle);
    tweetDocObj.append(tweetTop);
    tweetDocObj.append(tweet);
    footer.append(dateCreated);
    footer.append(icons);
    tweetDocObj.append(footer);
    return tweetDocObj;
   }
 

  const renderTweets = function(tweets) {
  // loops through tweets
    const tweetContainer = $('.tweet-container');
    for(let tweet of tweets) {
      tweetContainer.append(createTweetElement(tweet))
    }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  }
  renderTweets(data);
  
  $("form").on("submit", function (event) {
    event.preventDefault();
    $.ajax('/tweets', {method: 'POST', data: this.serialize()})
  }).then(function(result) {
    console.log(result);
  })
})

//Previous version

// $(document).ready(function() {
//   const createTweetElement = function(tweetObject) {
//    const tweetDocObj = $('<article class="user-tweet"></article>');
//    const user = tweetObject.user;
//    const profilePicture = $('<img src=' + user.avatars + ' alt="' + user.name +'">');
//    const profileName = $('<div class="profile">' + user.name + '</div>');
//    const handle = $('<div class="user-name">' + user.handle + '</div>');
//    const content = tweetObject.content.text;
//    const tweet = $('<div class="tweet">' + content + '</div>');
//    const date = new Date(tweetObject.created_at);
//    const footer = $('<footer></footer>');
//    const dateCreated = $('<div class="date">' + date.toLocaleDateString() + '</div>');
//    const icons = $('<div class="icons"><i class="fas fa-flag"></i><i class="fas fa-heart"></i><i class="fas fa-retweet"></i></div>');
//    tweetDocObj.append(profilePicture);
//    tweetDocObj.append(profileName);
//    tweetDocObj.append(handle);
//    tweetDocObj.append(tweet);
//    footer.append(dateCreated);
//    footer.append(icons);
//    tweetDocObj.append(footer);
//    return tweetDocObj;
//   }

