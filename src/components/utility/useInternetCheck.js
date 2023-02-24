import React, { useEffect, useState } from 'react'

const useInternetCheck = () => {
    const [isOnline,setIsOnline]=useState(true);

    useEffect(()=>{

        const handleStatusChangeOnline=()=>{
            setIsOnline(true);
        }
        const handleStatusChangeOffline=()=>{
            setIsOnline(false);
        }
         // Listen to the online status
    window.addEventListener('online', handleStatusChangeOnline);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChangeOffline);
    return () => {
        window.removeEventListener('online', handleStatusChangeOnline);
        window.removeEventListener('offline', handleStatusChangeOffline);
      };

    },[])
  return isOnline;
}

export default useInternetCheck