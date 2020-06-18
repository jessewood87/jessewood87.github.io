const INTERNSHIPS = [
    {
      id: "internship-1",
  		title: "Sports Coach",
  		location: "Dargaville",
  		description: "Help coach some of New Zealands future star atheltes in this thriving metropolis",
      date_range: "July - August",
      pay: "$700 Per Week",
  		image: "images/dargaville.jpg",
  		image_title: "Dargaville"
    },
    {
      id: "internship-2",
    		title: "Sports Coach",
    		location: "Dargaville",
    		description: "Help coach some of New Zealands future star atheltes in this thriving metropolis",
        date_range: "July - August",
        pay: "$700 Per Week",
    		image: "images/dargaville.jpg",
    		image_title: "Dargaville"
    },
    {
      id: "internship-3",
        title: "Sports Coach",
        location: "Dargaville",
        description: "Help coach some of New Zealands future star atheltes in this thriving metropolis",
        date_range: "July - August",
        pay: "$700 Per Week",
        image: "images/dargaville.jpg",
        image_title: "Dargaville"
    },
    {
      id: "internship-4",
        title: "Sports Coach",
        location: "Dargaville",
        description: "Help coach some of New Zealands future star atheltes in this thriving metropolis",
        date_range: "July - August",
        pay: "$700 Per Week",
        image: "images/dargaville.jpg",
        image_title: "Dargaville"
    }
]

/* Creates the HTML required for display each course information */
function createInternshipHTML(internship) {

	let internshipHTML = $("<article>")
	let figure = $("<figure>")
	let image = $("<img>", {src: internship.image, alt: internship.image_title})
  //image.className = "image"
	figure.append(image)
	internshipHTML.append(figure)

	let title = $("<h3>" + internship.title + "</h3>")
	internshipHTML.append(title)

	let location = $("<h4>" + internship.location + "</h4>")
	internshipHTML.append(location)

	let description = $("<p>" + internship.description + "</p>")
	internshipHTML.append(description)


	return internshipHTML;
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
})
