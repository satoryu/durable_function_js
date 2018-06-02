var df = require('durable-functions');

module.exports = df(function*(context) {
    context.log("Starting chain sample");
    const output = [];

    output.push(yield context.df.callActivityAsync("Summon", "Su-METAL"));
    output.push(yield context.df.callActivityAsync("Summon", "YUIMETAL"));
    output.push(yield context.df.callActivityAsync("Summon", "MOAMETAL"));

    return output;
});