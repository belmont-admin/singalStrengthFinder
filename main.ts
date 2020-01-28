radio.onReceivedString(function (receivedString) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (strength > -60) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (strength > -80) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
input.onButtonPressed(Button.AB, function () {
    channel += -1
    if (channel < 1) {
        channel = 9
    }
    basic.showNumber(channel)
    radio.setGroup(channel)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("ping")
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.A, function () {
    channel += 1
    if (channel > 9) {
        channel = 1
    }
    basic.showNumber(channel)
    radio.setGroup(channel)
})
let strength = 0
let channel = 0
channel = 1
basic.showString("F")
radio.setGroup(1)
radio.setTransmitPower(7)
