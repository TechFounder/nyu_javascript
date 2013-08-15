// Map button ids to their respective URLs.
var linkMap = {
	button1: 'javascript/session1.html',
	button2: 'javascript/session2.html',
	button3: 'javascript/session3.html',
	button4: 'javascript/session4-5.html',
	button5: 'javascript/session6.html',
	button6: 'javascript/sessioncss1.html',
	button7: 'javascript/sessioncss2.html',
	button8: 'javascript/session7.html',
	button9: 'javascript/session9a.html',
	button10: 'javascript/session9b.html',
	button11: 'javascript/session10.html',
	button12: 'javascript/syllabus.html',
	button13: 'http://oit.scps.nyu.edu/~sultans/javascript/demo/',
	button14: 'http://oit.scps.nyu.edu/~sultans/javascript/project.html'
};

// Open the modal on clicking
$(document).ready(function() {
	$('.modal_button').on('click', function(event) {
		console.log(event);

			var button = $(this).attr('id');
			var url = linkMap[button];
				$('#framesource').attr('src', url);
				$('#modal').toggle();
			});

	$(window).on('click', function() {
		// $('#modal').hide();
	});
});