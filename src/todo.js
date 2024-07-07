import React, { useState } from 'react';

const ToDo = () => {
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState('');
    const [activeTab, setActiveTab] = useState('ongoing');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    }

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTodoList([...todoList, { task, status: 'ongoing' }]);
            setTask('');
        }
    }

    const handleCompleteTask = (index) => {
        const updatedList = [...todoList];
        updatedList[index].status = 'completed';
        setTodoList(updatedList);
    }

    const renderTasks = (status) => {
        return (
            <ul className='w-full border'>
                {todoList.map((item, index) => {
                    if (item.status === status) {
                        return (
                            <li key={index} className='flex justify-between p-2 '>
                                 <p>{item.task}</p>
                                {item.status !== 'completed' && (
                                    <button className='border rounded bg-blue-500 text-white px-3 py-1 rounded' onClick={() => handleCompleteTask(index)}>Complete</button>
                                )}
                                
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        );
    }

    const handleTabs = (tab) => {
        setActiveTab(tab);
    }

    const tabs = ['ongoing', 'completed']; // Updated tabs array

    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl'>To-Do List</h1>
            <div className='border w-full flex justify-between'>
                <input type="text" value={task} onChange={handleInputChange} placeholder='Task' className='w-fit py-1 px-2 rounded' />
                <button className='px-2 py-1 border' onClick={handleAddTask}>Add task</button>
            </div>
            <div className='flex gap-x-2 mt-2 border w-full justify-between'>
                {tabs.map(tab => (
                    <div key={tab} className='p-2 cursor-pointer w-1/2' onClick={() => handleTabs(tab)}>
                        {tab}
                    </div>
                ))}
            </div>
            <div className='mt-4 border w-full rounded'>
                {activeTab === 'ongoing' && renderTasks('ongoing')}
                {activeTab === 'completed' && renderTasks('completed')}
            </div>
        </div>
    );
}

export default ToDo;
