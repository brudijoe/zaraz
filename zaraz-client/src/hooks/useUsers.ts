import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {SETTINGS} from "../settings/settings";

export const UserContext = createContext(null);

export default function useUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    async function getUsers() {
        const {data} = await axios.get(
            `${SETTINGS.HOST}/zaraz/users`
        );
        setUsers(data);
    }
    
    return {
        users
    }

}