import "../css/reset.css";
import "../css/styles.css";
import { setUpPage } from "./view";
import { addTodo } from "./model";

let currentProject = "Personlig";

setUpPage();
addTodo("Personlig", "Vann plantene", "2021-07-13");
addTodo("Personlig", "Ta ut søppelet", "2021-07-13");
addTodo("Personlig", "Luft hunden", "2021-07-13");
addTodo("Jobb", "Før timer", "2021-07-13");

export { currentProject };
