import React, { useState } from 'react'
import styles from '../CourseList/CourseList.module.css'

import CourseItem from '../CourseItem/CourseItem.tsx'
import EditCourseModal from '../EditCourseModal/EditCourseModal.tsx'
import { ICourse } from '../types'

interface IProps {
    courseList: ICourse[],
    onChangeList: (courseList: ICourse[]) => void
}

function CourseList({courseList, onChangeList}: IProps) {
    const [editingCourse, setEditingCourse] = useState<null | ICourse>(null)

    function onOpenCourse(course: ICourse) {
        setEditingCourse(course);
    }

    function onCloseEditModal() {
        setEditingCourse(null)
    }

    function onChangeCourse(course: ICourse) {
        console.log(course)
        const courseIndex = courseList.findIndex(item => item.id === course.id)

        let resultList = [...courseList];
        resultList.splice(courseIndex, 1, course)

        onChangeList(resultList)
    }

    function getCourseComponent(course: ICourse): React.ReactElement {
        return (
            <CourseItem key={course.id} course={course} onOpenCourse={onOpenCourse} />
        )
    }

    return (
        <div className={styles.courseList}>
            {courseList.map(item => getCourseComponent(item))}
            <EditCourseModal 
                course={editingCourse}
                onCloseEditModal={onCloseEditModal}
                onSubmit={onChangeCourse}
             />
        </div>
    )
}

export default CourseList