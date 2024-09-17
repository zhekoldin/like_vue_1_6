import React, { useState } from 'react'
import styles from '../EditCourseModal/EditCourseModal.module.css'
import Modal from '../Modal/Modal.tsx'

export default function EditCourseModal({course, isOpen, onCloseEditModal, onSubmit}) {
    const [newCourse, setNewCourseData] = useState({
        ...course
    })

    const selectors = {
        name_input_id: 'path_input_name',
        description_input_id: 'path_input_description',
    }

    function submit(e: Event) {
        e.preventDefault();

        onSubmit(newCourse)
    }

    function closeEditModal(e) {
        e.preventDefault()

        onCloseEditModal()
    }

    function onChangeTitle(e) {
        const newTitle = e?.target?.value;

        if (newTitle === course.title) {
            return
        }

        setNewCourseData(prev => {return {...prev, title: newTitle}})
    }

    function onChangeDescription(e) {
        const newDescription = e?.target?.value;

        if (newDescription === course.description) {
            return
        }

        setNewCourseData(prev => {return {...prev, description: newDescription}})
    }

    return (
        <Modal isOpen={isOpen} onClose={onCloseEditModal}>
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
