import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal"
import scroll from "./modules/scroll"
import assay from "./modules/assay"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"

timer('22 april 2022 15:50:00:000')
menu()
modal()
scroll()
assay()
tabs()
slider(['.portfolio-content', '.portfolio-item', '.dot'])
calc()