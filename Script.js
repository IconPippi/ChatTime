//Idk I was bored so I made this

var toggle = true;

register("command", function() {
    if (toggle == false) {
        ChatLib.chat("&4[&6ChatTime&4]&6 On");
        toggle = true;
    } else if (toggle) {
        ChatLib.chat("&4[&6ChatTime&4]&6 Off");
        toggle = false;
    }
}).setCommandName("chattime");

register("chat", function(event, message) {
    if (toggle) {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var message = ChatLib.getChatMessage(event, true);
        ChatLib.chat(message.replace(message, "&4[&6" + hours + ":" + minutes + ":" + seconds + "&4]&r " + message));
        cancel(event);
    }
});