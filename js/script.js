const portfolioApp = {};

$(function () {
    $('a').smoothScroll({
        speed: 300
    });
});

$('.headerMonkey').on('click',function(){
    if($('.addBanana').attr("hidden") === undefined){
      $('.monkeyWords').html("Feed me a banana, I'm hungry.");
    }
    $(this).addClass("monkeyMove");
    eventOne = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventOne)}, 750);
    eventTwo = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventTwo)}, 1500);
    eventThr = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventThr)}, 2400);
    eventFour = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventFour)}, 3000);
    event = setTimeout(function() {$('.headerMonkey').removeClass("monkeyMove"); clearTimeout(event)}, 3000);
});

portfolioApp.comma = function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsTxFhFGuzRv_NbPcw2a5zIVxDNqVpOfs",
    authDomain: "portfolio-b73ae.firebaseapp.com",
    databaseURL: "https://portfolio-b73ae.firebaseio.com",
    projectId: "portfolio-b73ae",
    storageBucket: "portfolio-b73ae.appspot.com",
    messagingSenderId: "93568968163",
    appId: "1:93568968163:web:cdaa18a0cf442de2d96cd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();  
const userId = `-MBlboEQaOw7kXBs1I8y`;
const CountDb = firebase.database().ref(userId);

dbRef.once('value', (data) => {
$('.addBanana').on('click',function(){
  const upvote = data.val().Count[userId] + 1;
  $('.addBanana').attr("hidden",true);
  const upvoteMod = portfolioApp.comma(upvote);
  $('.monkeyWords').html(`Thanks for feeding me. I have ${upvoteMod} Bananas!`)
  return firebase.database().ref(`Count/${userId}`).set(upvote);
  })
})

//Reference https://codepen.io/kcire815/pen/PNwZXQ
portfolioApp.init = () => {
    let Animation = function(animationBar, percentage) {
  
      this.animationBar = animationBar;
      this.percentage = percentage;
      this.animationArray = null;
      this.animationOffset = null;
      this.labelArray = null;
      this.percentageArray = null;
      this.index = 0;
  
      this.initialize();
  
    };  
  
    Animation.prototype.initialize = function() {
  
      this.animationArray = document.getElementsByClassName(this.percentage);
  
      if (this.animationOffset === null){
        this.animationOffset = [];
      }
      if (this.labelArray === null){
        this.labelArray = [];
      }
      if (this.percentageArray === null){
        this.percentageArray = [];
      }

      this.setUpElements();
    };
  
    Animation.prototype.setUpElements = function() {
  
      for (var i = 0; i < this.animationArray.length; i++) {
        let elem = this.animationArray[i],
          offset = elem.offsetTop + document.getElementsByClassName(this.percentage)[0].clientHeight,
          percentage = $(this.animationArray[i]).data(this.percentage);
        this.animationOffset.push(offset);
        this.percentageArray.push(percentage);
  
        $(this.animationArray[i]).find('.label').html(percentage + '%');
      }
  
      this.attachListeners();
    }
  
    Animation.prototype.attachListeners = function() {
  
      $(window).on('scroll', this.onWindowScroll.bind(this));
    };
  
    Animation.prototype.onWindowScroll = function() {
      /* about section */
      let imageHeight = $('.aboutSectionHide').height();
      if (window.pageYOffset >  imageHeight + 100) {
          $('.aboutSectionHide').addClass("showAbout");
      }
      for (var i = 0; i < this.animationArray.length; i++) {
        if (window.pageYOffset >= this.animationOffset[this.index] - window.innerHeight) {
          this.showElement();
          this.index++;
        }
      }
    };
  
    Animation.prototype.showElement = function() {
      var element = document.getElementsByClassName(this.percentage)[this.index];
      element.className += ' show';
      this.animateBar(element, this.percentageArray[this.index]);
    }
  
    Animation.prototype.animateBar = function(element, width) {
  
      var $element = $(element),
        className = ' p' + width;
  
      $element.find(this.animationBar).addClass(className);
    }
  
    new Animation('.animationBar', 'percentage');
    
  };

  $(document).ready(portfolioApp.init());