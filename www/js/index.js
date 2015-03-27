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
		var stage = document.getElementById("stage");
		stage.addEventListener('touchstart', jump, false);
    }
};

function randsort(range) {
    for (var i = 0; i < 1; i++) {
        var n = Math.floor(Math.random()*range);
        o = n+1;
    }
    return o;
}

function addObstacle() {
	var obstacle = randsort(14);
	$('.stage').append('<div class="obstacle"><div class="obstacle-top ob'+obstacle+'"></div><div class="obstacle-bottom ob'+obstacle+'"></div></div>');
	$('.obstacle').animate({
		right: "+=1000"
	}, 10000, "linear");
}

function jump() {
	$('.sprite').hide();
	alert('meow');
	/*$('.sprite').animate({
		opacity: 0.25
	    //bottom: "+=70"
	}, 200, function() {
	    $('.sprite').animate({
		    top: "-=70"
		}, 200);
	});*/
}
