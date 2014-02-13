(function(window, undefined){

    function Service (iUrl){

        var url = iUrl;

        this.getUrl = function () {
            return url;
        };

        this.setUrl = function (iUrl) {
            url = iUrl;
        };

        this.request = function (config){
            var method = config.method || "get";
            var path = config.path || "";
            var body = config.body;
            var success = config.success || function(){};
            var error = config.error || function(){};

            var request = {
                type: method,
                url: url+path,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function(results){
                    success(results);
                },
                error: function(xhr){
                    error(xhr);
                }
            };

            if(body){
                request.data = JSON.stringify(body);
            }

            $.ajax(request);

        };
    }

    // Register the Service Constructor Globally
    window.Service = Service;
})(window);