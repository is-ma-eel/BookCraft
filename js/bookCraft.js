// MENU
(function(menu_button, links, breakpoint) {
	let menulink = document.getElementById(menu_button),
	    menu = document.getElementById(links);
		
	menu.className = 'start';
	setTimeout(function() {
		menu.className = 'collapsed';
	}, 20);
		
	menulink.onclick = function() {
		if (menu.className === 'displayed') {
			menu.className = 'collapsed';
		} else {
			menu.className = 'displayed';
		}
		return false;
	};
	
	window.onresize = function() {
		if (window.innerWidth < breakpoint) {
			menu.className = 'collapsed';
		}
	};	
})('menulink', 'navlinks', 700);


// SCROLL
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "block";
  }
}

// scroll down when the user clicks
function topFunction() {
  document.documentElement.scrollTop = 670;
}
