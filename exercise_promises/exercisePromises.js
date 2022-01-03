// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?




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