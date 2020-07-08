import React from "react";
import {ToastsContainer, ToastsStore} from 'react-toasts';
 
export const Toast = () => {
    return <div>
        <ToastsContainer  store={ToastsStore}/>
    </div>
}