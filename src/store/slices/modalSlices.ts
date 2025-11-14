import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "../../types"; //타입스크립트5.0의 새옵션 verbatimModuleSyntax, 타입전용 import 표시해줘야함


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
        
    }    
});

export const modalReducer = modalSlice.reducer;

