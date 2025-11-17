import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITask } from "../../types"; //타입스크립트5.0의 새옵션 verbatimModuleSyntax, 타입전용 import 표시해줘야함

type TSetModalDataAction = {
    boardId: string;
    listId: string;
    task: ITask;
};


type TModalState = {
    boardId: string;
    listId: string;
    task: ITask;
}

const initialState: TModalState = {
    boardId: "boaed-0",
    listId: "list-0",
    task: {
        taskId: "task-0",
        taskName: "task 0",
        taskDescription: "task description",
        taskOwner: "John",
    },
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalData: (
            state,
            { payload }: PayloadAction<TSetModalDataAction>
        ) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            state.task = payload.task
        }
    }
});

export const { setModalData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

