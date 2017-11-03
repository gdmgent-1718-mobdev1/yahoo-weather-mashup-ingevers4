const AJAX = {
    loadJsonByPromise(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('GET', url, true);
            xhr.onload = function() {
                if(xhr.status === 200) {
                    var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
                    resolve(data);
                } else {
                    reject(xhr.status);
                }
            };
            xhr.onerror = function() {
                reject(Error('Network Error!'));
            }
            xhr.send(null);
        });
    },
    loadJsonPByPromise(url) {
        return new Promise(function(resolve, reject) {
            var name = 'jsonp' + new Date().getTime();
            if (url.match(/\?/)) url += '&callback='+name;
            else url += '?callback='+name;
            
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            
            window[name] = function(data){
                document.getElementsByTagName('head')[0].removeChild(script);
                script = null;
                delete window[name];
        
                resolve(data);
            };
        
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
}