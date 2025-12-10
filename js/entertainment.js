//Selects all images.
const images = document.querySelectorAll('.entertainment-img');

//Loops through each image
images.forEach(img => {
  img.addEventListener('mouseenter', () => { //When mouse hovers over, the image grows.
    img.style.transition = 'transform 0.3s ease'; //For smooth animation.
    img.style.transform = 'scale(1.2)';
  });

//When mouse leaves, the image shrinks.
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});
