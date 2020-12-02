let Faktor1 = randint(1, 10)
let Faktor2 = randint(1, 10)
let Produkt = Faktor1 * Faktor2
basic.forever(function () {
    basic.showNumber(Faktor1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(Faktor2)
    if (input.buttonIsPressed(Button.A)) {
        basic.setLedColor(0xff00ff)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        for (let index = 0; index < 2; index++) {
            basic.showNumber(Produkt)
        }
        basic.turnRgbLedOff()
        control.reset()
    }
})
