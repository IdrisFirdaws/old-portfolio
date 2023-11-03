const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click', function(){
        nav.classList.add('active')
    });
} 

if (close) {
    close.addEventListener('click', function(){
        nav.classList.remove('active')
    });
} 

if (bar) {
    bar.addEventListener('click', function(){
        close.classList.add('active')
    });
} 

if (bar) {
    bar.addEventListener('click', function(){
        bar.classList.add('inactive')
    });
} 

if (close) {
    close.addEventListener('click', function(){
        bar.classList.remove('inactive')
    });
} 

if (close) {
    close.addEventListener('click', function(){
        close.classList.remove('active')
    });
} 

// shop page search bar


const searchInput = document.getElementById('search-input');
const itemList = document.getElementById('item-list');
const items = document.querySelectorAll('.fproduct-box');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
