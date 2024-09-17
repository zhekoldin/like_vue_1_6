import React, { useState } from 'react'
import styles from '../EditCourseModal/EditCourseModal.module.css'
import Modal from '../Modal/Modal.tsx'
import { ICourse } from '../types'

interface IProps {
    course: ICourse | null,
    onCloseEditModal: () => void,
    onSubmit: (course: ICourse) => void
}

export default function EditCourseModal({course, onCloseEditModal, onSubmit}: IProps) {
    const [newCourse, setNewCourseData] = useState(course)

    const selectors = {
        name_input_id: 'path_input_name',
        description_input_id: 'path_input_description',
    }

    function submit(e) {
        e.preventDefault();
        
        if (!newCourse) {
            return onCloseEditModal()
        }

        onSubmit(newCourse)
    }

    function closeEditModal(e) {
        e.preventDefault()

        onCloseEditModal()
    }

    function onChangeTitle(e) {
        if (!newCourse) return

        const newTitle = e?.target?.value;

        if (newTitle === course?.title) {
            return
        }

        setNewCourseData(prevState => {
            return {...prevState, title: newTitle}
        })
    }

    function onChangeDescription(e) {
        const newDescription = e?.target?.value;

        if (newDescription === course?.description) {
            return
        }

        setNewCourseData(prevState => {
            return {...prevState, description: newDescription}
        })
    }

    return (
        course && <Modal isOpen={!!course} onClose={onCloseEditModal}>
            <div className={styles.editCourseModule}>
                <h1 className={styles.editCourseModule__title}>Редактирование курса</h1>
                <form className={styles.editCourseModule__form}>
                    <label htmlFor={selectors.name_input_id}>Название курса:</label>
                    <input id={selectors.name_input_id} type="text" onInput={onChangeTitle} defaultValue={course.title} />

                    <label htmlFor={selectors.description_input_id}>Описание курса:</label>
                    <input id={selectors.description_input_id} type="text" onInput={onChangeDescription} defaultValue={course.description} />

                    <div className={styles.editCourseModule__footer}>
                        <button 
                            className={styles.editCourseModule__button + ' ' + styles.editCourseModule__button_submit}
                            onClick={e => submit(e)}
                        >
                            Сохранить
                        </button>
                        <button 
                            className={styles.editCourseModule__button}
                            onClick={e => closeEditModal(e)}
                        >
                            Отменить
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}
