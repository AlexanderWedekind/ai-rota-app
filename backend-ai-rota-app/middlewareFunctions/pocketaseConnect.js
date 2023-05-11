import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090/api/');

exports.displayOneUser = await pb.collection('users').getFirstListItem('id="85930xizlnbnk6h"');

exports.displayAllUsers =  await pb.collection('users')getList(1,50, {
    sort: '-created'
});