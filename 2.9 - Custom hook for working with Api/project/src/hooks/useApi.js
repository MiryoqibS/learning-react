import { useCallback, useState } from "react";

export const useApi = (baseUrl) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const get = useCallback(async (endpoint) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${baseUrl}${endpoint}`);
            if (!response.ok) {
                throw new Error(`Ошибка HTTP запроса: ${response.status}`);
            };
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }, [baseUrl]);

    return { data, isLoading, error, get };
};