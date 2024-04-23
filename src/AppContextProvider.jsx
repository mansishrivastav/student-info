import { createContext, useState , useContext,useEffect} from "react"


const AppContext = createContext()

const getData=()=>{
    const datas = localStorage.getItem('data')
    if(datas){
        return JSON.parse(datas)
    }else{
        return []
    }
}

export const AppContextProvider = ({children}) => {
   const[data, setData]=useState(getData())

   const addData=(newData)=>{
    const id = Date.now()
    setData([...data,{...newData,id} ]);
   }

   useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data))
   },[data])

   const deleteData=(delId)=>{
    const updatedData = data.filter(item=>item.id!==delId);
    setData(updatedData);
   }
   const editData = (updateId, updatedData) => {
    const updatedList = data.map((item) =>
      item.id === updateId ? { ...item, ...updatedData } : item
    );
    setData(updatedList);
  };
  return (
    <AppContext.Provider value={{data,addData, setData,editData, deleteData }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useAppContextValue =()=>useContext(AppContext)

