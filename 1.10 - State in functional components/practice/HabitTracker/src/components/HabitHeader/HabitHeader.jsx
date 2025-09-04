import { HabitAddButton } from "./HabitAddButton";
import { HabitInput } from "./HabitInput";
import styles from "./HabitHeader.module.scss";

export function HabitHeader({ newHabitTitle, setNewHabitTitle, addHabit }) {
    return (
        <header className={styles.header}>
            <HabitInput setNewHabitTitle={setNewHabitTitle} newHabitTitle={newHabitTitle} />
            <HabitAddButton newHabitTitle={newHabitTitle} addHabit={addHabit} />
        </header>
    )
};