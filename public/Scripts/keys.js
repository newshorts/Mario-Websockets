/*
 * *****
 * WRITTEN BY FLORIAN RAPPL, 2012.
 * florian-rappl.de
 * mail@florian-rappl.de
 * *****
 */

var keys = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true);
		});
		$(document).on('keyup', function(event) {
                    console.dir(event);
			return keys.handler(event, false);
		});
//                socket.on('touchstart', function (data) {
//                    
//                    return keys.handler(data.event, true);
//                });
//                
//                socket.on('touchend', function (data) {
//                    console.dir(data);
//                    return keys.handler(data.event, true);
//                });
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
//                socket.off('touchstart');
//                socket.off('touchend');
	},
	handler : function(event, status) {
		switch(event.keyCode) {
			case 57392://CTRL on MAC
			case 17://CTRL
			case 65://A
				keys.accelerate = status;
				break;
			case 40://DOWN ARROW
				keys.down = status;
				break;
			case 39://RIGHT ARROW
				keys.right = status;
				break;
			case 37://LEFT ARROW
				keys.left = status;			
				break;
			case 38://UP ARROW
				keys.up = status;
				break;
			default:
				return true;
		}
			
//		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};