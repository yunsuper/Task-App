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
import { Droppable } from '@hello-pangea/dnd';

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
            logTimestamp: new Date().toISOString(),
        })
    );
  }

  const handleTaskChange = (
      boardId: string,
      listId: string,
      task: ITask
  ) => {
    dispatch(setModalData({
      boardId,
      listId,
      task
    }));
    dispatch(setModalActive(false));
  }

  return (
      <Droppable droppableId={list.listId}>
          {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={listWrapper}>
                  <div className={header}>
                      <div className={name}>{list.listName}</div>
                      <GrSubtract
                          className={deleteButton}
                          onClick={() => handleListDelete(list.listId)}
                      />
                  </div>
                  {list.tasks.map((task, index) => (
                      <div
                          onClick={() =>
                              handleTaskChange(
                                  boardId,
                                  list.listId,
                                  task,           
                              )
                          }
                          key={task.taskId}
                      >
                          <Task
                              taskName={task.taskName}
                              taskDescription={task.taskDescription}
                              boardId={boardId}
                              id={task.taskId}
                              index={index}
                          />
                      </div>
                  ))}
                  {provided.placeholder}
                  <ActionButton boardId={boardId} listId={list.listId} />
              </div>
          )}
      </Droppable>
  );
}

export default List