/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program shows a nested loop in action, moving a pixel in the edge of the screen
*/

basic.clearScreen()

let sprite: game.LedSprite = null
let loopCounter: number  = 0
let ledNumber: number = 0

basic.showIcon(IconNames.Happy)

//When the button A is pressed, the while loops will function, moving the pixel sprite.
//It is moved in a clockwise fashion
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()

    basic.pause(1000)

    loopCounter = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter < 4) 
    {
        ledNumber = 0

        while (ledNumber < 4)
        {
            basic.pause(200)
            sprite.move(1)
            ledNumber++
        }      
        loopCounter++
        sprite.turn(Direction.Right, 90)

    }

    basic.pause(2000)
    sprite.delete()

    basic.showIcon(IconNames.Happy)
})
