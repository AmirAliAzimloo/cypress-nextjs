'use client'
import { useState } from 'react';

const TodoList = () => {
    const [task, setTask] = useState<any>('');
    const [tasks, setTasks] = useState<any>([]);

    const addTask = (e:any) => {
        e.preventDefault(); // Prevent form submission
        if (!task.trim()) return; // Ignore empty submissions
        setTasks([...tasks, task]);
        setTask(''); // Clear input after submission
    };

    const removeTask = (index:number) => {
        setTasks(tasks.filter((_: any, i: number) => i !== index));
    };

    return (
        <div className="bg-gray-800 text-white p-5 max-w-md mx-auto rounded-lg mt-10">
            <h2 className="text-xl font-bold mb-4">To-Do List</h2>
            <form onSubmit={addTask} className="mb-4">
                <input
                    className="text-gray-900 p-2 mr-2 rounded"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Add Task
                </button>
            </form>
            <ul>
                {tasks.map((task: any, index: number) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <span>{task}</span>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                            onClick={() => removeTask(index)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
