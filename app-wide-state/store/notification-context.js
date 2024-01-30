import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
    activeNotification: null, // Here we will get an object that contain the values of active Notification. The object contains Text, Message and Status
    showNotification: function showNotification(notificationData) {},
    hideNotification: function hideNotification() {}
})

export function NotificationContextProvider(props){
    const [activeNotification, setActiveNotification] = useState(null);

    useEffect(()=>{
        if(activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')){
            const timer = setTimeout(()=>{setActiveNotification(null)}, 3000)
            return()=>{
                clearTimeout(timer)
            }
        }
    }, [activeNotification])

    function showNotification(notificationData){
        setActiveNotification({
            title: notificationData.title,
            message: notificationData.message,
            status: notificationData.status
        })
    }

    function hideNotification(){
        setActiveNotification(null)
    }

    const context = {
        activeNotification: activeNotification,
        showNotification: showNotification,
        hideNotification: hideNotification
    }
    return(
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext