import * as http from 'http';
import * as url from 'url';
import { readFile, writeFile, access } from 'fs/promises';

const JSONfile = 'users.json';
let users = {};
const headerFields = { 'Content-Type': 'text/html' };

async function reload(filename) {
    try {
      const data = await readFile(filename, 'utf-8')
      users = JSON.parse(data)
    } catch (err) {
      users = {};
    }
  }
  
  async function saveCounters() {
    try {
      const data = JSON.stringify(users);
      await writeFile(JSONfile, data, { encoding: 'utf8' });
    } catch (err) {
      console.log(err);
    }
  }  

async function getExercises(response, exercies_tags){
    const data = await readFile('exercises.json')
    const names = 
    exercises = JSON.parse(data)
    let i;
    for(i = 0; i < exercises.length; i++){
        exercise = exercises[i]
    }
    
}

async function recordWorkout(response, name){
  const data = await readFile('users.json')
  users = JSON.parse(data)
}

async function getLeaderboard(response, tags){
  const data = await readFile('exercises.json')
  users = JSON.parse(data)
  for(i = 0; i < users.length; i++){
    if(users)
  }
}

//Add calls to your method in this function
 async function basicServer(request, response) {
    const parsedURL = url.parse(request.url, true);
    const options = parsedURL.query;
    const pathname = parsedURL.pathname;
    const method = request.method;
  
    if (method === 'GET'){
        if(pathname.startsWith('exercises')){
            getExercises(response, options);
        }
        if(pathname.startsWith('leaderboard')) {
          getLeaderboard(response, options);
        }
    }
    else if( method === 'POST'){
        if(pathname.startsWith('record')) {
          recordWorkout(response, options.name);
        }
    }
    else{
        response.writeHead(404, headerFields);
        response.write(JSON.stringify({ error: 'Invalid Request' }));
        response.end();
    }
  }
  


reload(JSONfile)
http.createServer(basicServer).listen(3000, () => {
  console.log('Server started on port 3000');
});