const portfolioApp = {};


//Generate random numbers from 0 to 1. Ex. "0.23"
randomfunction = () => {
  return (Math.random() * 1)
}

//Easter Egg at copy rights
portfolioApp.easterEgg = function (){
  $('.textPosition').on('click', function(){
      if($('.textPosition > p').text() === '🙈 You found me again! 🙉'){
        $('.textPosition > p').html('Victor Wong © 2023');
      }else{
        $('.textPosition > p').html('🙈 You found me again! 🙉');
      }
  });
}

//Digital clock
portfolioApp.initializeDigitalClock = function(){
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let ampm;
  if(hour > 12){
    hour = hour - 12;
    ampm = "PM";
  }else{
    ampm = "AM";
  }
    $('.clockJS').html(portfolioApp.addZero(hour) + ":" + portfolioApp.addZero(min) + ":" + portfolioApp.addZero(sec) + " " + ampm);
    portfolioApp.timeZone();
}

portfolioApp.digitalClock = function() {
  setInterval(function() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let ampm;
  if(hour > 12){
    hour = hour - 12;
    ampm = "PM";
  }else{
    ampm = "AM";
  }
    $('.clockJS').html(portfolioApp.addZero(hour) + ":" + portfolioApp.addZero(min) + ":" + portfolioApp.addZero(sec) + " " + ampm);
    portfolioApp.timeZone();
  }, 1000);
};

portfolioApp.addZero = function(num){
  if(num < 10){
    num = "0" + num;
  }
  return num;
}

//Monkey moves when user click
portfolioApp.regularEvent = function (){
  $('.headerMonkey').on('click', function(){
    if($('.addBanana').attr("hidden") === undefined){
      $('.monkeyWords').html("Where is my banana? I'm hungry.");
    }
    //Remove Hover effect
    $('.headerMonkey').removeClass("headerMonkeyHover");
    $('.monkeyContainer').removeClass("monkeyContainerHover");


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
        setTimeout(function() {$('.headerMonkey').removeClass("monkeyFly");}, 7000);
        eventHover = setTimeout(function() {$('.headerMonkey').addClass("headerMonkeyHover"); clearTimeout(eventHover)}, 7000);
        eventHoverTwo = setTimeout(function() {$('.monkeyContainer').addClass("monkeyContainerHover"); clearTimeout(eventHoverTwo)}, 7000);
      }else if(randomMove > 0.33  && randomMove <= 0.66){
        $(this).addClass("monkeyMove");
        eventOne = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventOne)}, 750);
        eventTwo = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventTwo)}, 1500);
        eventThr = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkeyReverse.png"); clearTimeout(eventThr)}, 2400);
        eventFour = setTimeout(function() {$('.headerMonkey').attr("src", "images/monkey.png"); clearTimeout(eventFour)}, 3000);
        setTimeout(function() {$('.headerMonkey').removeClass("monkeyMove");}, 3000);
        eventHover = setTimeout(function() {$('.headerMonkey').addClass("headerMonkeyHover"); clearTimeout(eventHover)}, 3000);
        eventHoverTwo = setTimeout(function() {$('.monkeyContainer').addClass("monkeyContainerHover"); clearTimeout(eventHoverTwo)}, 3000);
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
        setTimeout(function() {$('.headerMonkey').removeClass("monkeyKing");}, 10000);
        eventHover = setTimeout(function() {$('.headerMonkey').addClass("headerMonkeyHover"); clearTimeout(eventHover)}, 10000);
        eventHoverTwo = setTimeout(function() {$('.monkeyContainer').addClass("monkeyContainerHover"); clearTimeout(eventHoverTwo)}, 10000);
        
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
    // $('.addBanana').attr("hidden",true);
    $('.addBanana').prop('disabled', true);
    $('.addBanana').html(`Gifted 🎁`);
    dbRef.once('value', (data) => {
      const upvote = data.val().Count[userId] + 1;
      const upvoteMod = portfolioApp.comma(upvote); 
      $('.monkeyWords').html(`Thanks for feeding me. I have ${upvoteMod} Bananas!<img src="images/banana.png" alt="banana">`);
      return firebase.database().ref(`Count/${userId}`).set(upvote);
    })
  })

}


