(function () {
    if (typeof Mario === 'undefined')
        window.Mario = {};


    //there are too many possible configurations of pipe to capture in a reasonable
    //set of simple variables. Joints, etc. are just too much.
    //To that end, the pipe class handles simple pipes, and we'll put together
    //anything more complex with individual props, right?
    Pipe = Mario.Pipe = function (options) {
        this.pos = options.pos

        //NOTE: direction is the direction you move INTO the pipe.
        this.direction = options.direction
        this.destination = options.destination
        this.length = options.length;

        if (this.direction === "UP" || this.direction === "DOWN") {
            this.hitbox = [0, 0, 32, this.length * 16];
            this.midsection = level.pipeUpMid;
            this.endsection = level.pipeTop;
        } else {
            this.hitbox = [0, 0, 16 * this.length, 32];
            this.midsection = level.pipeSideMid;
            this.endsection = level.pipeLeft;
        }
    }

    Pipe.prototype.checkPipe = function () {
        if (this.destination === undefined || !input.isDown(this.direction)) return;

        var h = player.power === 0 ? 16 : 32;
        var x = Math.floor(player.pos[0]);
        var y = Math.floor(player.pos[1]);
        switch (this.direction) {
            case 'RIGHT': if (x === this.pos[0] - 16 &&
                y >= this.pos[1] &&
                y + h <= this.pos[1] + 32) {
                player.pipe(this.direction, this.destination)
            }
                break;
            case 'LEFT': if (x === this.pos[0] + 16 * this.length &&
                y >= this.pos[1] &&
                y + h <= this.pos[1] + 32) {
                player.pipe(this.direction, this.destination)
            }
                break;
            case 'UP': if (y === this.pos[1] + 16 * this.length &&
                x >= this.pos[0] &&
                x + 16 <= this.pos[0] + 32) {
                player.pipe(this.direction, this.destination)
            }
                break;
            case 'DOWN': if (y + h === this.pos[1] &&
                x >= this.pos[0] &&
                x + 16 <= this.pos[0] + 32) {
                player.pipe(this.direction, this.destination);
            }
                break;
        }
    }