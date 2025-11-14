import { useSelector } from "react-redux";
import type{ AppDispatch, RootState } from "../store";
import { useDispatch, type TypedUseSelectorHook} from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();

// interface Obj<T> {
//     name: T;
// }

// interface State {
//     state: {
//         data: string,
//         loading: boolean
//     }
// }

// const obj: Obj<State> = {
//     name: {
//         state: {
//             data: 'abcd',
//             loading: false
//         }
//     }
// }