portfolioApp.comma = function (num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Time zone to generate morning, afternoon or evening
portfolioApp.timeZone = function (){
  let today = new Date();
  if(today.getHours() >= 5 && today.getHours() <= 11){
    $('.wordContainerMorn').css("display", "block");
    $('.wordContainerAfte').css("display", "none");
    $('.wordContainerEven').css("display", "none");
  }else if(today.getHours() >= 12 && today.getHours() <= 16){
    $('.wordContainerMorn').css("display", "none");
    $('.wordContainerAfte').css("display", "block");
    $('.wordContainerEven').css("display", "none");
  }else{
    $('.wordContainerMorn').css("display", "none");
    $('.wordContainerAfte').css("display", "none");
    $('.wordContainerEven').css("display", "block");
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

portfolioApp.lightDarkMode = function (){
  if(document.querySelector('#light_dark_mode').checked === false){
    //Global
    $('.greenPaint-dark-mode').toggleClass("greenPaint-light-mode");

    $('.header-box-dark-mode').toggleClass("header-box-light-mode");
    $('.slide-menu-dark-mode').toggleClass("slide-menu-light-mode");
    $('.header-text-dark-mode').toggleClass("header-text-light-mode");
    $('.header-hamburger-dark-mode').toggleClass("header-hamburger-light-mode");
    $('.header-circle-dark-mode').toggleClass("header-circle-light-mode");
    $('.circleDecoration').toggleClass("circleDecoration-light-mode");
    $('.button-text-dark-mode').toggleClass(" button-text-light-mode");
    // First Section
    
    $('.body-dark-mode').toggleClass('body-light-mode');
    $('.wordContainerAfte').toggleClass("wordContainerAfte-light-mode");
    $('.wordContainerEven').toggleClass("wordContainerEven-light-mode");
    $('.wordContainerMorn').toggleClass("wordContainerMorn-light-mode");
  
    $('.g').toggleClass("g-light-mode");
    $('.upperG').toggleClass("upperG-light-mode");
    $('.o').toggleClass("o-light-mode");
    $('.d').toggleClass("d-light-mode");
    $('.upperM').toggleClass("upperM-light-mode");
    $('.r').toggleClass("r-light-mode");
    $('.n').toggleClass("n-light-mode");
    $('.i').toggleClass("i-light-mode");
    $('.upperA').toggleClass("upperA-light-mode");
    $('.f').toggleClass("f-light-mode");
    $('.t').toggleClass("t-light-mode");
    $('.e').toggleClass("e-light-mode");
    $('.upperE').toggleClass("upperE-light-mode");
    $('.v').toggleClass("v-light-mode");
  
    // Second Section
    $('.img-dark-mode').toggleClass('img-light-mode');
    $('.about-dark-mode').toggleClass('about-light-mode');
    $('.profile-dark-mode').toggleClass('profile-light-mode');
    $('.project-dark-mode').toggleClass('project-light-mode');
    $('.buttonAntiman-dark-mode').toggleClass('buttonAntiman-light-mode');
    $('.skillCardExpand-dark-mode').toggleClass('skillCardExpand-light-mode');
    $('.introText-dark-mode').toggleClass('introText-light-mode');
    $('.profileHead-dark-mode').toggleClass('profileHead-light-mode');
    $('.profilefill-dark-mode').toggleClass('profilefill-light-mode');

    // Third Section
    $('.contact-dark-mode').toggleClass('contact-light-mode');
    $('.contactbox-dark-mode').toggleClass('contactbox-light-mode');
    $('.appDescription').toggleClass("appDescription-light-mode");
  }
}

$('#light_dark_mode').on('click',function(){
  //Global
  $('.greenPaint-dark-mode').toggleClass("greenPaint-light-mode");

  $('.header-box-dark-mode').toggleClass("header-box-light-mode");
  $('.slide-menu-dark-mode').toggleClass("slide-menu-light-mode");
  $('.header-text-dark-mode').toggleClass("header-text-light-mode");
  $('.header-hamburger-dark-mode').toggleClass("header-hamburger-light-mode");
  $('.header-circle-dark-mode').toggleClass("header-circle-light-mode");
  $('.circleDecoration').toggleClass("circleDecoration-light-mode");
  $('.button-text-dark-mode').toggleClass(" button-text-light-mode");
  // First Section
  
  $('.body-dark-mode').toggleClass('body-light-mode');
  $('.wordContainerAfte').toggleClass("wordContainerAfte-light-mode");
  $('.wordContainerEven').toggleClass("wordContainerEven-light-mode");
  $('.wordContainerMorn').toggleClass("wordContainerMorn-light-mode");

  $('.g').toggleClass("g-light-mode");
  $('.upperG').toggleClass("upperG-light-mode");
  $('.o').toggleClass("o-light-mode");
  $('.d').toggleClass("d-light-mode");
  $('.upperM').toggleClass("upperM-light-mode");
  $('.r').toggleClass("r-light-mode");
  $('.n').toggleClass("n-light-mode");
  $('.i').toggleClass("i-light-mode");
  $('.upperA').toggleClass("upperA-light-mode");
  $('.f').toggleClass("f-light-mode");
  $('.t').toggleClass("t-light-mode");
  $('.e').toggleClass("e-light-mode");
  $('.upperE').toggleClass("upperE-light-mode");
  $('.v').toggleClass("v-light-mode");
  
  // Second Section
  $('.img-dark-mode').toggleClass('img-light-mode');
  $('.about-dark-mode').toggleClass('about-light-mode');
  $('.profile-dark-mode').toggleClass('profile-light-mode');
  $('.project-dark-mode').toggleClass('project-light-mode');
  $('.buttonAntiman-dark-mode').toggleClass('buttonAntiman-light-mode');
  $('.skillCardExpand-dark-mode').toggleClass('skillCardExpand-light-mode');
  $('.introText-dark-mode').toggleClass('introText-light-mode');
  $('.profileHead-dark-mode').toggleClass('profileHead-light-mode');
  $('.profilefill-dark-mode').toggleClass('profilefill-light-mode');
  
    
  // Third Section
  $('.contact-dark-mode').toggleClass('contact-light-mode');
  $('.contactbox-dark-mode').toggleClass('contactbox-light-mode');
  $('.appDescription').toggleClass("appDescription-light-mode");
})

//side back to default after clicking anything
$('.slide-menu-dark-mode').on('click',function(){
  var checkbox = document.getElementById("click_id");
  checkbox.checked = false;
})

portfolioApp.init = () => {
  portfolioApp.initializeDigitalClock();
  portfolioApp.digitalClock();
  portfolioApp.regularEvent();
  portfolioApp.easterEgg();
  portfolioApp.scrolling();
      /*scroll to top*/
  portfolioApp.lightDarkMode();

}

  $(document).ready(portfolioApp.init());