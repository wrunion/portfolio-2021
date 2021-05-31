  // sidebar settings 
  $('.ui.sidebar')
    .sidebar('setting', 'dimPage', false)
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('show');

  let mediaQuerySmall = window.matchMedia('(max-width: 890px)');

  mediaQuerySmall.addListener(function(changed) {
    if (changed.matches) {
      $('.ui.vertical').addClass('top').removeClass('right').addClass('sidebar').removeClass('visible');
    } else {
      $('.ui.vertical').removeClass('visible').addClass('right').removeClass('top').sidebar('show');
    }
  });

  // for gif "pause feature" in "work" section 
  // accessibility code for users who have the "reduced motion" setting enabled on their browsers
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
  const details = document.querySelector(".object-and-details > details");

  if (mediaQuery.matches) {
    details.removeAttribute("open");
  }