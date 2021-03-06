let Izq = 0
let Der = 0
input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 255)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        Izq = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
        Der = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
        if (!(Izq) && Der) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
        }
        if (!(Der) && Izq) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
        }
        if (!(Der) && !(Izq)) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
})
basic.forever(function () {
    if (!(Izq) && Der) {
        music.playTone(175, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (!(Der) && Izq) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
    if (!(Der) && !(Izq)) {
        music.playTone(349, music.beat(BeatFraction.Eighth))
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
