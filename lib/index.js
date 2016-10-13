
inquirer = require('inquirer');

function prompt(questions) {
    if (Array.isArray(questions)) {
        return inquirer.prompt(questions);
    }
    else
        return prompt([questions]);
}

function question(q) {
    var clone = Object.assign({}, q);
    clone.name = "result";
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

exports.prompt = prompt;
exports.question = question;
exports.input = input;
exports.confirm = confirm;
exports.list = list;
exports.rawlist = rawlist;
exports.expand = expand;
exports.checkbox = checkbox;
exports.password = password;
exports.Separator = inquirer.Separator;
