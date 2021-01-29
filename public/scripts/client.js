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
  const loadTweets = function () {
     $.ajax('/tweets', {method: 'GET'})
      .then(function(result) {
        renderTweets(result); 
   })
  }
  const renderTweets = function(tweets) {
  // loops through tweets
    const tweetContainer = $('.tweet-container');
    tweetContainer.empty();
    for(let tweet of tweets) {
      tweetContainer.prepend(createTweetElement(tweet))
    }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  }
  loadTweets();
  
  $("form").on("submit", function (event) {
    event.preventDefault();
    let validatedText = $('#tweet-text').val();
    if(validatedText.length === 0) {
      alert("Please write something");
    } else if(validatedText.length > 140) {
      alert("Your tweet exceeds the character limit");
    } else {
      $.ajax('/tweets', {method: 'POST', data: {text: validatedText}})
      .then(function(result) {
        loadTweets();
      })
    }
  })
})

