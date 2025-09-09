export const validators = {
    username(value) {
        if (!value.trim()) return "Имя обязательно";
        if (value.trim().length < 4) return "Имя пользователя должна содержать минимум 4 символов";
        return "";
    },
    email(value) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) return "Некорректный email";
        return "";
    },
    password(value) {
        if (value.trim().length < 6) return "Длина пароля должна содержать минимум 6 символов";
        return "";
    },
    repeatPassword(password, value) {
        if (value !== password) return "Пароли не совпадают";
        return "";
    },
    graduationYear(value) {
        if (Number(value) < 2028) return "Учебное заведение начинает работу только в 2028 году"
        return "";
    }
};