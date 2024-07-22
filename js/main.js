/*const mainHeader = document.querySelector("main-header");

window.addEventListener ("scroll", function() {
    var mainHeader = document.querySelector("main-header");
    mainHeader.classList.toggle ("sticky", window.scrollY > 0);
});*/

/*scrolling banner*/
(function ($) {
    "use strict";

    $(document).ready(function () {
        $(".carousel_se_01_carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                600: {
                    items: 2
                },
                980:
                {
                    items: 3
                }
                ,
                1000: {
                    items: 4.25
                }
            }
        });
    });

    const nextIcon = '<img src="../assets/images/left.svg">';

    const previcon = '<img src="../assets/images/right.svg">';
    $(document).ready(function () {
        $(".carousel_se_02_carousel").owlCarousel({
            loop: true,
            margin: 10,
            autoWidth: true,
            nav: true,
            dots: false,
            navText: ["<img src='./assets/images/arrowleft.svg'>", "<img src='./assets/images/arrow_right.svg'>"],
            navclass: ['owl-next', 'owl-prev'],

            responsive: {
                0: {
                    items: 1,
                    navigation: false,
                },
                600: {
                    items: 2,
                    navigation: false,
                },
                980:
                {
                    items: 2,
                    navigation: false,
                }
                ,
                1000: {
                    items: 3,
                    navigation: false,
                }
            }
        });

    });


})(jQuery);
$('.expl2').click(function () {
    owl.trigger('next.owl.carousel');
});
$('.expl1').click(function () {
    owl.trigger('prev.owl.carousel');
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('openmenu');
    navlist.classList.toggle('active');
}

function clickimg(smallImg) {
    var fullImg = document.getElementById("imagebox");
    fullImg.src = smallImg.src
}

const links = document.querySelectorAll(".selected_image");

if (links.length) {
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            links.forEach((link) => {
                link.classList.remove("active");
            });
            e.preventDefault();
            link.classList.add("active");
        });
    });
}

 // Get all tab buttons
 var tabButtons = document.getElementsByClassName("tablinks");

 // Add event listeners to each tab button
 for (var i = 0; i < tabButtons.length; i++) {
     tabButtons[i].addEventListener("click", function() {
         var tabName = this.getAttribute("data-tab");
         openTab(tabName);
     });
 }

 function openTab(tabName) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(tabName).style.display = "block";
     document.querySelector("button[data-tab='" + tabName + "']").className += " active";
 }

 // Set the default tab to open on page load
 document.getElementsByClassName("tablinks")[0].click();

 function toggleMenu() {
    var mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'flex') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'flex';
    }
  }
  