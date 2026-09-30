import React, { type FC, useState, useRef, useEffect } from "react";
import { useTypedSelector, useTypedDispatch } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiLogIn, FiPlusCircle } from "react-icons/fi";
import {
    container,
    title,
    addSection,
    addButton,
    boardItemActive,
    boardItem,
    smallTitle,
} from "./BoardList.css";
import clsx from "clsx";
import { GoSignOut } from "react-icons/go";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { app } from "../../firebase";
import { removeUser, setUser } from "../../store/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";

// 렌더링마다 새로 만들지 않도록 컴포넌트 밖으로 이동
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

type TBoardListProps = {
    activeBoardId: string;
    setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList: FC<TBoardListProps> = ({
    activeBoardId,
    setActiveBoardId,
}) => {
    const dispatch = useTypedDispatch();
    const { boardArray } = useTypedSelector((state) => state.boards);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { isAuth } = useAuth();
    console.log(isAuth);

    // Firebase 로그인 상태를 Redux와 동기화 (새로고침/재방문 시에도 로그인 유지)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUser({
                        email: user.email,
                        id: user.uid,
                    }),
                );
            } else {
                dispatch(removeUser());
            }
        });
        return unsubscribe;
    }, [dispatch]);

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                console.log(userCredential);
                dispatch(
                    setUser({
                        email: userCredential.user.email,
                        id: userCredential.user.uid,
                    }),
                );
            })
            .catch((error) => {
                // 사용자가 팝업을 그냥 닫은 경우는 에러로 취급하지 않음
                if (
                    error?.code === "auth/popup-closed-by-user" ||
                    error?.code === "auth/cancelled-popup-request"
                ) {
                    return;
                }
                console.error(error);
            });
    };

    const handleClick = () => {
        setIsFormOpen(!isFormOpen);
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={container}>
            <div className={title}>게시판:</div>
            {boardArray.map((board, index) => (
                <div
                    key={board.boardId}
                    onClick={() => setActiveBoardId(boardArray[index].boardId)}
                    className={clsx(
                        {
                            [boardItemActive]:
                                boardArray.findIndex(
                                    (b) => b.boardId === activeBoardId,
                                ) === index,
                        },
                        {
                            [boardItem]:
                                boardArray.findIndex(
                                    (b) => b.boardId === activeBoardId,
                                ) !== index,
                        },
                    )}
                >
                    <div className={smallTitle}>{board.boardName}</div>
                </div>
            ))}
            <div className={addSection}>
                {isFormOpen ? (
                    <SideForm
                        inputRef={inputRef}
                        setIsFormOpen={setIsFormOpen}
                    />
                ) : (
                    <FiPlusCircle className={addButton} onClick={handleClick} />
                )}

                {isAuth ? (
                    <GoSignOut className={addButton} onClick={handleSignOut} />
                ) : (
                    <FiLogIn className={addButton} onClick={handleLogin} />
                )}
            </div>
        </div>
    );
};

export default BoardList;
