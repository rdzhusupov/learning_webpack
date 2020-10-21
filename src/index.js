import Person from './person.js';
import './styles/style.css';
import './styles/style.less';
import './styles/style.scss';
import webpack from './images/webpack.png';


const Elena = new Person('Elena', 30, 'Russia');

console.log(Elena);

document.querySelector('.img img').src = webpack;