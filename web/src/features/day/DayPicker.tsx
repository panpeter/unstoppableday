import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {addYears, formatISO, startOfToday} from "date-fns";
import styles from "./Day.module.css"

export function DayPicker() {
    let navigate = useNavigate();
    const [date, setDate] = useState('')
    const onDateChanged = (e: React.FormEvent<HTMLInputElement>) => setDate(e.currentTarget.value)

    const onShowClicked = () => {
        navigate('/' + date)
    }

    const randomDate = (start: Date, end: Date) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }

    const onLuckyDayClicked = () => {
        const today = startOfToday()
        const nextYear = addYears(today, 1)
        let date = randomDate(today, nextYear);
        const dateString = formatISO(date, { representation: 'date' })
        navigate('/' + dateString)
    }

    const canShow = Boolean(date)

    return (
        <form className={styles.dayPicker}>
            <p>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={onDateChanged}
                />
                <button type="button" onClick={onShowClicked} disabled={!canShow}>Show</button>
            </p>
            <a  onClick={onLuckyDayClicked}>or show my lucky day</a>
        </form>
    );
}
