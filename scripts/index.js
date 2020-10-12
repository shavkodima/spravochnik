import generateCatalog from './generateCatalog.js'
import generateHeader from './generateHeader.js';
import generateSubCatalog from './generateSubCatalog.js';
import generateFooter from './geanerateFooter.js';
import {loadData} from './loadData.js';


generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();
loadData();