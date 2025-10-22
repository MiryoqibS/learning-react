import React, { memo } from "react"
import { SearchItem } from "./SearchItem";

export const SearchList = memo(({ query }) => {
    console.log("Рендер SearchList");

    let items = [];

    for (let i = 0; i < 50; i++) {
        items.push(<SearchItem key={i} query={query} />);
    };

    return (
        <div className="flex flex-col gap-2 py-2">
            {items}
        </div>
    )
})
