'use strict';

exports.main_handler = (event, context, callback) => {
    console.log(event)
    callback(null, "Hello World"); 
};
