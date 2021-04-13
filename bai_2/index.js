import Manager from "./manager.js"

const manager = new Manager();
const container = document.getElementById("app");
container.initRender(manager);