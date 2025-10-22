import React, { useDeferredValue, useEffect, useState } from "react";
import { SearchList } from "./components/SearchList";

export const App = () => {
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);

  useEffect(() => {
    console.log("Изменения в query", query);
  }, [query]);

  useEffect(() => {
    console.log("Изменения в deferredQuery", deferredQuery);
  }, [deferredQuery]);

  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="w-full max-w-[500px] mt-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск..."
          className="border-2 border-blue-600 rounded px-4 py-1 outline-none font-semibold text-gray-900 w-full"
        />
        <SearchList query={deferredQuery} />
      </div>
    </div>
  )
};
