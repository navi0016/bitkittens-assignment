document.addEventListener('DOMContentLoaded', function() {

var summon = document.querySelector('.summon-cats');
summon.addEventListener('click', function() {
  $.ajax({
    url:"http://bitkittens.herokuapp.com/cats.json",
    method: "GET",
    dataType: "JSON"
  }).done(function(data) {
    console.log(data);
    for (var i = 0; i < data.cats.length; i++) {
    //   data[i]
      // debugger
      var imgTag = document.createElement('img')
      imgTag.src = data.cats[i].photo;
      // debugger
      imgTag.setAttribute('alt','Photo of ' + data.cats[i].name);
      var catDivs = document.querySelectorAll('.cat-box');
      // debugger
      catDivs[i].innerHTML = ""
      catDivs[i].appendChild(imgTag)
    }
  })

});

});
