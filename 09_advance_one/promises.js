const promiseOne = new Promise(function(resolve, reject){
  //Do an async Task
  // DB calls, cryptography, network request

  setTimeout(() => {
    console.log('Async Task is complete');
    resolve()
  }, 1000);
})

promiseOne.then(function(){
  console.log("Promise 1 is compeleted");
})

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2");
    resolve()
  }, 1000);
}).then(function(){
  console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve({username: "Ashish", email: "ashish@ashish.com"})
  }, 1000);
})

promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise((resolve, reject)=>{
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({username: "Ranjan", password: "123"})
    } else{
      reject(`Error: Something went wrong`)
    }
  }, 1000);
})

promiseFour.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
  console.log(username);
}).catch((error)=>{
  console.log(error);
}).finally(()=>{
  console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resove, reject){
  setTimeout(function() {
    let error = true;
    if (!error) {
      resolve({username: "aranjan445", password: "13323"})
    } else{
      reject(`Error: JS went wrong`)
    }
  }, 1000)
})

async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive()

async function getAllUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log(`E: ${error}`);
  }
}

getAllUsers()

fetch('https://api.github.com/users/ashish5115').then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log("Getting Error");
})

// promise.all