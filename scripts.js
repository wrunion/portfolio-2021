function confirmExternalClick() {
  return confirm(`This will take you to an external site. Click "OK" to continue or "Cancel" to stay.`);
}
  
// initial sidebar settings 
$('.ui.sidebar')
  .sidebar('setting', 'dimPage', false)
  .sidebar('setting', 'transition', 'overlay');


  const mediaQuerySmall = window.matchMedia('(max-width: 890px)');

  mediaQuerySmall.addListener(function(changed) {
    if (changed.matches) {
      $('.ui.vertical').addClass('top').removeClass('right').addClass('sidebar').removeClass('visible');
    } else {
      $('.ui.vertical').removeClass('visible').addClass('right').removeClass('top').sidebar('show');
    }
  });
  
function toggle() { 
  if (mediaQuerySmall.matches) {
    $('.ui.vertical').addClass('top').removeClass('right').addClass('sidebar').sidebar('toggle');
  } else {
    $('.ui.vertical').removeClass('visible').addClass('right').removeClass('top').sidebar('toggle');
  }
}

/* custom functionality for the menu */
navClick = id => {
  /* grab all "items" in the navbar */
  let navList = [...document.getElementsByClassName('item')]
  /* grab the id of the item clicked */
  let target = document.getElementById(id);
  /* remove previous "active" classes from all items; add active class to selected item only  */
  navList.forEach(function(item) {
    item.classList.remove('active')
  }); 
  target.classList.add('active');

  /* scroll to appropriate section */
  let sectionId = document.getElementById(id).getAttribute("tag");
  let targetSection = document.getElementById(sectionId)

  targetSection.scrollIntoView();
}

  // for gif "pause feature" in "work" section 
  // accessibility code for users who have the "reduced motion" setting enabled on their browsers
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
  const details = document.querySelector(".object-and-details > details");

  if (mediaQuery.matches) {
    details.removeAttribute("open");
  }

  $(document).ready(() => {

    const mediaQueryLarge = window.matchMedia('(min-width: 891px)');

    if (mediaQueryLarge.matches) {
      $('.ui.sidebar').sidebar('show'); 
    }

  })