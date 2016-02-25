(function(win) {
    function bubble(elemId, width, height) {
        this.container = document.getElementById(elemId);
        this.canvas = this.container.getElementsByTagName('canvas')[0];
        this.width = width;
        this.height = height;
        this.init();
    }

    bubble.prototype = {
        init: function() {
            this.target = {
                x: 0,
                y: this.height
            };
            this.animateFlag = true;

            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx = this.canvas.getContext('2d');

            var circles = [];
            for (var x = 0; x < this.width * 0.5; x++) {
                var c = this.creatCircle();
                circles.push(c);
            }
            this.circles = circles;

            var _this = this;
            function animate() {
                if (_this.animateFlag) {
                    _this.ctx.clearRect(0, 0, _this.width, _this.height);
                    for (var i in _this.circles) {
                        _this.draw(_this.circles[i]);
                    }
                }
                requestAnimationFrame(animate);
            }

            animate();
        },
        randomParams: function(elem) {
            elem.pos.x = Math.random() * this.width;
            elem.pos.y = this.height + Math.random() * 100;
            elem.alpha = 0.1 + Math.random() * 0.3;
            elem.scale = 0.1 + Math.random() * 0.3;
            elem.velocity = Math.random();
        },
        draw: function(elem) {
            if (elem.alpha <= 0) {
                this.randomParams(elem);
            }
            elem.pos.y -= elem.velocity;
            elem.alpha -= 0.0005;
            this.ctx.beginPath();
            this.ctx.arc(elem.pos.x, elem.pos.y, elem.scale * 10, 0, 2 * Math.PI, false);
            this.ctx.fillStyle = 'rgba(255,255,255,' + elem.alpha + ')';
            this.ctx.fill();
        },
        creatCircle: function() {
            var obj = new Object;
            obj.pos = {};
            this.randomParams(obj);
            return obj;
        },
        stop: function(){
          this.animateFlag = false;
        }
    }
    win.bubble = bubble;
})(window)