let g = 0
let b = 0
let a = 0
music.setVolume(255)
basic.forever(function () {
    basic.pause(100)
    a = input.acceleration(Dimension.Strength)
    basic.pause(100)
    b = input.acceleration(Dimension.Strength)
    g = Math.trunc(Math.abs(a - b) / 20)
    for (let index = 0; index < Math.trunc(g / 25); index++) {
        music.ringTone(262)
        basic.pause(100)
        music.rest(music.beat(BeatFraction.Whole))
    }
})
