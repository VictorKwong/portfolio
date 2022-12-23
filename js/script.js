const portfolioApp = {};

//Generate random numbers from 0 to 1. Ex. "0.23"
randomfunction = () => {
  return (Math.random() * 1)
}

//Easter Egg at copy rights
portfolioApp.easterEgg = function (){
  $('.textPosition').on('click', function(){
      if($('.textPosition > p').text() === '🙈 You found me again! 🙉'){
        $('.textPosition > p').html('Victor Wong © 2022');
      }else{
        $('.textPosition > p').html('🙈 You found me again! 🙉');
      }
  });
}

//Monkey moves when user click
portfolioApp.regularEvent = function (){
  $('.headerMonkey').on('click', function(){
    if($('.addBanana').attr("hidden") === undefined){
      $('.monkeyWords').html("Where is my banana? I'm hungry.");
    }
    let randomMove = randomfunction();
    if(!$(this).hasClass("monkeyFly") && !$(this).hasClass("monkeyMove") && !$(this).hasClass("monkeyKing")){
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
        $(this).addClass("monkeyKing");
        eventOne = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT1.png"); clearTimeout(eventOne)}, 500);
        eventTwo = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT2.png"); clearTimeout(eventTwo)}, 1000);
        eventThr = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT3Reverse.png"); clearTimeout(eventThr)}, 1500);
        eventFour = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT4Reverse.png"); clearTimeout(eventFour)}, 2300);
        eventFive = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT4.png"); clearTimeout(eventFive)}, 3000);
        eventSix = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT4Reverse.png"); clearTimeout(eventSix)}, 3300);
        eventSev = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT4.png"); clearTimeout(eventSev)}, 3600);
        eventEig = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT5.png"); clearTimeout(eventEig)}, 4000);
        eventNine = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyT6.png"); clearTimeout(eventNine)}, 5300);
        eventTen = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventTen)}, 10000);
        event = setTimeout(function() {$('.headerMonkey').removeClass("monkeyKing"); clearTimeout(event)}, 10000);
      }
    }
  });

  //smooth scroll when user click the arrow button
  $(function () {
    $('a').smoothScroll({
        speed: 300
    });
  });

  //Refresh page when click the "VICTOR" on the upper left corner
  $('.javaRefresh').on('click',function(){
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

// Time zone to generate morning, afternoon or evening
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

//Back to Top
window.onscroll = function (){portfolioApp.scrolling()};

portfolioApp.scrolling = function (){
  if (window.scrollY >  20) {
    $('.boxContainerTop').show(300).fadeIn(300);
  } else {
    $('.boxContainerTop').hide(300).fadeOut(300);
  }
}

$('#light_dark_mode').on('click',function(){
  console.log('Test');  
  $('.header-box-dark-mode').toggleClass("header-box-light-mode");
  $('.slide-menu-dark-mode').toggleClass("slide-menu-light-mode");
  $('.header-text-dark-mode').toggleClass("header-text-light-mode");
  $('.header-hamburger-dark-mode').toggleClass("header-hamburger-light-mode");
  
})


portfolioApp.init = () => {
  portfolioApp.timeZone();
  portfolioApp.regularEvent();
  portfolioApp.easterEgg();
  portfolioApp.scrolling();
      /*scroll to top*/
}

  $(document).ready(portfolioApp.init());