import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { request } from '../../hooks/http.hook';
import { useScrollBar } from '../../hooks/use-scrollbar';
import style from './TaskContent.module.css';
import TaskItem from './TaskItem';

const TaskContent = () => {

    const [saveButton, setSaveButton] = useState(true);
    const [task, setTask] = useState([]);
    const [createTask, setCreateTask] = useState(``);
    const [updateTaskNumber, setUpdateTaskNumber] = useState(``);
    const [updateTask, setUpdateTask] = useState(``);
    const [deleteTask, setDeleteTask] = useState(``);

    const { state } = useLocation();

    const currentID = state.id;
    const currentUserName = state.name;
    const currentEmail = state.email;

    const navigate = useNavigate();

    const goCabinet = () => {
        navigate('/cabinet', { state: { id: currentID, name: currentUserName, email: currentEmail } });
    }

    const taskWrapper = useRef(null);
    const hasScroll = task.length > 15;
    useScrollBar(taskWrapper, hasScroll);

    const sendCRUD = async () => {

        if (createTask.length > 0) {
            const responseCreate = await request(`http://localhost:3003/tasks/createTask`, 'POST', { task: createTask, id: currentID });
            if (responseCreate) {
                if (!setSaveButton) setSaveButton(true);
                else setSaveButton(false);
            }
        }

        if (updateTaskNumber.length > 0 && updateTask.length > 0) {
            const responseUpdate = await request(`http://localhost:3003/tasks/updateTask`, 'PATCH', { task: updateTask, tasknumber: task[updateTaskNumber - 1].id, id: currentID });
            if (responseUpdate) {
                if (!setSaveButton) setSaveButton(true);
                else setSaveButton(false);
            }
        }

        if (deleteTask.length > 0) {
            const responseDelete = await request(`http://localhost:3003/tasks/deleteTask`, 'DELETE', { tasknumber: task[deleteTask - 1].id, id: currentID });
            if (responseDelete) {
                if (!setSaveButton) setSaveButton(true);
                else setSaveButton(false);
            }
        }

    };

    useEffect(() => {

        const requestDB = async () => {
            const responseGet = await request(`http://localhost:3003/tasks/get/${currentID}`, 'GET');
            return setTask(responseGet);
        };
        requestDB();

    }, [saveButton, currentID]);

    return (
        <>
            <section className={style['task-section']}>

                <aside className={style['aside-panel']}>
                    <div className={style['burger']}></div>
                    <div className={style['select-cube']}></div>
                    <div className={style['settings']} onClick={goCabinet}></div>
                </aside>

                <div className={style['main']}>

                    <div className={style['header']}>
                        <div className={style['hs-logo']}></div>
                        <a href='/'>
                            <div className={style['logout-button']}>
                                <p>Log Out</p>
                            </div>
                            
                        </a>

                    </div>

                    <div className={style['work-zone']}>

                        <div className={style['tasks-manager-list']}>
                            <p className={style['tasks-manager-title']}>Tasks Manager</p>
                            <p className={style['task-manager-info']}>Hello {currentUserName}! Add new tasks  with task manager from Hschool</p>
                            <div className={style['task-manager-box']}>
                                <div className={style['calendar-logo']}></div>
                                <p className={style['tasks-counter']}>{task.length}</p>
                            </div>

                        </div>

                        <div className={style['to-do-list']}>
                            <p className={style['to-do-title']}>To Do</p>
                            <p className={style['to-do-create']}>Create:</p>
                            <input className={style['to-do-create-input']} placeholder='Task' type='text' onChange={(e) => setCreateTask(e.target.value)} />
                            <p className={style['to-do-update']}>Update:</p>
                            <div className={style['to-do-update-inputs']}>
                                <input placeholder='Number' type='number' onChange={(e) => setUpdateTaskNumber(e.target.value)} />
                                <input placeholder='Task' type='text' onChange={(e) => setUpdateTask(e.target.value)} />
                            </div>
                            <p className={style['to-do-delete']}>Delete:</p>
                            <input className={style['to-do-delete-input']} placeholder='Delete' type='number' onChange={(e) => setDeleteTask(e.target.value)} />
                            <div className={style['to-do-save-button']} onClick={sendCRUD}>
                                <p>+ save</p>
                            </div>
                        </div>


                        <div className={style['tasks-list-wrap']}>
                            <p className={style['tasks-list-title']}>Your Tasks</p>
                            <div className={style['tasks-list']} style={{ height: hasScroll ? `465px` : `auto`, minHeight: `465px` }} ref={taskWrapper}>
                                <ul className={style['tasks-list-ul']}>
                                    {
                                        task.length ? task.map((el) => <TaskItem itemObject={el}{...el} />) : null
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={style['task-footage']}></div>
                <div className={style['task-footage2']}></div>
            </section>
        </>
    )
}

export default TaskContent;