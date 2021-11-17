import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {DinoIpsum, randomDinoParagraph, randomDinoWord} from './dinoApi.js';
import {DinoPic} from './dinoPic.js';


$('#dinoText').click(function() {
  
  let promise = DinoIpsum.getDinoText(randomDinoParagraph(), randomDinoWord());
  promise.then(function(response) {
    const result = JSON.parse(response);
    displayDino(result);
  }, function() {
    $('.showErrors').text(`Let's try that again, there was an error upon loading your story.`);
  });
  let promise2 = DinoPic.getDinoPic();
  promise2.then(function(response2) {
    const result2 = JSON.parse(response2);
    displayPic(result2.hits[0].webformatURL);
  }, function() {
    $(".showErrors").text(`Let's try that again, there was an error upon loading your pic.`);
  });


});

function displayDino(result) {
  let paragraph = "";
  result.forEach(function(element) {
    paragraph += "<p>";
    for (let i = 0; i < element.length; i++) {
      paragraph = paragraph + element[i] + " ";
    }
    paragraph += "</p>";
  });
  $("#dinoOutput").text("");
  $("#dinoOutput").append(paragraph);
  $("#dinoOutput").fadeIn(2000);
}

function displayPic(result2) {
  $("#dinoPicOutput").append(`<img src="${result2}">`);
}