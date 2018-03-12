const say = require('say');
var config = require('config');
var envConfig = config.get('env.devConfig');
var devContext = envConfig.get('context.customContext');
var shell = require('shelljs');
shell.config.execPath = shell.which('node');

var exec = require('child_process').exec;

function execute(command, callback) {
    exec(command, function(error, stdout, stderr){ callback(stdout); })
}

function openDevEnv() {

    say.speak(devContext.get('launchDevEnvironment.text'));
    var command = devContext.get('launchDevEnvironment.command');

    execute(command, function(output){
        process.stdout.write(output);
    });
}

function buildApp() {
    say.speak(devContext.get('buildApp.text'));
    var command = devContext.get('buildApp.command');

    execute(command, function (output) {
        process.stdout.write(output);
    });
}

function testApp() {
    say.speak(devContext.get('testApp.text'));
    var command = devContext.get('testApp.command');

    execute(command, function (output) {
        process.stdout.write(output);
    });
}

function startApp() {
    say.speak(devContext.get('startApp.text'));
    var command = devContext.get('startApp.command');

    execute(command, function (output) {
        process.stdout.write(output);
    });
}

function stopApp() {
    say.speak(devContext.get('stopApp.text'));
    var command = devContext.get('stopApp.command');

    execute(command, function (output) {
        process.stdout.write(output);
    });
}

document.querySelector('#devEnvBtn').addEventListener('click', openDevEnv);
document.querySelector('#buildBtn').addEventListener('click', buildApp);
document.querySelector('#testBtn').addEventListener('click', testApp);
document.querySelector('#startBtn').addEventListener('click', startApp);
document.querySelector('#stopBtn').addEventListener('click', stopApp);