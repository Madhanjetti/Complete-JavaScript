//callback hell

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => {
  fetchData(() => {
    fetchData(() => {
      console.log("Callback Hell!");
    });
  });
});


//async await

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve();
    }, 1000);
  });
}

async function fetchAllData() {
  await fetchData();
  await fetchData();
  await fetchData();
  console.log("Async/Await!");
}

fetchAllData();



//promise 

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched");
      resolve();
    }, 1000);
  });
}

fetchData()
  .then(() => fetchData())
  .then(() => fetchData())
  .then(() => {
    console.log("Promise Chain!");
  });