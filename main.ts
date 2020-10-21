basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(4, 4 - x)
            basic.pause(200)
        }
        for (let x = 0; x <= 4; x++) {
            led.plot(3, 0 + x)
            basic.pause(200)
        }
        for (let x = 0; x <= 4; x++) {
            led.plot(2, 4 - x)
            basic.pause(200)
        }
        for (let x = 0; x <= 4; x++) {
            led.plot(1, 0 + x)
            basic.pause(200)
        }
        for (let x = 0; x <= 4; x++) {
            led.plot(0, 4 - x)
            basic.pause(200)
        }
        basic.clearScreen()
    }
})
