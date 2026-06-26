fetch("http://localhost:3000/api/inventory").then(r => r.text()).then(console.log).catch(console.error);
