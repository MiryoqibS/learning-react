import Button from "../components/Button";

const AboutPage = () => {
    console.log("Рендер серверного компонента");
    const latestUpdateTime = new Date().toISOString();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">О нашей Компании</h1>
            <p className="mt-4">Эта страница полностью отображается на сервере. Для этого компонента Javascript не отправляется в браузер</p>
            <div className="flex flex-col gap-2 mt-4">
                <p className="font-bold text-xs">Последнее обновление: {latestUpdateTime}</p>
                <Button />
            </div>
        </div>
    );
}

export default AboutPage;