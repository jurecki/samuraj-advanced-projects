import { message, messageDOM } from './tools/message';
import info from './data/title.txt';
import './components/footer.js'
import './sass/index.scss'
import addImage from './tools/image';
import Creator from './tools/creator';

message(info);
messageDOM(info);
addImage('h1');


const e1 = new Creator();
e1.addBgc('red');
const e2 = new Creator();
e2.addBgc('blue');
const e3 = new Creator();
e3.addBgc();
e3.showColor();