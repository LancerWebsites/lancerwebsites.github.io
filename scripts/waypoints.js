console.log("waypoints loaded....")

var _prev = "navigation-home";

var waypoint_home = new Waypoint({
    element: document.getElementById('home'),
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
    element: document.getElementById('home'),
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
  
  
  function scrollToBottom (id) {
    console.log("Scrolling to " + id);
    var element = document.getElementById(id);
    console.log(element)
    element.scrollIntoView(false);
 }

  function setCurrent(section) {
    var previous_element = document.getElementById(_prev);
    previous_element.classList.remove('current');
    var format_string = "navigation-" + section;
    var element = document.getElementById(format_string);
    element.classList.add('current');
    _prev = format_string;
  }