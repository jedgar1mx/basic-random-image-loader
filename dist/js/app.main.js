(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var url = "js/logos.json";
var padding = 8;
var imageSize = 150;
fetch(url).then(function (resp) {
  return resp.json();
}) // Transform the data into json
.then(function (data) {
  console.log(data);
  var selected = [];
  var logos = [];
  var containerSize = document.getElementById('logos-container').offsetWidth;
  var numberofLogos = Math.floor(containerSize / (padding + imageSize));
  console.log(containerSize);
  console.log(numberofLogos);
  while (logos.length < numberofLogos) {
    var random = Math.floor(Math.random() * data.logos.length);
    if (!selected.includes(data.logos[random].name)) {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxNQUFNLGVBQVo7QUFDQSxJQUFNLFVBQVUsQ0FBaEI7QUFDQSxJQUFNLFlBQVksR0FBbEI7QUFDQSxNQUFNLEdBQU4sRUFDQyxJQURELENBQ00sVUFBQyxJQUFEO0FBQUEsU0FBVSxLQUFLLElBQUwsRUFBVjtBQUFBLENBRE4sRUFDNkI7QUFEN0IsQ0FFQyxJQUZELENBRU0sVUFBUyxJQUFULEVBQWU7QUFDbkIsVUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLE1BQUksV0FBVyxFQUFmO0FBQ0EsTUFBSSxRQUFRLEVBQVo7QUFDQSxNQUFJLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDLFdBQS9EO0FBQ0EsTUFBSSxnQkFBZ0IsS0FBSyxLQUFMLENBQVcsaUJBQWlCLFVBQVUsU0FBM0IsQ0FBWCxDQUFwQjtBQUNBLFVBQVEsR0FBUixDQUFZLGFBQVo7QUFDQSxVQUFRLEdBQVIsQ0FBWSxhQUFaO0FBQ0EsU0FBTyxNQUFNLE1BQU4sR0FBZSxhQUF0QixFQUFxQztBQUNuQyxRQUFJLFNBQVMsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsS0FBSyxLQUFMLENBQVcsTUFBcEMsQ0FBYjtBQUNBLFFBQUcsQ0FBQyxTQUFTLFFBQVQsQ0FBa0IsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUFtQixJQUFyQyxDQUFKLEVBQStDO0FBQzdDLGVBQVMsSUFBVCxDQUFjLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUIsSUFBakM7QUFDQSxZQUFNLElBQU4sQ0FBVyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQVg7QUFDRDtBQUNGO0FBQ0QsTUFBSSxXQUFXLEVBQWY7QUFDQSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksTUFBTSxNQUExQixFQUFrQyxHQUFsQyxFQUF1QztBQUNyQyxnQkFBWSxjQUFjLE1BQU0sQ0FBTixFQUFTLEdBQXZCLEdBQTZCLHlEQUE3QixHQUF5RixNQUFNLENBQU4sRUFBUyxLQUFsRyxHQUEwRyxTQUExRyxHQUFzSCxNQUFNLENBQU4sRUFBUyxJQUEvSCxHQUFzSSx3QkFBbEo7QUFDRDtBQUNELFdBQVMsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkMsU0FBM0MsR0FBdUQsUUFBdkQ7QUFDRCxDQXRCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiY29uc3QgdXJsID0gXCJqcy9sb2dvcy5qc29uXCI7XHJcbmNvbnN0IHBhZGRpbmcgPSA4O1xyXG5jb25zdCBpbWFnZVNpemUgPSAxNTA7XHJcbmZldGNoKHVybClcclxuLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKSAvLyBUcmFuc2Zvcm0gdGhlIGRhdGEgaW50byBqc29uXHJcbi50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBsZXQgc2VsZWN0ZWQgPSBbXTtcclxuICBsZXQgbG9nb3MgPSBbXTtcclxuICBsZXQgY29udGFpbmVyU2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvcy1jb250YWluZXInKS5vZmZzZXRXaWR0aDtcclxuICBsZXQgbnVtYmVyb2ZMb2dvcyA9IE1hdGguZmxvb3IoY29udGFpbmVyU2l6ZSAvIChwYWRkaW5nICsgaW1hZ2VTaXplKSk7XHJcbiAgY29uc29sZS5sb2coY29udGFpbmVyU2l6ZSk7XHJcbiAgY29uc29sZS5sb2cobnVtYmVyb2ZMb2dvcyk7XHJcbiAgd2hpbGUgKGxvZ29zLmxlbmd0aCA8IG51bWJlcm9mTG9nb3MpIHtcclxuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZGF0YS5sb2dvcy5sZW5ndGgpO1xyXG4gICAgaWYoIXNlbGVjdGVkLmluY2x1ZGVzKGRhdGEubG9nb3NbcmFuZG9tXS5uYW1lKSl7XHJcbiAgICAgIHNlbGVjdGVkLnB1c2goZGF0YS5sb2dvc1tyYW5kb21dLm5hbWUpO1xyXG4gICAgICBsb2dvcy5wdXNoKGRhdGEubG9nb3NbcmFuZG9tXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciB0ZW1wSFRNTCA9IFwiXCI7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2dvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdGVtcEhUTUwgKz0gXCI8YSBocmVmPSdcIiArIGxvZ29zW2ldLnVybCArIFwiJyB0YXJnZXQ9J19ibGFuayc+PGFydGljbGUgY2xhc3M9J2xvZ28taXRlbSc+PGltZyBzcmM9J1wiICsgbG9nb3NbaV0uaW1hZ2UgKyBcIicgYWx0PSdcIiArIGxvZ29zW2ldLm5hbWUgKyBcIic+PC9pbWc+PC9hcnRpY2xlPjwvYT5cIjtcclxuICB9XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ29zLWNvbnRhaW5lcicpLmlubmVySFRNTCA9IHRlbXBIVE1MO1xyXG59KTtcclxuIl19
