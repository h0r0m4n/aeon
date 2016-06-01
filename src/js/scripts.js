// #############################################################################
// #############################################################################
// #############################################################################

// Trigger livello

// 1. Prendendere i dati della position dal selettore camera
// 2. Utilizzando qualcosa come addEventListener per i cambiamenti della position (con un timeout)
// 3. Idee per condizioni in base ai dati della position
// 4. Potenzialità del D3

// #############################################################################
// #############################################################################
// #############################################################################

// D3 --------------------------------------------------------------------------



// POSITION --------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {

  var playerCamera = document.getElementById('player');

  // d3.select('html')
  //   .transition().duration(500)
  //   .style('background-color', 'red');
  //
  // d3.select('a-sky')
  //   .transition().duration(5000)
  //   .attr('color', 'red');
    //.style({color: 'black'});
    // .color('#000');

//  console.log(playerPosition);
//  console.log(playerRotation);

  levelTrigger();

  function levelTrigger() {
    var playerPosition = playerCamera.getAttribute('position'),
        playerRotation = playerCamera.getAttribute('rotation'),
        positionResult = {};

    var caverna = {
      x: 3,
      y: 0,
      z: 4.5
    };

    // https://youtu.be/hM9h1wN4rfU
    var Objs = function() {
      this.caverna = function() {
        // TODO es.: spostare position appena arrivi vicino

        return {
          x: 4.3,
          y: 0,
          z: 4.6
        }
      }

      this.albero = function() {
        console.log('albero');

        return {
          x: 4,
          y: 0,
          z: 8
        }
      }

      this.mare = function() {
        console.log('mare')

        return {
          x: 1,
          y: 0,
          z: 0
        }
      }
    };

    var instanceCollision = new Objs();

    // se voglio manipolare le coordinate in Objs faccio qualcosa del genere:
    console.log(instanceCollision.caverna);

    var componentChanged = function(e) {
      positionResult = e.target.getAttribute('position');

      // console.log('Position: ', e.target.getAttribute('position'));

      // IDEA 1:
      // ci deve essere un range automatizzato preso da es.: caverna
      // cavera: x: 4.3, y: 0, z: 4.6
      // aggiungere quindi x: + 0.5 e z: + 0.5 e y lasciarlo così come é!

      // IDEA 2:
      // posso aggiungere filtri `-webkit-filter` per determinate posizioni

      if (positionResult.z > 4.3 && positionResult.z < 4.6) {
        // TODO caverna collision
        // console.log('funziona ###############################################');
        // d3.select('a-sky')
        //   .transition().duration(1000)
        //   .attr('color', 'red');
      } else {
        // d3.select('a-sky')
        //   .attr('color', 'green');
      }
    };

    if (playerPosition) {
      playerCamera.addEventListener('componentchanged', componentChanged);
    };
  };
});

// STATS -----------------------------------------------------------------------

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-9111827-34', 'auto');
ga('send', 'pageview');
