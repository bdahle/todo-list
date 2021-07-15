import "../css/reset.css";
import "../css/style.scss";
import { setUpPage } from "./view/todos";
import { addProject, addTodo } from "./model";

let currentProject = "Personlig";
addProject(currentProject);

setUpPage();
addTodo("Personlig", "Vann plantene", "2021-07-13");
addTodo("Personlig", "Ta ut søppelet", "2021-07-13");
addTodo("Personlig", "Luft hunden", "2021-07-13");
addTodo("Jobb", "Før timer", "2021-07-13");

export { currentProject };
