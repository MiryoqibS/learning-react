import React, { useRef } from "react"
import { useTooltipPosition } from "../hooks/useTooltipPosition";

export const Tooltip = ({ targetRef, children, show }) => {
    const tooltipRef = useRef(null);
    const { top, left, placement } = useTooltipPosition(targetRef, tooltipRef);

    return (
        <div
            ref={tooltipRef}
            className={`absolute bg-gray-900 rounded text-white flex items-center justify-center px-4 py-2 shadow-lg
            transition-opacity duration-500
            ${show ? "opacity-100 visible" : "opacity-0 invisible"}    
            `}
            style={{ top, left, position: "fixed" }}
        >
            {placement === "top" ?
                // Треугольник сверху
                <span className="absolute -top-2 left-1/2 -translate-x-1/2
            w-0 h-0
            border-l-8 border-r-8 border-b-8
            border-l-transparent border-r-transparent border-b-gray-900
            "/>
                :
                // Треугольник снигу
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2
            w-0 h-0
            border-l-8 border-r-8 border-t-8
            border-l-transparent border-r-transparent border-t-gray-900
            "/>
            }

            {children}
        </div>
    )
}
