import Person from "../models/Person.js"
import StarShip from "../models/StarShips.js"
import Vehicle from '../models/Vehicles.js'

export default class SwapiService {

  getPeople(draw, drawError) {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          return new Person(rawPerson)

        })
        draw(myPeople)
      })
      .catch(drawError)
  }

  getStarships(draw, drawError) {
    fetch('https://swapi.co/api/starships')
      .then(res => res.json())
      .then(res => {
        let myStarships = res.results.map(starship => {
          return new StarShip(starship)
        })
        draw(myStarships)
      })
      .catch(drawError)
  }

  getVehicles(draw, drawError) {
    fetch('https://swapi.co/api/vehicles')
      .then(res => res.json())
      .then(res => {
        let myVehicles = res.results.map(vehicle => {
          return new Vehicle(vehicle)
        })
        draw(myVehicles)
      })
      .catch(drawError)
  }

}