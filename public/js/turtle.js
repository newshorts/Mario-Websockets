/* 
 *  Class to define a turtle
 */

var Turtle = function() {
    
    var _world,
        sprite,
        events,
        actions,
        defaultDirection,
        defaultAction,
        id;
    
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
        
        return bounds;
        
    }
    // TODO: create an object that manages all these movements and decisions
    // TODO: turtle moves at different rates because of constant css transition, fix it so it moves at the same rate no matter which side its on
    var moveRight = function() {
        var elem = $('#'+id);
        
        var bounds = calcBounds();
        
        elem.removeClass().addClass('turtle walk right ').css({
            left: bounds.upper
        });
    }
    
    var moveLeft = function() {
        var elem = $('#'+id);
        
        var bounds = calcBounds();
        
        elem.removeClass().addClass('turtle walk left ').css({
            left: bounds.lower
        });
    }
    
    var stop = function(c) {
        var elem = $('#'+id);
        
        var l = elem.position().left;
        
        elem.removeClass().addClass('turtle walk ' + c).css({
            left: l
        });
    }
    
    this.init = function(obj) {
        
        _world = $('#' + obj.world);
        defaultDirection = obj.direction || 'left';
        defaultAction = obj.action || 'walk';
        
        $('head').append(Sprite.css());
        _world.append(Sprite.html());
        
    }
    
    this.move = function(d) {
        if(d == 'right') {
            moveRight();
        }
        
        if(d == 'left') {
            moveLeft();
        }
    }
    
    this.stop = function(c) {
        stop(c);
    }
    
}
