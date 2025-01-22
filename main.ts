input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 16; index++) {
        led.plot(1, 0)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(2, 0)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(3, 0)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(0, 1)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(0, 2)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(0, 3)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(4, 3)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(4, 2)
    }
    for (let index = 0; index < 16; index++) {
        led.plot(4, 1)
    }
})
basic.forever(function () {
	
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(1, 0)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(2, 0)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(3, 0)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(0, 1)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(0, 2)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(0, 3)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(4, 3)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(4, 2)
})
loops.everyInterval(input.runningTime(), function () {
    led.plot(4, 1)
})
