import React from 'react'
import styles from '../CourseList/CourseList.module.css'

import CourseItem from '../CourseItem/CourseItem.tsx'

function CourseList ({courseList, onEditCourse}) {
    return (
        <div className={styles.courseList}>
            {courseList.map(item => (<CourseItem key={item.id} course={item} onEditCourse={onEditCourse} />))}
        </div>
    )
}

export default CourseList