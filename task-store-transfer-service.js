import { Subject } from 'rxjs';

const taskSubject = new Subject();

const initialState = {
    task: null,
};

let state = initialState;

export const taskTransferStore = {
    init: () => taskSubject.next(state),
    subscribe: (setState) => taskSubject.subscribe(setState),
    addTask: (task) => {
        state = {
            ...state,
            task,
        };
        taskSubject.next(state);
    },
    clearStore: () => {
        state = initialState;
        taskSubject.next(state);
    },
    initialState,
};
