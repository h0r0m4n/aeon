# Aeon

A prequel WebVR environment to videogame Aeon

## Installation

- `npm install` to download all dependencies
- `gulp` to run workflow automatization
- `gulp deploy` to to publish contents to [Github pages](https://pages.github.com/)

## TODO

- particles https://github.com/IdeaSpaceVR/aframe-particle-system-component

## Priorità x mercoledì

1. capire meglio come utilizzare formato dati Objs per specifiche cordinate
  * saranno 6: caverna, fuori caverna, mondo 2, mondo 3, mondo 4 e la scena finale)
  * level trigger per posizione es. (se entri nelle cordinate x e y es. cambia colore dello sfondo)
2. joystick papping corretto, possibilmente (if Steelseries Stratus XL fai questo papping)

## Steelseries Stratus XL – Key Mapping

- http://phaser.io/examples/v2/input/gamepad-debug
- https://github.com/sgraham/gamepad.js/

**ButtonMappings:**

A  = Button0
B  = Button1
X  = Button13
Y  = Button12
L1 = Button3
R1 = Button14
L2 = Button4
R2 = Button5

**AnalogMappings:**

LeftStickLeftMapping( Analog0 ),
LeftStickRightMapping( Analog0 ),
LeftStickUpMapping( Analog1 ),
LeftStickDownMapping( Analog1 ),

RightStickLeftMapping( Analog2 ),
RightStickRightMapping( Analog2 ),
RightStickUpMapping( Analog3 ),
RightStickDownMapping( Analog3 ),
