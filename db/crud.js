const fs = require('fs');
//get, getById, post, put, del
// CRUD operations for a mock database using JSON file
const get = (pathToDb) => {
    const rawData =fs.readFileSync(pathToDb, 'utf-8');
    return JSON.parse(rawData);
}

const getById=(id, pathToDb)=>{
    const data = get(pathToDb);
    return data.find(entry => entry.id === id);
}

const post=(data,pathToDb)=>{
    const db = get(pathToDb);
    db.push(data);
    fs.writeFileSync(pathToDb, JSON.stringify(db, null, 2));
}

const put=(data, pathToDb)=>{
    let db = get(pathToDb)
    const newDb = db.map((entry) =>{
        if(entry.id==data.id){
            return data
        }else{
            return entry
        }
    });
fs.writeFileSync(pathToDb, JSON.stringify(newDb, null, 2));
    
}

const del=(id,pathToDb)=>{
    const db = get(pathToDb);
    const index = db.findIndex(entry => entry.id === id);
    if (index !== -1) {
        db.splice(index, 1);
        fs.writeFileSync(pathToDb, JSON.stringify(db, null, 2));
    }
}

module.exports={
    get,
    getById,
    post,
    put,
    del
}