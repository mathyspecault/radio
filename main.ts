input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("nain de jardins ")
    } else if (receivedString == "B") {
        basic.showString("je t'aime")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(10)
basic.forever(function () {
	
})
