const {v4}= require('uuid');
const {post, put, del}= require('../db/crud');

const addController=(data)=>{
    post({
        id: v4(),
        title: data.title,
        description: data.description,
        image: data.image
    }, './db/db.json')
}

const putController=(data)=>{
    const {id, title, description, image} = data;
    if(!id, !title, !description, !image) throw new Error('All fields are required');
    put({
        id,
        title,
        description,
        image
    },'./db/db.json')
}

const deleteController=(data)=>{
    const {id}= data;
    if(!id) throw new Error('ID is required');
    del(id, './db/db.json')
}
const controllers={
    add:addController,
    put:putController,
    delete:deleteController
}

module.exports = controllers;