module.exports = function (context, parameter) {
    context.log(`Given parameter: ${parameter}`)

    context.done(`The output of parameter ${parameter}.`);
};