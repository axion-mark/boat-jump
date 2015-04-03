/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

var gamePlaying = 0;
var score = 0;

function start() {
	$('.play-container').fadeOut('fast');
	$('.foreground').addClass('flowing');
	$('.foreground-top').addClass('panning');
	gamePlaying = 1;
}

function end() {
	$('.play-container').fadeIn('fast');
	$('.foreground').removeClass('flowing');
	$('.foreground-top').removeClass('panning');
	gamePlaying = 0;
	$('.tube').each(function() {
		$(this).remove();
	});
	
}

function jump() {
	if ($('.sprite').hasClass('animating')) {} else {
		$('.sprite').removeClass('floating').addClass('animating').animate({
		    bottom: '+=80px'
		}, 400, 'easeOutCubic', function() {
		    $('.sprite').animate({
			    bottom: '-=80px'
			}, 200, 'easeInQuad', function() {
				$(this).addClass('floating').removeClass('animating');
			});
		});
	}
}

function randsort(range) {
    for (var i = 0; i < 1; i++) {
        var n = Math.floor(Math.random()*range);
        o = n+1;
    }
    return o;
}

var count = 0;
window.setInterval(function(){
	if (randsort(3) == 1 && gamePlaying == 1) {
		$('.sprite').after('<div id="tube'+count+'" class="tube"><img src="img/tube.png"></div>');
		$('#tube'+count).animate({
			right: '+=3000px'
		}, 9000, 'linear', function() {
			$(this).remove();
		});
		count++;
	}
}, 800);

window.setInterval(function(){
	var breakable = $("#sprite").collision( ".tube" ); // no "as", so we get the things we collided with instead of new div's
	breakable.addClass('hit');
	
	$('.tube').each(function() {
		if ($(this).hasClass('hit')) {
			end();
		}
	});
}, 10);

jQuery(document).ready(function($) {
	var stageHeight = $('.stage').height();
	var bottomPosition = stageHeight * .335;
	$('.sprite').css('bottom', bottomPosition);
	
	var stage = document.getElementById("stage");
	stage.addEventListener('touchstart', jump, false);
	
	var play = document.getElementById("play");
	play.addEventListener('touchend', start, false);
	
	//for desktop dev only
	/*$('body').keyup(function(e){
	    if(e.keyCode == 32){
		    jump();
	    }
	});*/
		
});
