const portfolioApp = {};


//Generate random numbers from 0 to 1. Ex. "0.23"
portfolioApp.getRandom = function () {
  return Math.random();
};

//Easter Egg at copy rights
portfolioApp.easterEgg = function (){
  // Define $text to select the <p> element inside the .textPosition
  const $text = $('.textPosition p');
  
  // Add event listener to toggle text when clicked
  $('.textPosition').on('click', function () {
    if ($text.text() === '🙈 You found me again! 🙉') {
      $text.text('Victor Wong © 2025');
    } else {
      $text.text('🙈 You found me again! 🙉');
    }
  });
}

//Digital clock
portfolioApp.updateDigitalClock = function() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";
  
  hour = hour % 12 || 12; // convert to 12-hour format, replacing 0 with 12
  const timeString = `${portfolioApp.addZero(hour)}:${portfolioApp.addZero(min)}:${portfolioApp.addZero(sec)} ${ampm}`;
  
  $('.clockJS').html(timeString);
  portfolioApp.timeZone();
};

portfolioApp.initializeDigitalClock = function() {
  portfolioApp.updateDigitalClock(); // Initial display
};

portfolioApp.digitalClock = function() {
  setInterval(portfolioApp.updateDigitalClock, 1000); // Update every second
};

portfolioApp.addZero = function(num){
  if(num < 10){
    num = "0" + num;
  }
  return num;
}

//Monkey moves when user click
portfolioApp.regularEvent = function (){
  $('.headerMonkey').on('click', function () {
    if ($('.addBanana').attr("hidden") === undefined) {
      $('.monkeyWords').html("Yes, that’s a monkey — and yes, he’s hungry 🍌");
    }

    // Remove hover effects
    $('.headerMonkey').removeClass("headerMonkeyHover");
    $('.monkeyContainer').removeClass("monkeyContainerHover");

    if ($(this).hasClass("monkeyFly") || $(this).hasClass("monkeyMove") || $(this).hasClass("monkeyKing")) return;

    let randomMove = portfolioApp.getRandom();

    if (randomMove <= 0.33) {
      portfolioApp.playMonkeyFly();
    } else if (randomMove <= 0.66) {
      portfolioApp.playMonkeyMove();
    } else {
      portfolioApp.playMonkeyKing();
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

// Helper to play a series of timed frames
portfolioApp.scheduleFrames = function (frames, duration, className) {
  $('.headerMonkey').addClass(className);

  frames.forEach(([time, src]) => {
    setTimeout(() => $('.headerMonkey').attr("src", src), time);
  });

  setTimeout(() => {
    $('.headerMonkey').removeClass(className);
    $('.headerMonkey').attr("src", "images/monkey.png");
    $('.headerMonkey').addClass("headerMonkeyHover");
    $('.monkeyContainer').addClass("monkeyContainerHover");
  }, duration);
};

// Fly animation
portfolioApp.playMonkeyFly = function () {
  const frames = [
    [350, "images/monkeyFly.png"],
    [1400, "images/monkeyFlyReverse.png"],
    [3150, "images/monkeyFly.png"],
    [4200, "images/monkeyFlyReverse.png"],
    [4900, "images/monkeyFly.png"]
  ];
  portfolioApp.scheduleFrames(frames, 7000, "monkeyFly");
};

// Move animation
portfolioApp.playMonkeyMove = function () {
  const frames = [
    [750, "images/monkeyReverse.png"],
    [1500, "images/monkey.png"],
    [2400, "images/monkeyReverse.png"],
    [3000, "images/monkey.png"]
  ];
  portfolioApp.scheduleFrames(frames, 3000, "monkeyMove");
};

// King animation
portfolioApp.playMonkeyKing = function () {
  const frames = [
    [500, "images/monkeyT1.png"],
    [1000, "images/monkeyT2.png"],
    [1500, "images/monkeyT3Reverse.png"],
    [2300, "images/monkeyT4Reverse.png"],
    [3000, "images/monkeyT4.png"],
    [3300, "images/monkeyT4Reverse.png"],
    [3600, "images/monkeyT4.png"],
    [4000, "images/monkeyT5.png"],
    [5300, "images/monkeyT6.png"]
  ];
  portfolioApp.scheduleFrames(frames, 10000, "monkeyKing");
};


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

portfolioApp.typewriterRotate = function() {
  const titles = [
    "Technology Enthusiast",
    "Software Developer",
    "Data Analyst",
    "Web Developer"
  ];

  const typingSpeed = 100;  // ms per character
  const erasingSpeed = 50;  // ms per character
  const delayBetween = 1500; // ms before erasing

  let textIndex = 0;
  let charIndex = 0;
  const typingElement = $('#typingText');

  function type() {
    if (charIndex < titles[textIndex].length) {
      typingElement.text(typingElement.text() + titles[textIndex].charAt(charIndex));
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetween);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingElement.text(titles[textIndex].substring(0, charIndex - 1));
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textIndex = (textIndex + 1) % titles.length;
      setTimeout(type, typingSpeed);
    }
  }

  type();
};


portfolioApp.init = () => {
  portfolioApp.initializeDigitalClock();
  portfolioApp.digitalClock();
  portfolioApp.regularEvent();
  portfolioApp.easterEgg();
  portfolioApp.scrolling();
      /*scroll to top*/
  portfolioApp.lightDarkMode();

  portfolioApp.typewriterRotate();

}

$(document).ready(portfolioApp.init);