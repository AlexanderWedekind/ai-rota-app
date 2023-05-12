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
        res.send(allUsers);
    }catch(error) {
        console.log(error);
    }
};

export default { displayAllUsers, displayOneUser };