// D3 --------------------------------------------------------------------------

d3.select('html').style('background-color', 'pink');

// POSITION --------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {

  var playerCamera   = document.querySelector('a-entity[camera]');
  var playerPosition = playerCamera.getAttribute('position');
  var playerRotation = playerCamera.getAttribute('rotation');

  console.log('Position: ' + JSON.stringify(playerPosition));
  console.log('Rotation: ' + JSON.stringify(playerRotation));

  function levelTrigger() {
    // https://aframe.io/docs/core/entity.html#Listening-for-Component-Changes
    if (playerPosition) {
      this.addEventListener('componentchanged', function (evt) {
        // console.log('Position: ' + evt.newData);

        if (evt.name === 'position') {
          console.log('Entity has moved from', evt.oldData, 'to', evt.newData, '!');

          // in base alla specifica posizione uso d3 per animare fog, luci ecc. [vedi pen]
          // http://codepen.io/horoman/pen/NNVXbg
        }
      });
    };
  }

  setInterval(function () {
    levelTrigger();
  }, 3000);

  // https://github.com/aframevr/aframe/blob/master/src/systems/camera.js#L34
  if (playerPosition == '0 1.8 4') { console.log('Started!'); }
  if (playerPosition == {x: 0, y: 1.8, z: 4}) { console.log('Started!'); }
  if (playerPosition == {'x': 0, 'y': 1.8, 'z': 4}) { console.log('Started!'); }
  if (playerPosition == {'x': '0', 'y': '1.8', 'z': '4'}) { console.log('Started!'); }
  // if (playerPosition == {x: 0, y: 1.8, z: 4}) {
  //   console.log('Started!');
  // } else {
  //   console.log('Moved!');
  // };
});

// STATS -----------------------------------------------------------------------

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-9111827-34', 'auto');
ga('send', 'pageview');
