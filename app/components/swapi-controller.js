import SwapiService from "./swapi-service.js"

const swapiService = new SwapiService()

let app = document.getElementById('app')

function draw(data) {
  app.innerHTML = `<button onclick="app.controllers.swapi.test()">Test</button>`
}

export default class SwapiController {
  constructor() {
    draw()
  }
  test() {
    console.log("hello from swapicontroller")
    swapiService.test(draw)
  }
}