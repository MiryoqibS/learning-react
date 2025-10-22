import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const Modal = forwardRef((props, ref) => {
    const modalRef = useRef(null);

    useImperativeHandle(ref, () => ({
        open() {
            modalRef.current.classList.remove("opacity-0");
            modalRef.current.classList.add("opacity-100");
        },
        close() {
            modalRef.current.classList.remove("opacity-100");
            modalRef.current.classList.add("opacity-0");
        },
    }));

    return (
        <div
            ref={modalRef}
            className="bg-white border-2 border-gray-300 shadow-lg rounded-xl flex items-center justify-center px-4 py-4 w-[300px] mx-auto mt-6 opacity-0 transition-opacity duration-300"
        >
            <h3 className="text-xl font-semibold">Модальное окно</h3>
        </div>
    );
});
