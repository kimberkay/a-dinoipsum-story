export class DinoPic {
  static getDinoPic() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://pixabay.com/api/?key=${process.env.API_KEY}&q=dinosaur`;
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