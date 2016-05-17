# VR Horoman

## Installation

- `npm install` to download all dependencies
- `gulp` to run workflow automatization
- `gulp deploy` to to publish contents to [Github pages](https://pages.github.com/)

## To-do’s

- [x] testare spread animation con three.js, [1](https://github.com/JoshGalvin/SpineFrame/)
- [ ] benchmark multistanza di un’unico oggetto
- [ ] benchmark testare display:none e position-x: -9999
- [x] benchmark utilizzando [fog component](https://aframe.io/docs/components/fog.html)
- [ ] cambiare dinamicamente colore del [fog component](https://aframe.io/docs/components/fog.html) in base alla posizione
- [ ] if statement per il gamepad SteelSeries Stratus XL utilizzando ‘analog stick’ sinistro
  - [ ] testare la libreria [aframe-gamepad-controls](https://github.com/donmccurdy/aframe-gamepad-controls)
- [x] testare objects `.dae` animati
- [ ] `static-body` su `.dae` o altre estensioni [1](https://github.com/donmccurdy/aframe-extras/blob/master/examples/playground/index.html#L29)
- [ ] testare [Raycaster](https://aframe.io/docs/components/raycaster.html)

### 3D models

- [ ] Ground
- [ ] Mountains
  - [ ] Variation 1
  - [ ] Variation 2
  - [ ] Variation 3
- [ ] Cavern
- [ ] Clouds
  - [ ] Variation 1
  - [ ] Variation 2
  - [ ] Variation 3
- [ ] Sun
- [ ] Plants
  - [x] Variation 1
  - [ ] Variation 2
  - [ ] Variation 3
- [ ] Grass
  - [x] Variation 1
  - [ ] Variation 2
  - [ ] Variation 3
- [x] Rocks
  - [x] Variation 1
  - [x] Variation 2
  - [x] Variation 3
- [ ] Trees
  - [ ] Variation 1
  - [ ] Variation 2
  - [ ] Variation 3

### Characters

- [x] Bird
- [ ] Bee

## Other

- [ ] Sea/Water

## Technologies

- A-Frame
- Tree.js
- gulp.js
- Webpack
- npm
- Node.js

## da fare per issue

- IDEA: heatmap > google maps > xml data points y (altezze) > per farli leggere a d3.js e far posizionare oggetti primitivi

1. far vedere la situazione corrente che non funziona
2. si può utilizzare d3.js per il beneficio di array e assimilare un modello 3D con degli oggetti primitivi all’interno con il static-body, esempi: [video](https://youtu.be/Tb2b5nFmmsM?t=21m23s), [array](https://dzone.com/articles/render-geographic-information)
3. cannon.js > chiedere se si possa integrare ulteriori componenti per la fisica e collissioni,  [componenti](https://github.com/schteppe/cannon.js/tree/master/src) in [quella sua](https://github.com/donmccurdy/aframe-extras/tree/master/lib), [slide](http://www.slideshare.net/MozVR/build-the-virtual-reality-web-with-aframe/), [3](http://blockbuilder.org/enjalot/1fd196cd99f8d58a56d3), [4]()
  - [video](https://air.mozilla.org/josh-carpenter-building-a-virtual-reality-web-experience/) 25:00
4. three.js > ha integrata la fisica interna

***

- Provare a testare [1 - utilizza cannon](https://github.com/ngokevin/aframe-physics-components), [2](https://github.com/dmarcos/a-invaders/tree/master/js/components) con modelli 3D

***

*update: may 13*

- fare un modulo con cannon.js
  - opzionalmente migliorare [1](https://github.com/ngokevin/aframe-physics-components)
- se non risponte tipo google lo sollecito
