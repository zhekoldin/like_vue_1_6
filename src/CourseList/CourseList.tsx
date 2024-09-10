import React from 'react'
import styles from '../CourseList/CourseList.module.css'

import CourseItem from '../CourseItem/CourseItem.tsx'

function CourseList ({list = []}) {
    return (
        <div className={styles.courseList}>
            {list.map(item => (<CourseItem course={item} />))}
        </div>
    )
}

export default CourseList