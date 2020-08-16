import {
    dataSource
} from '../data/data-global.js';
import {
    dataCountry
} from '../data/data-country.js';
import {
    scrollPage
} from '../controller/scroll.js'

const main = () => {
    dataSource();
    dataCountry();
    scrollPage();
}

export default main;