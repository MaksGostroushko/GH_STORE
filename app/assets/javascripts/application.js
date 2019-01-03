//
//= require jquery
//= require jquery-ui
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require lightbox
//= require trix
//= require jquery3
//= require bootstrap-sprockets
//= require_tree .

$(function() {
    	$('.img_plus').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});


$(document).on('turbolinks:load', function() {
    $('#star').on('click', function(){
        $(this).css('color', 'yellow');
    });
});
