window.onscroll = () => {
  const header = document.querySelector('#header');
  if(this.scrollY <= 55) header.className = ''; else header.className = 'scroll';
};
