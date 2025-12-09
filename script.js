
(function(){
  const nav = document.getElementById('topnav');
  if(!nav) return;
  const links = nav.querySelectorAll('a');
  const here = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{ if(a.getAttribute('href')===here) a.classList.add('active'); });
})();
