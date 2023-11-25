import React from 'react';
import UserInfo from './UserInfo';
import StorageInfo from './StorageInfo';
import StorageDetailList from './StorageDetailList';
import StorageUpgradeMsg from './StorageUpgradeMsg';

function Storage() {
  return (
    <div>
      <UserInfo />
      <StorageInfo/>
      <StorageDetailList />
      <StorageUpgradeMsg />
    </div>
  );
}

export default Storage;
