//

// do what you did in "yodize.js", but for morse code

// docs: https://funtranslations.com/api/yoda

function morse() {
  const phrase = document.getElementById('to-morse').value;

  const encoded = encodeURIComponent(phrase);

  const url = 'https://api.funtranslations.com/translate/yoda.json?text=' + encoded;

  /*
    use fetch to send a get request to the url above
    then log only the translated phrase
  */
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const xhrObject = JSON.parse(xhr.response);
      console.log(xhrObject.contents);
    } else {
    }
  };

  xhr.open('GET', url);
  xhr.send();
}

document.getElementById('morse-it').addEventListener('click', morse);
