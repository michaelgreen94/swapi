import Person from "../models/Person.js"

export default class SwapiService {

  getPeople(draw, drawError) {
    console.log("hello from swapiservice")
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          return new Person(rawPerson)
        })
        draw(myPeople)
      })
      .catch(drawError)
  })
  console.log('here i am')
}

getStarships(draw, drawError) {
  console.log("hello from service")
  fetch('https://swapi.co/api/starships')
    .then(res => res.json())
    .then(draw)
    .catch(drawError)
  console.log('here i am')
}

}