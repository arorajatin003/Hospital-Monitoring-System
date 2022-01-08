import React,{useState} from "react";

const InitialState = ""
export const Context = React.createContext();

const Store = ({children})=>{
    const [ID, setID] = useState(InitialState);
    return(
        <Context.Provider value={[ID,setID]}>{children}</Context.Provider>
    )
}
export default Store;