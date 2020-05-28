const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({ name: "steve", age: 26 });
  //   }, 1500);
  reject("error  - something went wrong");
});

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
