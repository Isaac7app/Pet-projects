// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((reslove,reject)=>{
  setTimeout(reslove,4000,'success')
})

// #2) Run the above promise and make it console.log "success"
promise.then(resul => console.log(resul))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve(resul);



// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
.catch(()=> console.log('Ooopps something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url =>{
  return fetch(url).then(resp => resp.json())
})).then(results =>{
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
})

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/'
]

Promise.all(urls.map(url =>{
  return fetch(url).then(resp => resp.json())
})).then(results =>{
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(()=> console.log('errorrr'))














// Creating my first promise
const promise = new Promise((resolve,reject)=>{
  if(true){
    resolve('stuff worked');
  } else{
    reject('Error,it broke');
  }
})

const promise2 = new Promise((resolve,reject)=>{
  setTimeout(resolve,100,'HIII')
})

const promise3 = new Promise((resolve,reject)=>{
  setTimeout(resolve,1000,'Pookie')
})

const promise4 = new Promise((resolve,reject)=>{
  setTimeout(resolve,5000,'Is it me you are looking for?')
})

Promise.all([promise,promise2,promise3,promise4])
.then(values =>{
  console.log(values);
})

promise
.then(result => result + '!')
.then(result2 => {
  throw Error
  console.log(result2)
})
.catch(()=> console.log('errror!'))


// Real Life usage of promise
const urls =[
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(answers => {
  console.log(answers[0])
  console.log(answers[1])
  console.log(answers[2])
})
