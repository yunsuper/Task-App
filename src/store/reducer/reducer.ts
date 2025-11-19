import { loggerReducer } from "../slices/loggerSlices"
import { boardsReducer } from "../slices/boardsSlices"
import { modalReducer } from "../slices/modalSlices"
import { userReducer } from "../slices/userSlice";

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer,
    user: userReducer
}

export default reducer;