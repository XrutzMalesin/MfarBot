const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
const LordLog = (text, color) => {
	return !color ? chalk.red('[ CMD ] ') + chalk.yellow(text) : chalk.red('[ CMD ] ') + chalk.keyword(color)(text)
}
module.exports = {
	color,
	bgcolor,
    LordLog
}
