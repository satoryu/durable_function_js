const uuid = require('uuid/v1');

module.exports = function (context, req) {
    let id = uuid();

    context.bindings.starter = [{
        FunctionName: 'DurableSample',
        InstanceId: id
    }];

    context.done(null, id);
};