const url = "js/logos.json";
const padding = 8;
const imageSize = 150;
fetch(url)
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
  console.log(data);
  let selected = [];
  let logos = [];
  let containerSize = document.getElementById('logos-container').offsetWidth;
  let numberofLogos = Math.floor(containerSize / (padding + imageSize));
  console.log(containerSize);
  console.log(numberofLogos);
  while (logos.length < numberofLogos) {
    var random = Math.floor(Math.random()*data.logos.length);
    if(!selected.includes(data.logos[random].name)){
      selected.push(data.logos[random].name);
      logos.push(data.logos[random]);
    }
  }
  var tempHTML = "";
  for (var i = 0; i < logos.length; i++) {
    tempHTML += "<a href='" + logos[i].url + "' target='_blank'><article class='logo-item'><img src='" + logos[i].image + "' alt='" + logos[i].name + "'></img></article></a>";
  }
  document.getElementById('logos-container').innerHTML = tempHTML;
});
