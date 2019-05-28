import { Triangle } from './triangle-logic.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#userinput').submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($('#side1').val());
    console.log(side1);
    var side2 = parseInt($('#side2').val());
    var side3 = parseInt($('#side3').val());

    var triangle = new Triangle(side1, side2, side3);


    $('#triangleoutput').append("<p>" + triangle.checkType() + "</p>");
  });

});
