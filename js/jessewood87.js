const INTERNSHIPS = [
    {
      id: "internship-1",
  		title: "Sports Coach",
  		location: "Dargaville",
  		description: "Help coach some of New Zealands future star atheltes in this thriving metropolis.",
      date_range: "July - August",
      pay: "$675 Per Week",
  		image: "Images/dargaville.jpg",
  		image_title: "Dargaville"
    },
    {
      	id: "internship-2",
    		title: "Math Teacher",
    		location: "Huntly",
    		description: "When the world thinks of academia they think of Huntly. Be the shining light to the next math prodigy from Huntly.",
        date_range: "September - November",
        pay: "$625 Per Week",
    		image: "Images/huntly.jpg",
    		image_title: "Huntly"
    },
    {
      	id: "internship-3",
        title: "English Tutor",
        location: "Tokoroa",
        description: "Give students the tools they need to tell tales of magical Tokoroa.",
        date_range: "August - October",
        pay: "$650 Per Week",
        image: "Images/tokoroa.jpg",
        image_title: "Tokoroa"
    },
    {
      id: "internship-4",
        title: "Music Teacher",
        location: "Thames",
        description: "Free Jazz or Psytrance, what musical influence can you bring and enrich our town?",
        date_range: "July - August",
        pay: "$680 Per Week",
        image: "Images/thames.jpg",
        image_title: "Thames"
    }
]

/* Creates the HTML required for display each course information */
function createInternshipHTML(internship) {

	let internshipHTML = $("<div>")
  	.addClass("image")
    .attr("id", internship.id)
	let image = $("<img>", {src: internship.image, alt: internship.image_title})
	let title = $("<h3>" + internship.title + "</h3>")
  let location = $("<h4>" + internship.location + "</h4>")
  internshipHTML.append(image)
	internshipHTML.append(title)
	internshipHTML.append(location)

	let info = $("<div>")
  	.addClass("hidden")
    .attr("id", "info" + internship.id)

	let description = $("<p>" + internship.description + "</p>")
  let date_range =  $("<p>" + internship.date_range + "</p>")
  let pay = $("<p>" + internship.pay + "</p>")
  info.append(description)
  info.append(date_range)
  info.append(pay)
  internshipHTML.append(info)
  internshipHTML.on("click", displayMore)

	return internshipHTML;
}

function displayMore(){
	let internshipHTML = $(this)
  let id = "info" + internshipHTML.attr('id')
  console.log(id)
  $('#' + id).toggle(200);
}

function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();

		let matches = [];
		for(let internship of INTERNSHIPS) {
			let title = internship.title.toLowerCase();
			if(title.includes(query)) {
				matches.push(internship);
			}
		}

		displayInternships(matches);
}

function displayInternships(internships) {
	let internshipList = $("#internshipsList");

	internshipList.empty();
	for(let internship of internships) {
		let internshipHTML = createInternshipHTML(internship)
		internshipList.append(internshipHTML)
	}
}

$(document).ready(function(){
  let firstInternships = [INTERNSHIPS[0], INTERNSHIPS[1]]
  displayInternships(firstInternships)
  $("#searchText").on("keyup", search)
})
