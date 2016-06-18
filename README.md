# Aeon

A prequel WebVR environment to videogame Aeon

## Map

![Map](map.png)

## Installation

- `npm install` to download all dependencies
- `gulp` to run workflow automatization
- `gulp deploy` to to publish contents to [Github pages](https://pages.github.com/)

## VR set-up

**Mobile**

Normale:

1. Caricare completamente il sito
2. Tenere il telefono spontandolo per poter guardare attraverso e toccare per spostarsi avanti

VR:

1. Caricare completamente il sito
2. Collegare gamepad per Android o iOS
2. Premere il bottone VR ed inserire il telefono in Cardboard o Galaxy Gear VR

*Da considerare*

- È necessario che il browser sia compatibile con il WebGL
- Il browser consigliato è Google Chrome
- È richiesto un telefono di ultima generazione e top di gamma
- Su iPhone 6s + è consigliato di disattivare Safari Tab Bar
- Gamepad testato solo SteelSeries Stratus XL su Android e Windows

**Desktop**

Normale:

1. Caricare completamente il sito
2. Utilizzare la tastiera tasti `wasd` per spostarsi e il mouse per girare la camera

VR:

1. Installare [Oculus Runtime](https://www.oculus.com/en-us/setup/)
2. Installare [Firefox Nightly](https://nightly.mozilla.org/) o la [build sperimentale di Chromium](https://drive.google.com/folderview?id=0BzudLt22BqGRbW9WTHMtOWMzNjQ&usp=sharing#list)
3. Installare il plugin [WebVR](https://addons.mozilla.org/en-US/firefox/addon/mozilla-webvr-enabler/) per [Firefox Nightly](https://nightly.mozilla.org/)
4. Collegare gamepad per Windows (opzionalmente)
4. Caricare completamente il sito
5. Collegare Oculus
6. Premere il bottone VR

*Da considerare*

- È necessario un computer con almeno una GPU GeForce GTX 970* e CPU Intel Core i5
- Potrebbe essere necessario di aprire il browser dopo aver collegato Oculus
- Gamepad testato solo SteelSeries Stratus XL su Android e Windows

*utilizzo GPU limitato

## Idea

1. fare una png texture che rappresenta il percorso sul terreno! http://armthethinker.github.io/webVR-experiments/4--viewpoint.html, https://www.npmjs.com/package/aframe-fit-texture-component
2. musica http://armthethinker.github.io/webVR-experiments/5--missed-connections.html
3. barriere https://github.com/atomicguy/aframe-fence-component
