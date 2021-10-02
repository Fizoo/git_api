import React, {useEffect, useState} from 'react';
import {SearchUserType} from "./UserList";
import {UserType} from "./UserDetails";
import {cleanup} from "@testing-library/react";

interface PropsType {
    seconds:number
    onChange:(actualSeconds:number)=>void
    timerKey:string
}

export const UserTimer: React.FC<PropsType> = ({onChange,seconds,timerKey}) => {
    const [timer,setTimer]=useState<number>(seconds)

    useEffect(() => {
        setTimer(seconds)
    },[seconds])

    useEffect(() => {
        onChange(timer)
    },[timer])

    useEffect(() => {
           const intervalId= setInterval(() => {
                setTimer(a => a - 1)
            }, 1000)
        return ()=>{clearInterval(intervalId)}
    }, [timerKey]);

    return (
        <div>
            <p>{timer}</p>
        </div>
    );
};


