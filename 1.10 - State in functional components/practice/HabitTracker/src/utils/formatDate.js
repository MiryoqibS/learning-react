export const formatDate = (date) => {
    const formatted = new Intl.DateTimeFormat("ru-RU", {
        dateStyle: "medium",
    }).format(date);
    return formatted;
};