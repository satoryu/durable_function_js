module.exports = function(context, name) {
    var message = `${name} DEATH!`;
    context.done(null, message);
};