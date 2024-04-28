import React, {useState} from 'react';
import TempInputField from './TempInputField';

const toCelsius = (f) => {
    return (f - 32) * 5 / 9
}

const toFahrenheit = (c) => {
    return (c * 9 / 5) + 32
}

export default function TempConverter() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(32);

    function getValueF(number) {
        setFahrenheit(number);
        setCelsius(toCelsius(number));
    }

    function getValueC(number) {
        setCelsius(number);
        setFahrenheit(toFahrenheit(number));
    }

    return (
        <>
            <TempInputField unit={'C'} func={getValueC} value={celsius} />
            <TempInputField unit={'F'} func={getValueF} value={fahrenheit} />
            <div id="message">{celsius >= 100 ? "Boiling" : "Not boiling..."}</div>
        </>
    )
}