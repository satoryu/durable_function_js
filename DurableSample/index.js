var df = require('durable-functions');

module.exports = df(function*(context) {
    context.log("Starting chain sample");
    const output = [];

    output.push(yield context.df.callActivityAsync("SayHello", "Su-METAL"));
    output.push(yield context.df.callActivityAsync("SayHello", "YUIMETAL"));
    output.push(yield context.df.callActivityAsync("SayHello", "MOAMETAL"));

    return output;
});