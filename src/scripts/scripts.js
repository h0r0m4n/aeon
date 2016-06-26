document.addEventListener('DOMContentLoaded', function() {

  // LEVEL TRIGGER -------------------------------------------------------------

  var cameras = {
    player: document.getElementById('camera-player'),
    topographic: document.getElementById('camera-top')
  }

  function cameraPlayer() {
    cameras.topographic.setAttribute('camera', 'active:false');
    cameras.player.setAttribute('camera', 'active:true');
  };

  function cameraTop() {
    cameras.player.setAttribute('camera', 'active:false');
    cameras.topographic.setAttribute('camera', 'active:true');
  };

  function cameraChange(e) {
    e = e || window.event;

    if(e.keyCode == '49') {
      cameraPlayer();
    } else if (e.keyCode == '50') {
      cameraTop();
    }
  };

  document.onkeydown = cameraChange;

  levelTrigger();

  function levelTrigger() {
    var playerPosition = cameras.player.getAttribute('position'),
        positionResult = {};

    var caverna = {
      x: 3,
      y: 0,
      z: 4.5
    };

    // https://youtu.be/hM9h1wN4rfU
    var Objs = function() {

      this.world1 = {
        x: {
          rangeA: -128,
          rangeB: 0
        },
        y: 0,
        z: {
          rangeA: 0,
          rangeB: 128
        }
      };

      this.world2 = {
        x: {
          rangeA: -128,
          rangeB: 0
        },
        y: 0,
        z: {
          rangeA: -128,
          rangeB: 0
        }
      };

      this.world3 = {
        x: {
          rangeA: 0,
          rangeB: 128
        },
        y: 0,
        z: {
          rangeA: -128,
          rangeB: 0
        }
      };

      this.world4 = {
        x: {
          rangeA: 0,
          rangeB: 128
        },
        y: 0,
        z: {
          rangeA: 0,
          rangeB: 128
        }
      };

    };

    var instanceCollision = new Objs();

    if (playerPosition) {
      cameras.player.addEventListener('componentchanged', function (e) {
        positionResult = e.target.getAttribute('position');

        var Range = {
          world1: function() {
            return (
              (positionResult.z > instanceCollision.world1.z.rangeA && positionResult.z < instanceCollision.world1.z.rangeB) &&
              (positionResult.x > instanceCollision.world1.x.rangeA && positionResult.x < instanceCollision.world1.x.rangeB)
            );
          },
          world2: function() {
            return (
              (positionResult.z > instanceCollision.world2.z.rangeA && positionResult.z < instanceCollision.world2.z.rangeB) &&
              (positionResult.x > instanceCollision.world2.x.rangeA && positionResult.x < instanceCollision.world2.x.rangeB)
            );
          },
          world3: function() {
            return (
              (positionResult.z > instanceCollision.world3.z.rangeA && positionResult.z < instanceCollision.world3.z.rangeB) &&
              (positionResult.x > instanceCollision.world3.x.rangeA && positionResult.x < instanceCollision.world3.x.rangeB)
            );
          },
          world4: function() {
            return (
              (positionResult.z > instanceCollision.world4.z.rangeA && positionResult.z < instanceCollision.world4.z.rangeB) &&
              (positionResult.x > instanceCollision.world4.x.rangeA && positionResult.x < instanceCollision.world4.x.rangeB)
            );
          }
        };

        if (Range.world1()) {

          d3.select('.world_1_terrain')
            .attr('visible', 'true');

          d3.select('.world_1_module')
            .attr('visible', 'true');

          d3.select('.world_1_fire')
            .attr('visible', 'true');

          d3.select('.sky')
            .attr('color', '#A0FFFF')
            .transition()
              .duration(2000);

          d3.select('.sphere')
            .attr('material', 'color: #A0FFFF; side: double')

          removeEventListener('componentchanged', true);

          // d3.select('.ground')
          //   .attr('material', 'color: #274D29')
          //   .transition()
          //     .duration(2000);

        } else {

          // this.addEventListener('componentchanged', true);

          d3.select('.world_1_terrain')
            .attr('visible', 'false');

          d3.select('.world_1_module')
            .attr('visible', 'false');

          d3.select('.world_1_fire')
            .attr('visible', 'false');

        };

        if (Range.world2()) {

          d3.select('.world_2_terrain')
            .attr('visible', 'true');

          d3.select('.world_2_module')
            .attr('visible', 'true');

          d3.select('.sky')
            .attr('color', '#D6FFC5')
            .transition()
              .duration(2000);

          d3.select('.sphere')
            .attr('material', 'color: #D6FFC5; side: double')

          // d3.select('.ground')
          //   .attr('material', 'color: #4E4720')
          //   .transition()
          //     .duration(2000);

        } else {

          d3.select('.world_2_terrain')
            .attr('visible', 'false');

          d3.select('.world_2_module')
            .attr('visible', 'false');

        };

        if (Range.world3()) {

          d3.select('.world_3_terrain')
            .attr('visible', 'true');

          d3.select('.world_3_module')
            .attr('visible', 'true');

          d3.select('.canyon_1')
            .attr('visible', 'true');

          d3.select('.canyon_2')
            .attr('visible', 'true');

          d3.select('.sky')
            .attr('color', '#D8ECAD')
            .transition()
              .duration(2000);

          d3.select('.sphere')
            .attr('material', 'color: #D8ECAD; side: double')

          // d3.select('.ground')
          //   .attr('material', 'color: #4F3F25')
          //   .transition()
          //     .duration(2000);

        } else {

          d3.select('.world_3_terrain')
            .attr('visible', 'false');

          d3.select('.world_3_module')
            .attr('visible', 'false');

          d3.select('.canyon_1')
            .attr('visible', 'false');

          d3.select('.canyon_2')
            .attr('visible', 'false');

        };

        if (Range.world4()) {

          d3.select('.world_4_terrain')
            .attr('visible', 'true');

          d3.select('.world_4_module')
            .attr('visible', 'true');

          d3.select('.planet')
            .attr('visible', 'true');

          d3.select('.sky')
            .attr('color', '#DAE2B1')
            .transition()
              .duration(2000);

          d3.select('.sphere')
            .attr('material', 'color: #DAE2B1; side: double')

          // d3.select('.ground')
          //   .attr('material', 'color: #235244')
          //   .transition()
          //     .duration(2000);

          var soundtrack = document.querySelector('[sound]');
          soundtrack.play();

        } else {

          d3.select('.world_4_terrain')
            .attr('visible', 'false');

          d3.select('.world_4_module')
            .attr('visible', 'false');

          d3.select('.planet')
            .attr('visible', 'false');

        };

      });
    };
  };

  // NAV -----------------------------------------------------------------------

  var infoOpener = document.getElementById('infoOpener'),
      infoAside = document.getElementById('infoAside');

  if (infoOpener) {
    infoOpener.addEventListener('click', function (e) {
      infoAside.classList.toggle('open');
      e.preventDefault();
    });
  };

});

// STATS -----------------------------------------------------------------------

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-9111827-34', 'auto');
ga('send', 'pageview');
