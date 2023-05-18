//import nodeFetch from 'node-fetch';
//const fetch = nodeFetch;
//import fetch from 'cross-fetch';
//import eventsource from 'eventsource';
//global.eventsource = eventsource;
import pocketbase from 'pocketbase';
const pb = new pocketbase('http://127.0.0.1:8090/api/');

const displayOneUser = async (req, res) => {
    try{
        const oneUser = await pb.collection('users').getFirstListItem('id="85930xizlnbnk6h"');
        res.send(oneUser);
    }catch(error) {
        console.log(error)
    }
};

const displayAllUsers = async (req, res) => {
    try{
        const allUsers = await pb.collection('users').getList(1, 50, {
                sort: '-created'
            });
        console.log(allUsers);
        res.send(allUsers);
    }catch(error) {
        console.log(error);
    }
};

// const displayAllUsers = async (req, res) => {
//     const response = 'request received on the server';
//     console.log(response + ', sending response...');
//     res.send(response);
// };

export default { displayAllUsers, displayOneUser };