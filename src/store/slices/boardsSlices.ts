import { createSlice } from "@reduxjs/toolkit";
import type { IBoard } from "../../types";

type TBoardState = {
    modalActive: boolean;
    boardArray: IBoard[];
}

const initialState: TBoardState = {
    modalActive: false,
    boardArray: [
        {
            boardId: "board-0",
            boardName: "첫 번째 게시물",
            lists: [
                {
                    listId: "list-0",
                    listName: "List 1",
                    tasks: [
                        {
                            taskId: "task-0",
                            taskName: "task 1",
                            taskDescription: "Description",
                            taskOwner: "John",
                        },
                        {
                            taskId: "task-1",
                            taskName: "task 2",
                            taskDescription: "Description",
                            taskOwner: "John",
                        },
                    ],
                },
                {
                    listId: "list-1",
                    listName: "List 2",
                    tasks: [
                        {
                            taskId: "task-3",
                            taskName: "task 3",
                            taskDescription: "Description",
                            taskOwner: "John",
                        },
                    ],
                },
            ],
        },
    ],
};

const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {

    }
})

export const boardsReducer = boardsSlice.reducer;