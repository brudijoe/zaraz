import axios from "axios";
import { useEffect, useState } from "react";
import {SETTINGS} from "../settings/settings";

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