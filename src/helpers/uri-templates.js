exports.getUriTemplate = function (uri) {
    
        var uriSegments = uri.split('/').filter(function(el) { return el.length !== 0 });
    
        var uriTemplate = '';
        for (var i = 0; i < uriSegments.length; i++) {
            if (i % 2 === 0) {
                uriTemplate += uriSegments[i];
            }
            else {
                uriTemplate += '{id}';
            }
    
            if (i != uriSegments.length - 1) {
                uriTemplate += '/';
            }
        }
    
        return uriTemplate;
    }
    