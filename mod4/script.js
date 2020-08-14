var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function(window) {

    for (var i = 0; i < 10; i++) {
        var firstletter = names[i].charAt(0);
        firstletter = firstletter.toLowerCase();
        if (firstletter == 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

})(window);