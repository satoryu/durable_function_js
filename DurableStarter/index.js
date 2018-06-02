const uuid = require('uuid/v1');

module.exports = function (context, req) {
    let id = uuid();

    context.bindings.starter = [{
        FunctionName: 'FoxGod',
        InstanceId: id
    }];

    context.res = {
        body: { id: id }
    };

    context.done(null, id);
};