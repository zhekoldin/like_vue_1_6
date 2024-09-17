import React from 'react'
import styles from './CourseItem.module.css'
import type { ICourse } from '../types'


function getCounterText (count: number): string {
    return `${count} Отзывов`
}

function getCourse(course: ICourse, onOpenCourse: (course: ICourse) => void) {
    return course.is_active 
        ? (
            <div onClick={() => onOpenCourse(course)} id={course.id} className={styles.course}>
                <h3 className={styles.course__title}>{course.title}</h3>
                <p className={styles.course__description}>{course.description}</p>
                <p className={styles.course__counter}>{getCounterText(course.counter)}</p>
            </div>
        )
        : (
            <div className={styles.course + ' ' + styles.course_disable}>
                <h3 className={styles.course__error}>Курс недоступен</h3>
            </div>
        )
}

function CourseItem ({course, onOpenCourse}) {
    return (getCourse(course, onOpenCourse))
}

export default CourseItem