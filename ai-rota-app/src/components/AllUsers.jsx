import React, { useEffect, useState } from "react";
import superagent from "superagent";

function AllUsers() {

        const allUsersRoute = '/pb/all-users'

        // const allUsers = async () => {
        //     try{
        //         await superagent('http://localhost:8000' + allUsersRoute);
        //     }catch(error) {
        //         console.log(error);
        //     }
        // };

        const [thisContent, setThisContent] = useState('');

        
        const testfunction = async () => {
            let count = 10000000;
            while(count > 0) {
                count = count - 1;
            }
            console.log('function was called');
            return('function was called');
                       
        };

        useEffect(() => {  
            async function doThis() {        
                const thisConst =  await testfunction();
                setThisContent(thisConst);
            }
            doThis();      
    }, []);


    return (
        <div className="display-all-users-container">
            <p>all users</p>
            <p>{thisContent}</p>
        </div>
    )
}

export default AllUsers;