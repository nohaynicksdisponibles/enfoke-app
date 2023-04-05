import { createContext, PropsWithChildren, useReducer } from "react";
import { userReducer } from "./reducer";

const INITIAL_STATE = {
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
}

export type ContextProps = {
    data: { tag: string };
    setData: (txt: string) => void;
}

export const provider = createContext<ContextProps>({} as ContextProps)

export function ContextProvider({ children }: PropsWithChildren) {

    const [data, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setData = (txt: string) => {
        dispatch({ type: 'changeTag', payload: txt })
    }

    return (
        <provider.Provider value={{ data, setData }}>
            {children}
        </provider.Provider>
    )
}