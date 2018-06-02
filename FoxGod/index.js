var df = require('durable-functions');

module.exports = df(function*(context) {
    context.log("Starting chain sample");
    const babymetal = [];

    babymetal.push(yield context.df.callActivityAsync("Summon", "Su-METAL"));
    babymetal.push(yield context.df.callActivityAsync("Summon", "YUIMETAL"));
    babymetal.push(yield context.df.callActivityAsync("Summon", "MOAMETAL"));

    context.log(`${babymetal.join(' ')} We are BABYMETAL DEATH!`);

    return output;
});