
inquirer = require('inquirer');

function question(q) {
    var clone = Object.assign({}, q, {name: 'result'});
    return prompt(clone).then(function (r) { return r.result; });
}

function input(message, options) {
    options = Object.assign({}, options || {}, {type: 'input', message: message});
    return question(options);
}

function confirm(message, options) {
    options = Object.assign({}, options || {}, {type: 'confirm', message: message});
    return question(options);
}

function list(message, options) {
    options = Object.assign({}, options || {}, {type: 'list', message: message});
    return question(options);
}

function rawlist(message, options) {
    options = Object.assign({}, options || {}, {type: 'rawlist', message: message});
    return question(options);
}

function expand(message, options) {
    options = Object.assign({}, options || {}, {type: 'expand', message: message});
    return question(options);
}

function checkbox(message, options) {
    options = Object.assign({}, options || {}, {type: 'checkbox', message: message});
    return question(options);
}

function password(message, options) {
    options = Object.assign({}, options || {}, {type: 'password', message: message});
    return question(options);
}

module.exports = Object.assign({}, inquirer);

module.exports.prompt = prompt;
module.exports.question = question;
module.exports.input = input;
module.exports.confirm = confirm;
module.exports.list = list;
module.exports.rawlist = rawlist;
module.exports.expand = expand;
module.exports.checkbox = checkbox;
module.exports.password = password;
