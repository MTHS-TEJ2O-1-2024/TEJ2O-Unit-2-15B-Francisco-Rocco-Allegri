/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program shows a nested loop in action, moving a pixel in the edge of the screen
*/

basic.clearScreen()

let sprite: game.LedSprite = null
let loopCounter = 0

basic.showIcon(IconNames.Happy)
basic.pause(500)

//When the button A is pressed, the while loops will function, moving the pixel sprite.
//It is moved in a clockwise fashion
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()

    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        //sprite.set function  (X, value) will set a value for X (horizontal) 
        //each loop will increment the value for X, moving it to the RIGHT towards FIVE
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()

    loopCounter = 0
    sprite = game.createSprite(4, 0)
    while (loopCounter <= 5) {
        //sprite.set function  (Y, value) will set a value for Y (vertical) 
        //each loop will increment the value for Y, moving it DOWNWARDS towards FIVE
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(4, 4)
    while (loopCounter >= 0) {
        //sprite.set function  (X, value) will set a value for X (horizontal) 
        //each loop will decrease the value for X, moving it to the LEFT towards ZERO
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        //sprite.set function  (Y, value) will set a value for Y (vertical) 
        //each loop will decrease the value for Y, moving it UPWARDS towards ZERO
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()


    basic.showIcon(IconNames.Happy)
})

//When the button B is pressed, the while loops will function, moving the pixel sprite.
//It is moved in a counterclockwise fashion
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()

    loopCounter = 0
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        //sprite.set function  (X, value) will set a value for X (horizontal) 
        //each loop will increment the value for X, moving it to the RIGHT towards FIVE
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()

    loopCounter = 0
    sprite = game.createSprite(4, 5)
    while (loopCounter <= 5) {
        //sprite.set function  (Y, value) will set a value for Y (vertical) 
        //each loop will increment the value for Y, moving it DOWNWARDS towards FIVE
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(4, 4)
    while (loopCounter >= 0) {
        //sprite.set function  (X, value) will set a value for X (horizontal) 
        //each loop will decrease the value for X, moving it to the LEFT towards ZERO
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()

    loopCounter = 5
    sprite = game.createSprite(0, 0)
    while (loopCounter <= 5) {
        //sprite.set function  (Y, value) will set a value for Y (vertical) 
        //each loop will decrease the value for Y, moving it UPWARDS towards ZERO
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()


    basic.showIcon(IconNames.Happy)
})

