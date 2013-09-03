(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function(){
    var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
    
    ctx.translate(500,300);
    
    (function loop(time) {
        var dt = (time - loop.last_time)*.001;
        if(dt) {
            //do stuff
            clear();
            render(dt);
        }
        loop.last_time=time;
        requestAnimationFrame(loop);
    }());
    
    function clear() {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle="black";
        ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
    }
    
    function render(dt) {
        ctx.fillStyle="white";
        ctx.font="70px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.rotate(2*Math.PI * dt);
        ctx.fillText('CSCI 530',0,0);
    }
}());