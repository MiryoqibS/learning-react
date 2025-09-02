import { useEffect, useState } from "react"
import styles from "./UserList.module.scss";
import { UserCard } from "../UserCard/UserCard";

export function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("/data/users.json");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error.message);
            };
        };

        fetchUsers();
    }, []);

    return (
        <ul className={styles.list}>
            {users.map((user, index) => (<UserCard key={index} user={user} />))}
        </ul>
    )
}