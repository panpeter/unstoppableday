import React from 'react';
import styles from "./Day.module.css";
import {isToday, isTomorrow, isYesterday, parseISO} from 'date-fns'

export interface DayProps {
    date: string;
}

export function DayTitle({date}: DayProps) {
    const parsedDate = parseISO(date)
    let dateText: string
    if (isToday(parsedDate)) {
        dateText = 'Today'
    } else if (isYesterday(parsedDate)) {
        dateText = 'Yesterday'
    } else if (isTomorrow(parsedDate)) {
        dateText = 'Tomorrow'
    } else {
        dateText = date
    }

    return (
        <h3 className={styles.dayTitle}>{dateText}</h3>
    );
}
