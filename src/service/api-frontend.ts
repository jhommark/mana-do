import { IAPI } from './types';
import { Todo, TodoStatus } from '../models/todo';
import shortid from 'shortid';

class ApiFrontend extends IAPI {
    async createTodo(content: string): Promise<Todo> {
        return Promise.resolve({
            content: content,
            created_date: new Date().toISOString(),
            status: TodoStatus.ACTIVE,
            id: shortid(),
            user_id: 'firstUser',
        } as Todo);
    }

    async getTodos(): Promise<Array<Todo>> {
        return Promise.resolve([
            {
                content: 'Eat',
                created_date: new Date().toISOString(),
                status: TodoStatus.ACTIVE,
                id: shortid(),
                user_id: 'firstUser',
            },
            {
                content: 'Sleep',
                created_date: new Date().toISOString(),
                status: TodoStatus.ACTIVE,
                id: shortid(),
                user_id: 'firstUser',
            },
            {
                content: 'Repeat',
                created_date: new Date().toISOString(),
                status: TodoStatus.ACTIVE,
                id: shortid(),
                user_id: 'firstUser',
            },
        ] as Array<Todo>);
    }
}

export default new ApiFrontend();
