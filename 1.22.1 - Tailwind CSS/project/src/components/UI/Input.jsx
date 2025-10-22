import React from "react"

export const Input = (props) => {
    return (
        <input
            {...props}
            className="py-2 outline-none text-white placeholder:text-white font-medium"
        />
    );
};
