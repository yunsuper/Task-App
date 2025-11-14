import { loggerReducer } from "../slices/loggerSlices"
import { boardsReducer } from "../slices/boardsSlices"
import { modalReducer } from "../slices/modalSlices"

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer
}

export default reducer;