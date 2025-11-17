import { type FC } from 'react'
import { GrSubtract } from 'react-icons/gr';
import Task from '../../components/Task/Task';
import ActionButton from '../ActionButoon/ActionButton';
import { type IList } from '../../types';
import { useTypedDispatch } from '../../hooks/redux';
import { deleteList, setModalActive } from "../../store/slices/boardsSlices";
import { v4 as uuidv4 } from 'uuid';
import { addLog } from '../../store/slices/loggerSlices';
import { type ITask } from '../../types';
import { setModalData } from '../../store/slices/modalSlices';
import { listWrapper, header, name, deleteButton } from "./List.css";

type TListProps = {
  list: IList;
  boardId: string;
}

const List: FC<TListProps> = ({
  list,
  boardId
}) => {

  const dispatch = useTypedDispatch();

  const handleListDelete = (listId: string) => {
    dispatch(deleteList({ boardId, listId }));
    dispatch(
      addLog({
        logId: uuidv4(),
        logMessage: `리스트 삭제하기: ${list.listName}`,
        logAuthor: "User",
        logTimestamp: String(Date.now())
      })
    )
  }

  const handleTaskChange = (
      boardId: string,
      listId: string,
      taskId: string,
      task: ITask
  ) => {
    dispatch(setModalData({
      boardId,
      listId,
      task
    }));
    dispatch(setModalActive(true));
  }

  return (
      <div className={listWrapper}>
          <div className={header}>
              <div className={name}>{list.listName}</div>
        <GrSubtract
          className={deleteButton}
          onClick={()=> handleListDelete(list.listId)}
        />
          </div>
          {list.tasks.map((task, index) => (
            <div
              onClick={()=> handleTaskChange(boardId, list.listId, task.taskId, task)}
              key={task.taskId}>
              <Task
                taskName={task.taskName}
                taskDescription={task.taskDescription}
                boardId={boardId}
                id={task.taskId}
                index={index}
              />
              </div>
          ))}
      <ActionButton
        boardId={boardId}
        listId={list.listId} />
      </div>
  );
}

export default List