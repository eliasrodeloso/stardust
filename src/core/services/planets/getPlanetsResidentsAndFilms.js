// script to relate the planets residents and films
const fs = require("fs")

const films = require("../films/films.json")
const people = require("../people/people.json")

const planets = require("./planets.json")

function relateFilmsForPlanet(planetId) {
	const filmsArray = []
	films.forEach((film) => {
		film.fields.planets.forEach((planet) => {
			if (String(planet) === String(planetId)) {
				filmsArray.push(`https://swapi.dev/api/films/${film.pk}/`)
			}
		})
	})
	return filmsArray
}

function relateResidentsForPlanet(planetId) {
	const residentsArray = []
	people.forEach((resident) => {
		if (String(resident.fields.homeworld) === String(planetId)) {
			residentsArray.push(`https://swapi.dev/api/people/${resident.pk}/`)
		}
	})
	return residentsArray
}

const planetsMapped = planets.map((item) => {
	return {
		...item,
		fields: {
			...item.fields,
			residents: relateResidentsForPlanet(item.pk),
			films: relateFilmsForPlanet(item.pk),
		},
	}
})

fs.renameSync("./planets.json", "./planetsUnrelated.json")
fs.writeFileSync("./planets.json", JSON.stringify(planetsMapped))
