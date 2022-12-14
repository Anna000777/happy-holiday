import { createContext } from "react";
import { useFetch } from "../hooks/useFetch"; 
import { useSelector } from "react-redux";
import { URI_API } from "../const/const";

export const imgContext = createContext({});

export const ImgContextProvider = ({children}) => {
  const holiday = useSelector(state => state.holidays.holiday);
  const [{urlImg}] = useFetch(holiday ? `${URI_API}image/${holiday}` : '');

  return (
    <imgContext.Provider value={{urlImg}}>
      {children}
    </imgContext.Provider>
  )
}