const uuid = require('uuid/v1');

module.exports = function (context, req) {
    const parameters = context.bindings.parameters.trim().split("\n");
    const instanceId = uuid();

    context.bindings.starter = [
        {
            FunctionName: 'CallAPIOrchestrator',
            InstanceId: instanceId,
            Input: {
                parameters: parameters
            }
        }
    ];

    context.res = { body: { id: instanceId } }

    context.done();
};