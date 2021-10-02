import React, {useEffect, useState} from 'react';
import s from './git.module.css'
import Search from "./Search";
import UserDetails from './UserDetails';
import UserList, {SearchUserType} from "./UserList";


export const Github: React.FC = () => {
    const initialState = 'it-kamasutra';
    const [searchTerm, setSearchTerm] = useState(initialState)
    const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)


    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser]);
    return (
        <div className={s.container}>
            <div>
                <Search
                    value={initialState}
                    onSubmit={(value: string) => {
                        setSearchTerm(value)
                    }}/>
                <button onClick={()=>{setSearchTerm(initialState)}}>reset</button>
                <UserList term={searchTerm}
                          selectedUser={selectedUser}
                          onUserSelect={setSelectedUser}/>
            </div>
            <UserDetails user={selectedUser}/>
        </div>
    );
};

export default Github;
