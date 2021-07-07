function sort_charecters(str) {
  return str;
}

function sort_handler() {
  // read and process user input
  var to_sort = document.getElementById('to-sort').value;
  const sort = to_sort
    .split('')
    .sort()
    .join('');
  // pass user input through core logic

  /* write a logic function to sort charecters in a string */
  /* assign the result to a variable named 'sorted' */
  var sorted = sort_charecters(sort);

  // report result to user
  var output_field = document.getElementById('sorted');
  output_field.innerHTML = sorted;
}

var sort_button = document.getElementById('sort-it');
sort_button.addEventListener('click', sort_handler);
