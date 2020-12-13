(function () {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch (code) {
            case 32:
                key = 'SPACE'; break;
            case 37:
                key = 'LEFT'; break;
            case 38:
                key = 'UP'; break;
            case 39:
                key = 'RIGHT'; break;
            case 40:
                key = 'DOWN'; break;
            case 88:
                key = 'JUMP'; break;
            case 90:
                key = 'RUN'; break;
            default:
                key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }