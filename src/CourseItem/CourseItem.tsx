import React from 'react'
import styles from './CourseItem.module.css'

function getCounterText (count: number): string {
    return `${count} Отзывов`
}

function getCourse(course) {
    return course.is_active 
        ? (
            <div className={styles.course}>
                <h3 className={styles.course__title}>{course.title}</h3>
                <p className={styles.course__description}>{course.description}</p>
                <p className={styles.course__counter}>{getCounterText(course.counter)}</p>
            </div>
        )
        : (
            <div className={styles.course}>
                <h3 className={styles.course__error}>Курс недоступен</h3>
            </div>
        )
}

function CourseItem ({course}) {
    return (getCourse(course))
}

export default CourseItem