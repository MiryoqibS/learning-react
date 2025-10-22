import React, { useRef } from "react"
import { Modal } from "./components/Modal";

export const App = () => {
  const modalRef = useRef(null);
  return (
    <div className="container mx-auto flex flex-col items-center gap-8">
      <Modal ref={modalRef} />
      <div className="flex items-center gap-4">
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold cursor-pointer transition-colors hover:bg-blue-800"
          onClick={() => modalRef.current.open()}
        >Открыть</button>
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold cursor-pointer transition-colors hover:bg-blue-800"
          onClick={() => modalRef.current.close()}
        >Закрыт</button>
      </div>
    </div>
  )
}
