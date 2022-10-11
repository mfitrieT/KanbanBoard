import Dexie from 'dexie';

const db = new Dexie('KanbanBoardDB');

const createDB = ()=>{
    try {
        db.version(1).stores({ 
            TaskList: 'id, cardTitle, severity, content, OwnerName, DueDate',
            InProgress: 'id, cardTitle, severity, content, OwnerName, DueDate',
            TaskDone: 'id, cardTitle, severity, content, OwnerName, DueDate'
        });
    } catch (error) {
        console.log(error);
    }
}

const createProjectDB = ()=>{
    try {
        db.version(2).stores({
            Project: '++id, projectName'
        })
    } catch (error) {
        console.log(error);
    }
}

createProjectDB();
createDB();

export default db;