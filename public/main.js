'use strict';

(function() {

    var socket = io();

    socket.on('connect', function(){
        console.log('Connect ' + socket.id);
    });
    socket.on('update-value', function(data){
        $('p').append('<br>'+data.value);
    });

    var input = $('input'),
        button = $('button');
    button.click(function(e){
        e.preventDefault();
        socket.emit('add-value', {value: input.val()});
        input.val('');
    });

})();
