import { useLayoutEffect, useState } from "react";

export const useTooltipPosition = (targetRef, tooltipRef) => {
    const [pos, setPos] = useState({ top: 0, left: 0, placement: "top" });

    useLayoutEffect(() => {
        if (!targetRef || !tooltipRef) return;

        const targetRect = targetRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();

        let top = targetRect.bottom + 10;
        let left = targetRect.left + targetRect.width / 2 - tooltipRect.width / 2;
        let placement = "top";

        // проверка (если не влезает снизу перемещаем наверх)
        if (top + tooltipRect.height > window.innerHeight) {
            top = targetRect.top - tooltipRect.top - 30;
            placement = "bottom";
        };

        // проверка (не вылазает ли за границы)
        if (left < 0) left = 10;
        if (left + tooltipRect.width > window.innerWidth) {
            left = window.innerWidth + tooltipRect.width - 8;
        };

        setPos({ top, left, placement });
    }, [targetRef, tooltipRef]);


    return pos;
};