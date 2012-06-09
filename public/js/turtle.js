/* 
 *  Class to define a turtle
 */
// TODO: turtle moves at different rates because of constant css transition, fix it so it moves at the same rate no matter which side its on
(function(window) {
    var Turtle = function() {

        var _world,
            sprite,
            events,
            actions,
            defaultDirection,
            defaultAction,
            id,
            elem;

        var Sprite = {
            css: function() {
                return '<link rel="stylesheet" type="text/css" href="css/turtle.css" />';
            },
            html: function() {
                id = Math.floor(Math.random()*9999);
                return '<div id="'+id+'" class="turtle '+defaultDirection+' '+defaultAction+'"></div>';
            }
        }

        var calcBounds = function() {

            var worldWidth = _world.width();
            var elem = $('#'+id);
            var elemWidth = elem.width();

            var bounds = {
                upper: worldWidth - elemWidth,
                lower: 0
            }

            console.dir(bounds);

            return bounds;

        }
        
        var Action = {
            
            walkRight: function() {
//                var elem = $('#'+id);

                var bounds = calcBounds();

                elem.removeClass().addClass('turtle walk right ').css({
                    left: bounds.upper
                });
            },
            
            walkLeft: function() {
//                var elem = $('#'+id);

                var bounds = calcBounds();

                elem.removeClass().addClass('turtle walk left ').css({
                    left: bounds.lower
                });
            },
            
            stop: function(dirWalk) {
//                var elem = $('#'+id);

                var l = elem.position().left;

                elem.removeClass().addClass('turtle walk ' + dirWalk).css({
                    left: l
                });
            }
        }
        
        var Controller = {
            init: function(obj) {

                _world = $('#' + obj.world);
                defaultDirection = obj.direction || 'left';
                defaultAction = obj.action || 'walk';

                $('head').append(Sprite.css());
                _world.append(Sprite.html());
                elem = $('#'+id);

            },
            
            walk: function(dir) {
                if(dir == 'right') {
                    Action.walkRight();
                }

                if(dir == 'left') {
                    Action.walkLeft();
                }
            },
            
            stop: function(dirWalk) {
                Action.stop(dirWalk);
            }
        }
        
        // make controller public
        this.controller = Controller;
        
    }
    
    window.Turtle = Turtle;
    
}(window));


