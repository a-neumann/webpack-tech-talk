import { Greeter, StarwarsGreeter } from "./myModule";
import "./style.css";

const greeter = new Greeter();
greeter.greet("CHECK24");

const swGreeter = new StarwarsGreeter();
swGreeter.greet("CHECK24");