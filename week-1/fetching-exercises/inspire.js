// docs: https://theysaidso.com/api/

function get_random() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.log(xhr.response);
    } else {
    }
  };

  xhr.open('GET', 'http://quotes.rest/qod.json');
  xhr.send();
}
document.getElementById('get-random').addEventListener('click', get_random);

function get_categories() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.table(xhr.response);
    } else {
    }
  };

  xhr.open('GET', 'http://quotes.rest/qod/categories.json');
  xhr.send();
}

document.getElementById('get-categories').addEventListener('click', get_categories);

function get_from_category() {
  const category_input = document.getElementById('category');
  const input_value = category_input.value;
  const toObject = JSON.parse(xhr.response);
  // read the category from user input
  // build your url
  /*
    get a random quote from the chosen category
    print the quote to the console
  */
}
function fix3() {
  const fix = console.log(fix2);
}
document.getElementById('get-from-category').addEventListener('click', fix3);

function get_by_length() {
  // read the min & max lengths from user input
  // build your url
  /*
    get a random quote in the given range
    print the quote to the console
  */
}
document.getElementById('get-by-length').addEventListener('click', get_by_length);

function length_and_category() {
  // read user input
  // build your url
  /*
    get a random quote matching the user input
    print the quote to the console
  */
}
document.getElementById('length-and-category').addEventListener('click', length_and_category);
