 import 'babel-polyfill';
 import items from './items';
 import $ from 'jquery';

 $('<h1>Items...</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const item of items) {
     $('<li></li>').text(item).appendTo(ul);
 }