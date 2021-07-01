import React from 'react';
import styles from "../../styles/common/Svg.module.scss"
export default function BurgerSVG (): JSX.Element{
    return(
        <svg className={styles.burger} fill="#3a3a3a" viewBox="0 0 100 50">
            <rect width="90" height="3" rx="8"></rect>
            <rect y="30" width="90" height="3" rx="8"></rect>
            <rect y="60" width="90" height="3" rx="8"></rect>
        </svg>
    )
}