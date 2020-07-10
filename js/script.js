const portfolioApp = {};

randomfunction = () => {
  return (Math.random() * 1)
}


portfolioApp.easterEgg = function (){
  $('.textPosition').on('click', function(){
      if($('.textPosition > p').text() === '🙈 You found me again! 🙉'){
        $('.textPosition > p').html('Victor Wong © 2020');
      }else{
        $('.textPosition > p').html('🙈 You found me again! 🙉');
      }
  });
}
portfolioApp.regularEvent = function (){
  $('.headerMonkey').on('click', function(){
    if($('.addBanana').attr("hidden") === undefined){
      $('.monkeyWords').html("Feed me a banana, I'm hungry.");
    }
    let randomMove = randomfunction();
    if(!$(this).hasClass("monkeyFly") && !$(this).hasClass("monkeyMove") && !$(this).hasClass("monkeyDunk")){
      if(randomMove <= 0.33){
        $(this).addClass("monkeyFly");
        eventOne = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyFly.png"); clearTimeout(eventOne)}, 350);
        eventTwo = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyFlyReverse.png"); clearTimeout(eventTwo)}, 1400);
        eventThr = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyFly.png"); clearTimeout(eventThr)}, 3150);
        eventFour = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyFlyReverse.png"); clearTimeout(eventFour)}, 4200);
        eventFive = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyFly.png"); clearTimeout(eventFive)}, 4900);
        eventSix = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventSix)}, 7000);
        event = setTimeout(function() {$('.headerMonkey').removeClass("monkeyFly"); clearTimeout(event)}, 7000);
      }else if(randomMove > 0.33  && randomMove <= 0.66){
        $(this).addClass("monkeyMove");
        eventOne = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventOne)}, 750);
        eventTwo = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventTwo)}, 1500);
        eventThr = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventThr)}, 2400);
        eventFour = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventFour)}, 3000);
        event = setTimeout(function() {$('.headerMonkey').removeClass("monkeyMove"); clearTimeout(event)}, 3000);
      }else if(randomMove > 0.66){
        $(this).addClass("monkeyDunk");
        eventOne = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventOne)}, 800);
        eventThr = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventThr)}, 3800);
        event = setTimeout(function() {$('.headerMonkey').removeClass("monkeyDunk"); clearTimeout(event)}, 4000);
      }
    }
  });
  $(function () {
    $('a').smoothScroll({
        speed: 300
    });
  });
  $('h4').on('click',function(){
    location.reload(true);
  });

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


  $('.addBanana').on('click',function(){
    $('.addBanana').attr("hidden",true);
    dbRef.once('value', (data) => {
      const upvote = data.val().Count[userId] + 1;
      const upvoteMod = portfolioApp.comma(upvote); 
      $('.monkeyWords').html(`Thanks for feeding me. I have ${upvoteMod} Bananas!<img src="images/banana.png" alt="banana">`)
      return firebase.database().ref(`Count/${userId}`).set(upvote);
  })
})

}

portfolioApp.comma = function (num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

portfolioApp.timeZone = function (){
  $('.wordContainerMorn,.wordContainerAfte,.wordContainerEven').hide();
  today = new Date();
  if(today.getHours() >= 5 && today.getHours() <= 11){
    return $('.wordContainerMorn').show();
  }else if(today.getHours() >= 12 && today.getHours() <= 16){
    return $('.wordContainerAfte').show();
  }else{
    return $('.wordContainerEven').show();
  }
}



//Reference https://codepen.io/kcire815/pen/PNwZXQ
portfolioApp.init = () => {
  portfolioApp.timeZone();
  portfolioApp.regularEvent();
  portfolioApp.easterEgg();

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
      /*scroll to top*/
      if (window.pageYOffset >  20) {
          $('.boxContainerTop').show();
      } else {
          $('.boxContainerTop').hide();
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