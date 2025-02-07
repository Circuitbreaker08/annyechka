var note

var message =
`Hello Anna
As you can see,
we have your Squid.
We have simple demands
that must be met.
First, you will pay us in the amount of
14€ and 57₽.
Then you will give us the locker dino.
Meet our demands within
3.37 days

Byeeeeeeeeeeeeeee

p.s. totally not anyone you know hehe`

function randomFont() {
    return [
        "Arial",
        "Verdana",
        "Tahoma",
        "Trebuchet MS",
        "Times New Roman",
        "Georgia",
        "Garamond",
        "Courier New",
        "Brush Script MT"

    ][Math.floor(Math.random() * 9)]
}

function randomSize() {
    return Math.floor(Math.random() * 20) + 9
}

window.onload = () => {
    let out = ""
    for (i = 0; i < message.length; i++) {
        let char = ""
        char += "<span style=\"font-family: " + randomFont() + "; font-size: " + randomSize() + "px\n>" + message[i] + "</span>"
        out += char
    }
    document.getElementById("note").innerHTML = out
}