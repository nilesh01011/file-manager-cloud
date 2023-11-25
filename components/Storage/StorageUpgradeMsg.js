import React from 'react';

function StorageUpgradeMsg() {
  return (
    <div
      className="p-3 bg-blue-50 
        rounded-lg text-center mt-5 bottom-0"
    >
      <h2 className="font-semibold text-[17px]">Need More Storage?</h2>
      <h2 className="text-[13px]">Get more Storage my upgrading the plan</h2>
      <button
        className="bg-blue-500 p-2 px-4
            text-[14px] rounded-lg text-white mt-3"
      >
        Upgrade Storage
      </button>
    </div>
  );
}

export default StorageUpgradeMsg;
