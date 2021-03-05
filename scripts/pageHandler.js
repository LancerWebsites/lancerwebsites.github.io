// Waypoints that trigger when a user scrolls past them.

var _prev = "navigation-home";

var waypoint_home = new Waypoint({
  element: document.getElementById('home-actual'),
  handler: function() {
    setCurrent("home");
  },
  offset: 20
})

var waypoint_about = new Waypoint({
  element: document.getElementById('about'),
  handler: function() {
    setCurrent("about");
  }
})

var waypoint_contact = new Waypoint({
  element: document.getElementById('contact'),
  handler: function() {
    setCurrent("contact");
  },
  offset: 'bottom-in-view'
})

var waypoint_home_lower = new Waypoint({
  element: document.getElementById('home-actual'),
  handler: function() {
    setCurrent("home");
  },
  offset: '75%'
})

var waypoint_about_lower = new Waypoint({
  element: document.getElementById('about'),
  handler: function() {
    setCurrent("about");
  },
    offset: '75%'
})

// Set navigation indication 

function setCurrent(section) {
  var previous_element = document.getElementById(_prev);
  previous_element.classList.remove('current');
  var format_string = "navigation-" + section;
  var element = document.getElementById(format_string);
  element.classList.add('current');
  _prev = format_string;
}

// Handle scrolling to section with code

function scrollToElement (id) {
  parent.location.hash = id;
  var element = document.getElementById(id);
  element.scrollIntoView(false);
}

// Cookie functions

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Handle cookie footer prompt

function checkUser() {
  var agreed = getCookie("agreed")
  if (agreed) {
    var element = document.getElementById("cookie_footer");
    element.classList.add("hide");
  }
}

checkUser();

function closeCookie() {
  var element = document.getElementById("cookie_footer");
  element.classList.add("hide");
  setCookie("agreed", "yes")
}

// Uncomment for debugging'
// document.cookie = "agreed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// Carousel
var interval = 5000;

var slides = document.getElementById('carousel').children;

var current_slide = 0;

function slide() {
  setTimeout(() => {
    slides[current_slide].classList.remove("show");
    slides[current_slide].classList.add("hide");
    current_slide++;
    if (current_slide >= slides.length) {
      current_slide = 0;
    }
    slides[current_slide].classList.remove("hide");
    slides[current_slide].classList.add("show");
    slide()
  }, interval);
}

slide()
