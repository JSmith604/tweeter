/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(function() {
   const createTweetElement = function(tweetObject) {
    const tweetDocObj = $('<article class="user-tweet"></article>');
    const user = tweetObject.user;
    const profilePicture = $('<img src=' + user.avatars + ' alt="' + user.name +'">');
    const profileName = $('<div class="profile">' + user.name + '</div>');
    const handle = $('<div class="user-name">' + user.handle + '</div>');
    const content = tweetObject.content.text;
    const tweet = $('<div class="tweet">' + content + '</div>');
    const date = new Date(tweetObject.created_at);
    const footer = $('<footer></footer>');
    const dateCreated = $('<div class="date">' + date.toLocaleDateString() + '</div>');
    const icons = $('<div class="icons"><i class="fas fa-flag"></i><i class="fas fa-heart"></i><i class="fas fa-retweet"></i></div>');
    tweetDocObj.append(profilePicture);
    tweetDocObj.append(profileName);
    tweetDocObj.append(handle);
    tweetDocObj.append(tweet);
    footer.append(dateCreated);
    footer.append(icons);
    tweetDocObj.append(footer);
    console.log(tweetDocObj);
    return tweetDocObj;
   }
   createTweetElement({
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1611718759326
  })
 })

 
