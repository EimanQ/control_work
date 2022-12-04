import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AsidePanel from '../../components/AsidePanel/AsidePanel';
import TaskContent from "../../components/TaskContent/TaskContent"
import style from './Tasks.module.css';

const Tasks = () => {

    return (
        <>
            <main>
                <AsidePanel />
                <TaskContent />
            </main>
        </>
    )
}

export default Tasks