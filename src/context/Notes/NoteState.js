import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Suraj",
        "class": "5b"
    };
    const [state, setstate] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "suman",
                "class": "68"
            })
        }, 1000)
    }


    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;