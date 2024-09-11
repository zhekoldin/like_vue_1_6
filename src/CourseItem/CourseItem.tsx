import React, { useEffect, useState } from 'react'
import styles from './CourseItem.module.css'
import EditCourseModal from '../EditCourseModal/EditCourseModal.tsx'

function CourseItem ({course, onEditCourse}) {
    const [isOpen, setIsOpen] = useState(false)

    const [renderedCourse, setRenderedCourse] = useState(course)

    function openCourse() {
        setIsOpen(true)
    }

    function onEditCurrentCourse(course) {
        setRenderedCourse(course)
        onEditCourse()
    }

    function getCounterText (count: number): string {
        return `${count} Отзывов`
    }

    function onCloseEditModal() {
        setIsOpen(false)
    }

    function getCourse(course) {
        return course.is_active 
            ? (
                <div className={styles.course} onClick={openCourse} >
                    <h3 className={styles.course__title}>{renderedCourse.title}</h3>
                    <p className={styles.course__description}>{renderedCourse.description}</p>
                    <p className={styles.course__counter}>{getCounterText(renderedCourse.counter)}</p>
                    <EditCourseModal isOpen={isOpen} onCloseEditModal={onCloseEditModal} onSubmit={onEditCurrentCourse} course={course} />
                </div>
            )
            : (
                <div className={styles.course}>
                    <h3 className={styles.course__error}>Курс недоступен</h3>
                </div>
            )
    }

    return (getCourse(course))
}

export default CourseItem