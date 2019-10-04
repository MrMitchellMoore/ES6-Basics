// promises

const prom = new Promise((resolve, reject) => {
  // Here is async
  setInterval(() => {
    resolve({
      user: 'mitch',
      pass: '39ouhejh83'
    });
    reject(new Error('something went wrong'));
  }, 2000);
});

prom
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
