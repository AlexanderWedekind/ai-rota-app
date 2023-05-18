import React, { useEffect, useState } from "react";
import superagent from "superagent";

function AllUsers() {

    const [thisContent, setThisContent] = useState('');

    const allUsersRoute = '/pb/all-users'

    async function allUsers(route) {
        console.log("getting users from pb");
        try{
          const serverResponse = await superagent.get('http://localhost:8000' + route);
          console.log(serverResponse);
          //const responseJson = serverResponse.text;
          //const responseObject = await JSON.parse(responseJson);

          // console.log(responseObject);
          // return responseObject;
        }catch(error) {
          console.log(error.message);
        }
      };
    // const testfunction = async () => {
    //     let count = 10000000;
    //     while(count > 0) {
    //         count = count - 1;
    //     }
    //     console.log('function was called');
    //     return('function was called');
                    
    // };

    useEffect(() => {  
        async function doThis() {        
            const thisConst =  await allUsers(allUsersRoute);
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