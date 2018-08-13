import SwapiService from "./swapi-service.js"

const swapiService = new SwapiService()
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getStarships()">Browse Starships</button>
  <button onclick="app.controllers.swapi.getVehicles()">Browse Vehicles</button>
  <button onclick="app.controllers.swapi.getPeople()">Choose Target</button>
  <div id="starships"></div>
  <div id="vehicles"></div>
  <div id="people"></div>`
}

function drawStarships(data) {
  let starshipsElem = document.getElementById('starships')
  let template = ''
  data.forEach(starship => {
    template += `
    <div>${starship.name}</div>`
  })
  starshipsElem.innerHTML = template
}

function drawPeople(data) {
  let peopleElem = document.getElementById('people')
  let template = ''
  data.forEach(person => {
    template += `
    <div>${person.name}</div>`
  })
  peopleElem.innerHTML = template
}

function drawVehicles(data) {
  let vehicleElem = document.getElementById('vehicles')
  let template = ''
  data.forEach(vehicle => {
    template += `
    <div>${vehicle.name}</div>`
  })
  vehicleElem.innerHTML = template
}

function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}


export default class SwapiController {
  constructor() {
    draw()
  }
  getStarships() {
    swapiService.getStarships(drawStarships, drawError)
  }

  getPeople() {
    swapiService.getPeople(drawPeople, drawError)
  }

  getVehicles() {
    swapiService.getVehicles(drawVehicles, drawError)
  }
}