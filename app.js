const charactersList = document.querySelector("#characters-list");

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];
console.log(characters)

function characterFun() {
    const harryFilm = characters.map((char)=>{
        return`
		<div class ="characters-main-flex">
			<div class="characters-info">
				<h3 class="characters-name">${char.first_name}  ${char.last_name}</h3>
				<h5 class="characters-house">house: ${char.house}</h5>
				<h6 class="actor-name">${char.actor}</h6>

				<div class="btns">
					<button class="show-info">show info</button>
					<button class="delete-card">delete card</button>
				</div>
				
				
			</div>
			<img class ="characters-img-inf" src="${char.image}" alt="">
		
		</div>`
        
        
    } )
    .join("");
    console.log(harryFilm);
    charactersList.innerHTML = harryFilm;

	const btnsDElete  = document.querySelectorAll(".delete-card");
	const showInfo = document.querySelectorAll(".show-info");

		
	btnsDElete.forEach((btn) => {
		btn.addEventListener("click", ()=>{
			btn.closest(".characters-main-flex").remove();
		})
		
	});
	
	showInfo.forEach((btn) =>{
		btn.addEventListener("click", ()=>{
			// btn.parentElement.parentElement.querySelector(".actor-name").classList.add("active")
			btn.parentElement.parentElement.querySelector(".actor-name").classList.toggle("active")
		})
	})
	

}




characterFun();




