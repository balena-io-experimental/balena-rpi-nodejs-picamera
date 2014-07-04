var users = {};
if(process.env.TTYUSER && process.env.TTYPASSWORD) {
	users[process.env.TTYUSER] = process.env.TTYPASSWORD;
}
require('tty.js').createServer({
	shell: 'bash',
	users: users,
	port: process.env.TTYPORT || process.env.PORT
}).listen();