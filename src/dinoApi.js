export class DinoIpsum {
  static getDinoText(paragraphs, words) {
    return new Promise(function(resolve,reject) { 
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

export function randomDinoParagraph() {
  return Math.floor(Math.random()* 2 + 1);
}
export function randomDinoWord() {
  return Math.floor(Math.random()* 19 + 7);
}