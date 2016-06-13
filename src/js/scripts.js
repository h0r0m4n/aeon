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

      this.albero = {
        x: {
          rangeA: 0,
          rangeB: 0,
        },
        y: 0,
        z: {
          rangeA: -5,
          rangeB: -7,
        }
      };

      this.fire = {
        x: {
          rangeA: -2,
          rangeB: 0
        },
        y: 0,
        z: {
          rangeA: 0,
          rangeB: 2
        }
      };
    };

    /*
    var strategy = {
      strategies: {
        fire: function() {
          // TODO fire
        },
        albero: function() {
          // TODO albero
        }
      },
      action: function(type) {
        this.strategies[type]();
      }
    }

    strategy.action('fire');

    strategy.action('albero');
    */
    var instanceCollision = new Objs();

    var componentChanged = function(e) {

      positionResult = e.target.getAttribute('position');

      // console.log('Position: ', e.target.getAttribute('position'));

      var Range = {
        albero: function() {
          return (positionResult.z > instanceCollision.albero.z.rangeB && positionResult.z < instanceCollision.albero.z.rangeA);
        },
        fire: function() {
          return (
            (positionResult.z > instanceCollision.fire.z.rangeA && positionResult.z < instanceCollision.fire.z.rangeB) &&
            (positionResult.x > instanceCollision.fire.x.rangeA && positionResult.x < instanceCollision.fire.x.rangeB)
          );
        }
      };

      if (Range.fire()) {
        console.log('Test1!');
      } else {
        console.log('Test2!');
      };

      if (Range.albero()) {
        // tree collision

        d3.select('a-sky')
          .transition().duration(1000)
          .attr('color', 'red');

        // var positionP = playerCamera.getAttribute('position');
        //   positionP.z = -5;
        //   positionP.x = 15;
        //
        // playerCamera.setAttribute('position', positionP.x + ' ' + positionP.y + ' ' + positionP.z);
        console.log('@######', positionP);
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
