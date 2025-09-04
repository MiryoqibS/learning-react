import styles from "./HabitList.module.scss";
import { HabitItem } from "../HabitItem/HabitItem";

export function HabitList({ habits, deleteHabit, markHabit }) {
    return (
        <div className={styles.list}>
            {habits.map((habit) => (
                <HabitItem key={habit.id} habit={habit} deleteHabit={deleteHabit} markHabit={markHabit} />
            ))}
        </div>
    )
};