exports.buildFilter = function(field, value) {
    return "{\"" + field + "\": " + value + "}";
}

exports.buildResponse = function(err) {
    var response = "";
    if(!err) {
        response = JSON.stringify({"status":"ok"});
    }
    else {
        response = err;
    }
    return response;
}