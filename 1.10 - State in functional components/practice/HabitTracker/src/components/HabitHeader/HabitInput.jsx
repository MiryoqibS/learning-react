import styles from "./HabitHeader.module.scss";

export function HabitInput({ newHabitTitle, setNewHabitTitle }) {
    return (
        <input
            type="text"
            className={styles.input}
            placeholder="новая привычка..."
            value={newHabitTitle}
            onInput={e => setNewHabitTitle(e.target.value)}
        />
    )
}