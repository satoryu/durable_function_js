const df = require('durable-functions');
const moment = require('moment');

module.exports = df(function*(context) {
    const input = context.df.getInput();
    const parameters = input.parameters;

    const outputs = [];
    try {
        for (let i = 0; i < parameters.length; i++) {
            context.log(`Parameters[${i}] = ${parameters[i]}`)
            outputs.push(
                yield context.df.callActivityAsync('CallAPIActivity', JSON.stringify({parameter: parameters[i]}))
            )

            context.log('Wait a minute...');
            let nextTick = moment.utc(context.df.currentUtcDateTime).add(1, 'minute');
            yield context.df.createTimer(nextTick.toDate());
        }

        return outputs;
    } catch(error) {
        context.log.error(error);
        throw error;
    }
});