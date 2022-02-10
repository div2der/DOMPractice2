function addSourceLink() {
  var a = document.createElement('a');
  var linkText = document.createTextNode("Source link");
  a.appendChild(linkText);
  a.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
  document.body.appendChild(a);
}

function transform() {
  var words = document.querySelector("#txt").innerText.split(' ');
  var res = "";
  for (var i = 0; i < words.length; ++ i) {
    if (words[i].length > 8)
      words[i] = '<span style = "background-color: yellow;">' + words[i] + '</span>';
    if (words[i][words[i].length - 1] == '.')
      words[i] = words[i] + '<br>';
    for (var j = 0; j < words[i].length; ++ j) {
      if (words[i][j] == '?')
        words[i] = words[i].slice(0, j) + '&#129300' + words[i].slice(j + 1, words[i].length);
      if (words[i][j] == '!')
        words[i] = words[i].slice(0, j) + '&#128562' + words[i].slice(j + 1, words[i].length);
    }
    res += words[i] + ' ';
  }
  var count = document.createElement('p');
  count.appendChild(document.createTextNode(words.length + " words in total."));
  document.body.appendChild(count);
  document.querySelector("#txt").innerHTML = res;
}

addSourceLink();
transform();