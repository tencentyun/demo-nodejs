'use strict';

exports.main_handler = (event, context, callback) => {
    console.log("Hello World")
    console.log(event)
    callback(null, event); 
};
