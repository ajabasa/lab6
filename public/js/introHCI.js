'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

//string formatting
String.prototype.format = String.prototype.f = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	//var url1 = "/project/";
	//var urlName = url1.concat(idNumber);
	//var urlName = $(('/project/').attr(idNumber));
	var urlName = '/project/' + idNumber;
	var urlColor = '/palette';

	console.log("User clicked on project " + idNumber);

	$.get(urlName, addProject);
	console.log("URL: " + urlName);

	$.get(urlColor, randomizeColors);
}

function addProject(result){
	console.log(result);
	console.log("#project1 .details");
	console.log("#project" + result['id'] + " .details");

	var html = 
    '<img src="' + result['image'] + '" class="detailsImage">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] + 
    '</small></p></a>' + '<p>' + result['summary'] + '</p>'; 
	//var html = '<p>{0}</p><p><img {1} >{2}{3}</p'.format(result['title'], src="result['image']" .detailsImage, result['date'], result['summary']);
	$("#project" + result['id'] + " .details").html(html);

}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}