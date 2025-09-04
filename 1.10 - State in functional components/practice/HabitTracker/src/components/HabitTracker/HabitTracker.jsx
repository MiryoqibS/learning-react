import { HabitList } from "../HabitList/HabitList";
import { storage } from "../../utils/storage";
import { useState } from "react";
import { HabitHeader } from "../HabitHeader/HabitHeader";
import styles from "./HabitTracker.module.scss";

export function HabitTracker() {
    const [habits, setHabits] = useState(() => {
        return storage.get("habits");
    });

    const [newHabitTitle, setNewHabitTitle] = useState("");

    const addHabit = (newHabit) => {
        const values = Object.values(newHabit);
        const isValid = values.find(v => v !== null);
        if (!isValid) return;

        setHabits(prev => {
            const updated = [...prev, newHabit];
            storage.set("habits", updated);
            return updated;
        });
        setNewHabitTitle("");
    };

    const deleteHabit = (id) => {
        setHabits(prev => {
            const updated = prev.filter(h => h.id !== id);
            storage.set("habits", updated);
            return updated;
        });
    };

    const markHabit = (id) => {
        setHabits(prev => {
            const updated = prev.map(h =>
                h.id === id ? { ...h, isCompleted: true } : h
            );
            storage.set("habits", updated);
            return updated;
        })
    };

    return (
        <div className={["container", styles.tracker].join(" ")}>
            <HabitHeader
                newHabitTitle={newHabitTitle}
                setNewHabitTitle={setNewHabitTitle}
                addHabit={addHabit}
            />
            <HabitList
                habits={habits}
                deleteHabit={deleteHabit}
                markHabit={markHabit}
            />
        </div>
    )
};