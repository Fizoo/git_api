import React, {useEffect, useState} from 'react';
import s from "./git.module.css";
import axios from "axios";


interface PropsType {
    term:string
    selectedUser:SearchUserType|null
    onUserSelect:(user:SearchUserType)=>void

}

const UserList: React.FC<PropsType> = ({term,selectedUser,onUserSelect}) => {
    const [users, setUsers] = useState<SearchUserType[]>([])


    useEffect(() => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${term}`)
            .then(res => {
                setUsers(res.data.items)
            })
    }, [term]);

    return (
        <ul>
            {users.map(e => <li
                key={e.id}
                className={e === selectedUser ? s.selected : ''}
                onClick={() => {
                    onUserSelect(e)
                }}>
                {e.login}
            </li>)}
        </ul>
    );
};

export default UserList;

export type SearchUserType = {
    login: string
    id: number
}
export type SearchResult = {
    items: SearchUserType[]
}
