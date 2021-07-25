https://github.com/chihi829/prof2/blob/master/final.jsconst pagetopBtn = document.querySelector('.page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
