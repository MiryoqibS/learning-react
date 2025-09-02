import { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 3_599, isRunning: false };
        this.timerId;
    }

    start = () => {
        this.timerId = setInterval(() => {
            const prevSeconds = this.state.seconds;

            this.setState({
                seconds: prevSeconds + 1,
                isRunning: true,
            });
        }, 1000);
    }

    stop = () => {
        const prevSeconds = this.state.seconds;

        this.setState({
            seconds: prevSeconds,
            isRunning: false,
        });
    }

    formatTimer = (totalTime) => {
        const hours = Math.floor(totalTime / 3600);
        const minutes = Math.floor((totalTime % 3600) / 60);
        const seconds = totalTime % 60;

        return [
            hours.toString().padStart(2, "0"),
            minutes.toString().padStart(2, "0"),
            seconds.toString().padStart(2, "0"),
        ].join(":")
    };

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div className="timer">
                <div className="timer__display">
                    <p className="timer__time">{this.formatTimer(this.state.seconds)}</p>
                </div>
                <div className="timer__actions">
                    <button className="timer__button" onClick={this.start}>start</button>
                    <button className="timer__button" onClick={this.stop}>stop</button>
                </div>
            </div>
        )
    }
}

export default Timer;