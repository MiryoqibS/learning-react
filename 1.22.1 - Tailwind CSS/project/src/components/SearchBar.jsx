import React from "react";
import { Input } from "./UI/Input";
import { SearchIcon } from "lucide-react";

export const SearchBar = ({ inputProps }) => {
    return (
        <div className="flex items-center justify-between w-1/4 mx-auto px-4 rounded bg-gray-900 text-white">
            <Input {...inputProps} />
            <SearchIcon size={16} />
        </div>
    );
};
