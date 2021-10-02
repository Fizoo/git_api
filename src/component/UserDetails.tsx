import React, {useEffect, useState} from 'react';
import axios from "axios";
import {SearchUserType} from "./UserList";
import {UserTimer} from "./UserTimer";

interface PropsType {
    user:SearchUserType|null
}

const UserDetails:React.FC<PropsType> = ({user}) => {
    const startTimer = 10
    const [userDetails,setUserDetail]=useState<UserType|null>(null)
    const [seconds,setSeconds]=useState<number>(startTimer)

    useEffect(() => {
        console.log('re')
        if (!!user) {
            axios.get<UserType>(`https://api.github.com/users/${user.login}`)
                .then(res => {
                    setSeconds(startTimer)
                    setUserDetail(res.data)
                })
        }
    }, [user]);

    useEffect(() => {
        if(seconds<1){
            setUserDetail(null)
        }
    }, [seconds]);

    return (
        <div>
            {userDetails && <div>
                <UserTimer seconds={seconds} onChange={setSeconds}
                timerKey={userDetails.id.toString()}/>
                <h2>{userDetails?.login}</h2>
                <img src={userDetails.avatar_url} alt="picture"/>
                <br/>
                { userDetails.login }, followers: {userDetails.followers}
            </div>}
        </div>
    );
}

export default UserDetails;

export type UserType={
    login:string
    id:number
    avatar_url:string
    followers:number
}
