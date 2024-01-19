Reveal.on('fragmentshown', event => {
  // Get all fragments on the current slide
  var fragments = document.querySelectorAll('.present .fragment');
  
  fragments.forEach(fragment => {
    // Check if the fragment is a video
    if(fragment.tagName === 'VIDEO') {
      console.log("Playing video fragment:", fragment);
      fragment.play();
    }
  });
});

Reveal.on('fragmenthidden', event => {
  // Get all fragments on the current slide
  var fragments = document.querySelectorAll('.present .fragment');
  
  fragments.forEach(fragment => {
    // Check if the fragment is a video
    if(fragment.tagName === 'VIDEO') {
      console.log("Pausing video fragment:", fragment);
      fragment.pause();
    }
  });
});

