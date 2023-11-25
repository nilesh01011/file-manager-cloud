import { ShowToastContext } from '@/context/ShowToastContext';
import React, { useContext, useEffect } from 'react';

function Toast({ msg }) {
  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext);
  useEffect(() => {
    setInterval(() => {
      setShowToastMsg(null);
    }, 3500);
  }, [showToastMsg]);
  return (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success rounded-[6px] p-[10px]">
        <span className='text-white'>{msg}</span>
      </div>
    </div>
  );
}

export default Toast;
