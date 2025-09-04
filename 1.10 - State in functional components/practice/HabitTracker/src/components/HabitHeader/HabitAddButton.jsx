import { PlusIcon } from "lucide-react";
import styles from "./HabitHeader.module.scss";
import { v4 as uuidv4 } from "uuid";

export function HabitAddButton({ newHabitTitle, addHabit }) {
    const handleClick = () => {
        if (newHabitTitle.trim().length < 10) return;

        const newHabit = {
            id: uuidv4(),
            title: newHabitTitle,
            createdAt: new Date(),
            isCompleted: false,
        };

        addHabit(newHabit);
    };

    return (
        <button onClick={handleClick} className={["button", styles.button].join(" ")}>
            <PlusIcon size={16} />
        </button >
    )
}