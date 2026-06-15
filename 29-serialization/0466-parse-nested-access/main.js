const json = '{"user":{"name":"alice","roles":["admin","user"]}}';

const data = JSON.parse(json);

console.log(`${data.user.name} ${data.user.roles[0]}`);
