class base64GoogleFont
{
	constructor(url, ready)
	{
		this.ready = ready || function(){};
		this.results = false;
		var application = this;
		if (this.verifyURL(url) === false) {
			console.info('unrecognized url:', url)
			outputResult('')
			return;
		}
		this.errorHandler = function(e){
			application.results = "impossible-to-load";
			console.info('Error loading font: ', e);
			application.ready(false);
		}
		this.outputResult = function(cssText){
			application.results = cssText;
			application.ready(application.results);
		}
		return this.fetchcss(url)
	      .then(this.embedFonts)
	      .then(this.outputResult)
	      .catch(this.errorHandler);
	}
	fetchcss(url){
		var app = this;
		return fetch(url).then(function (res) {
			return res.text();
		}, app.errorHandler)
	}
	verifyURL(url){
    	return url.indexOf('https://fonts.googleapis.com/') === 0;
  	}
  	embedFonts(cssText){
	  	var fontLocations = cssText.match(/https:\/\/[^)]+/g)
	    var fontLoadedPromises = fontLocations.map(function (location) {
	      return new Promise(function (resolve, reject) {
	        fetch(location).then(function (res) {
	          return res.blob()
	        }).then(function (blob) {
	          var reader = new FileReader()
	          reader.addEventListener('load', function () {
	            // Side Effect
	            cssText = cssText.replace(location, this.result)
	            resolve([location, this.result])
	          })
	          reader.readAsDataURL(blob)
	        }).catch(reject)
	      })
	    })
	    return Promise.all(fontLoadedPromises).then(function () {
	      return cssText
	    })
  	}		
}
