import styles from "./UserCard.module.scss";

export function UserCard({ user }) {
    const { name, age, city } = user;

    return (
        <li className={styles.user}>
            <h3 className={styles.user__name}>{name}</h3>
            <p className={styles.user__age}>{age}</p>
            <p className={styles.user__city}>{city}</p>
        </li>
    )
}