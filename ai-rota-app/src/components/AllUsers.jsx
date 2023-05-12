import React from "react";
import superagent from "superagent";

function AllUsers() {

        const allUsersRoute = '/all-users'

        const allUsers = async () => {
            try{
                await superagent('http://localhost:8000' + allUsersRoute);
            }catch(error) {
                console.log(error);
            }
        }

    return (
        <div className="display-all-users-container">
            <p>all users</p>
            <p>{allUsers}</p>
        </div>
    )
}

export default AllUsers;