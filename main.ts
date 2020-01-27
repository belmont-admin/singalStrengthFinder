radio.onReceivedString(function (receivedString) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (strength > -50) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (strength > -70) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("ping")
})
let strength = 0
basic.showString("F")
radio.setGroup(255)
radio.setTransmitPower(7)
