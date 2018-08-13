import Person from "../models/Person.js"

export default class SwapiService {
  test(callback) {
    console.log("hello from swapiservice")
    return fetch('https://swapi.co/api/starships')
      .then(res => res.json())
      .then(callback)
      .catch(x => console.log(x))

    console.log('here i am')
  }
}