/**
 *   Forms states///
 * 
 * 
 * 
 */
import axiosClient from "../axios-client";
import { useState, createContext, useContext } from "react";

const StateContext = createContext(
   {
      payload: null,
      response: null,
      form: null,
      show: false,
      

      setPayload: () => {},
      setResponse: () => {},
      setForm: () => {},
      setShow: () => {},
     
   }
)

export const ContextProvider = ({ children }) => {
   const [payload, _setPayload] = useState({});
   const [response, _setResponse] = useState('');
   const [form, _setForm] = useState({});
   const [show, _setShow] = useState(false);
   

   // Fetching data to server
   const setPayload = (payload) => {
      axiosClient.post('/epikka', payload)
      .then(({data})=>{    
          setResponse(data.message)    
      })
      .catch(err=>{
         setResponse(err.message)
      })
   };

   const setResponse = (data) => {
       _setResponse(data)
   }

   const setForm = (form) => {
      _setForm(form);
   };

   const setShow = (show) => {
      _setShow(show);
   };

   return (
      <StateContext.Provider
         value={{
            payload,
            setPayload,
            response,
            setResponse,
            form,
            setForm,
            show,
            setShow,         
            }}>
             {children}

      </StateContext.Provider>
   )
}
export const useFormContext = () => useContext(StateContext)