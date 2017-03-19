function initMap() {
    // Create a map object and specify the DOM element for display.
    var styles =
        [{
    	"featureType": "administrative.land_parcel",
    	"elementType": "labels",
    	"stylers": [{
    		"visibility": "off"
    	}]
    }, {
    	"featureType": "landscape",
    	"stylers": [{
    		"color": "#95c342"
    	}]
    }, {
    	"featureType": "poi",
    	"elementType": "labels.text",
    	"stylers": [{
    		"visibility": "off"
    	}]
    }, {
    	"featureType": "poi.business",
    	"stylers": [{
    		"visibility": "off"
    	}]
    }, {
    	"featureType": "poi.park",
    	"elementType": "labels.text",
    	"stylers": [{
    		"visibility": "off"
    	}]
    }, {
    	"featureType": "road",
    	"stylers": [{
    		"color": "#94c536"
    	}, {
    		"lightness": 40
    	}]
    }, {
    	"featureType": "road",
    	"elementType": "labels",
    	"stylers": [{
    		"visibility": "simplified"
    	}]
    }, {
    	"featureType": "road",
    	"elementType": "labels.text",
    	"stylers": [{
    		"saturation": -75
    	}, {
    		"lightness": -50
    	}]
    }, {
    	"featureType": "road",
    	"elementType": "labels.text.fill",
    	"stylers": [{
    		"weight": 4.5
    	}]
    }, {
    	"featureType": "road.local",
    	"elementType": "labels",
    	"stylers": [{
    		"visibility": "off"
    	}]
    }, {
    	"featureType": "water",
    	"elementType": "geometry.fill",
    	"stylers": [{
    		"color": "#3c989a"
    	}]
    }]

    var styledMap = new google.maps.StyledMapType(styles, {
        name: "visitPucon"
    });

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-39.2739151, -71.9799085),
        mapTypeControlOptions: {
            mapTypeIds: ['map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('ourLocation'),
        mapOptions);

    var myLatLng = {lat: -39.2739151, lng: -71.9799085};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'VisitPucon.travel'
      });

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

}

$(document).ready(function(){

    $('#modal').hide()
     $('#modal .close').click(function(){
         $(this).closest('#modal').fadeOut();
     })


    $('#submit-contact').on('click', function(e){
        e.preventDefault();
        var content = {
            name: $('#input-name').val(),
            email: $('#input-email').val(),
            phone: $('#input-phone').val(),

            checkin: $('#input-checkin').val(),
            checkout: $('#input-checkout').val(),
            property: ''
        }

        console.log(content);


        $.ajax({
            type: 'POST',
            url: '../sendEmail.php',
            data: content,
            success: function(){
                $('#modal').show().delay(2000).fadeOut();
            }
        }).done(function(){
            $('#modal').show().delay(2000).fadeOut();
        }).fail(function(){
            $('#modal').show().delay(2000).fadeOut();
        })
    })

})
