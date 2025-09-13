export const formatDate = (date) => {
    return Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
};