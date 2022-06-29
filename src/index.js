import timer from './modules/timer';
import menu from './modules/menu';
import modal from "./modules/modal";
import calculator from './modules/calculator';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('28 june 2022');
menu();
modal();
calculator();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots');