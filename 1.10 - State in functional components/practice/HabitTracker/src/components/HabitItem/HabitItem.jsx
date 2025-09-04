import { CircleCheckBigIcon, TrashIcon } from "lucide-react";
import { formatDate } from "../../utils/formatDate";
import styles from "./HabitItem.module.scss";

export function HabitItem({ habit, deleteHabit, markHabit }) {
    const { title, createdAt, isCompleted, id } = habit;
    return (
        <div className={[isCompleted ? "completed" : "", styles.item].join(" ")}>
            <p className={styles.itemTitle}>{title}</p>
            <div className={styles.itemActions}>
                <div className={styles.itemInfo}>
                    {isCompleted && <p className={["success", styles.itemCompleted].join(" ")}>выполнено</p>}
                    {!isCompleted && <p className={styles.itemCompleted}>не выполнено</p>}
                    <p>{formatDate(new Date(createdAt))}</p>
                </div>
                <div className={styles.itemButtons}>
                    <button onClick={() => deleteHabit(id)} className={["button", styles.itemButton].join(" ")}>
                        <TrashIcon size={16} />
                    </button>
                    <button onClick={() => markHabit(id)} className={["button", styles.itemButton].join(" ")}>
                        <CircleCheckBigIcon size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}