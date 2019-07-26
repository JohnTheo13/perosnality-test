(function(){
  const saved = document.getElementById('saved');
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const description = document.querySelector('textarea');
  function logSubmit(event) {
    saved.classList.add("saved")
    setTimeout(() => saved.classList.remove("saved"), 3000)
    title.value = '';
    description.value = '';
    author.value = '';
    event.preventDefault();
  }
  const form = document.querySelector('form');
  form.addEventListener('submit', logSubmit);
}());