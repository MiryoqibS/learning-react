"use client";

const Button = () => {
    console.log("Рендер клиентского компонента");

    return (
        <button
            className="bg-orange-500 px-4 py-1 rounded w-fit transition-colors cursor-pointer hover:bg-orange-600"
            onClick={() => alert("нажми меня")}
        >Нажми меня</button>
    );
}

export default Button;