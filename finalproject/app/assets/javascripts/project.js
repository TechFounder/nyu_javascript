// This section is used in the main landing page
$(document).ready(function() {
    $('#portrait').hover(function() {
        
        // set variables 
        jobTitle = $('#jobtitle'),
        bodyText = $('#bodytext'),
        origTitle = jobTitle.html(),
        origText = bodyText.html(),
        newTitle = "Director/Architect IT, Home Box Office",
        newText = "Over 20 years of experience in the information technology field. Expertise in all aspects of software engineering and construction lifecycle including requirement gathering, project costing, analysis, design, coding & development, and client training & support. Led many successful small, medium and large system development projects, as well as full ERP implementations, including RFP process, vendor negotiation/selection, planning, budget and contracts. Knowledgeable in both traditional and object-oriented analysis, design and construction methodologies.",
        
        //on mouse over 
        jobTitle.stop(true, true).fadeOut(500, function() {
            $(this).html(newTitle);
          }).fadeIn(500);

        bodyText.stop(true, true).fadeOut(500, function() {
            $(this).html(newText);
        }).fadeIn(500);
        
    }, function() {
        
        //on mouse out 
        jobTitle.stop(true, true).fadeOut(500, function() {
            $(this).html(origTitle);
        }).fadeIn(500);

        bodyText.stop(true, true).fadeOut(500, function() {
            $(this).html(origText);
        }).fadeIn(500);
        
    });
});

// This section is used in the evaluations page
$(document).ready(function() {
    $('#graph').hover(function() {
        $('#graph').fadeTo(1000, 0);
    }, function() {
        $('#graph').fadeTo(1000, 1);
    });
});

// This section is used in the feedback page

function validate() {
    if (document.feedback.name.value === "") {
        document.getElementById('name').placeholder = "Please enter your full name";
        return false;
    }
    if (document.feedback.email.value === "") {
        document.getElementById('email').placeholder = "Please enter your email";
        return false;
    }
    if (document.feedback.subject.value === "") {
        document.getElementById('subject').placeholder = "Please enter a subject";
        return false;
    }
    if (document.feedback.message.value === "") {
        document.getElementById('message').placeholder = "Please enter your message";
        return false;
    }

}