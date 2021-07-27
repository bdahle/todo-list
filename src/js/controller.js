import "../css/reset.css";
import "../css/style.scss";
import { setUpPage } from "./view/todos";
import { projectList, addProject, addTodo } from "./model";

addProject("Personlig");
addProject("Jobb");
addProject("Delt");
let currentProject = projectList[0];

function setCurrentProject(projectName) {
  currentProject = projectName;
}

setUpPage();
addTodo(projectList[0], "Vann plantene", "2021-07-13");
addTodo(projectList[0], "Ta ut søppelet", "2021-07-13");
addTodo(projectList[0], "Luft hunden", "2021-07-13");
addTodo(projectList[1], "Før timer", "2021-07-13");
addTodo(projectList[1], "Skriv rapport", "2021-07-13");
addTodo(projectList[2], "Kjøp melk", "2021-07-13");

export { currentProject, setCurrentProject };
