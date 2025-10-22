import React from "react"
import { Input } from "./Input"
import { ErrorText } from "./ErrorText"

export const Field = ({ label, error, inputProps }) => {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p className="text-xl">{label}</p>

            <Input attributes={inputProps} additionalClasses={error ? ["border-red-500"] : [""]} />

            {error && (<ErrorText>{error}</ErrorText>)}
        </div>
    )
}
