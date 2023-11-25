'use client';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FolderItem from './FolderItem';

function FolderList({ folderList, isBig = true }) {
  const [activeFolder, setActiveFolder] = useState();
  const router = useRouter();
  // const folderList = [
  //   {
  //     id: 1,
  //     name: 'Folder 1 to Test Big Text',
  //   },
  //   {
  //     id: 2,
  //     name: 'Folder 2',
  //   },
  //   {
  //     id: 3,
  //     name: 'Folder 3',
  //   },
  //   {
  //     id: 4,
  //     name: 'Folder 4',
  //   },
  //   {
  //     id: 5,
  //     name: 'Folder 4',
  //   },
  // ];

  const onFolderClick = (index, item) => {
    setActiveFolder(index);
    router.push({
      pathname: '/folder/' + item.id,
      query: {
        name: item.name,
        id: item.id,
      },
    });
  };
  return (
    <div
      className="p-5 mt-5 
  bg-white rounded-[4px] shadow-sm border-[1px] border-blue-100"
    >
      {/* text */}
      <h2
        className="text-17px] 
        font-bold 
        items-center"
      >
        Recent Folders
        {/* view all */}
        <span
          className="float-right
        text-blue-400 font-normal
        text-[13px]"
        >
          View All
        </span>
      </h2>
      {/* folder list */}
      <div
        className="grid grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5 mt-3
        gap-4"
      >
        {folderList.map((item, index) => (
          <div key={index} onClick={() => onFolderClick(index, item)}>
            <FolderItem folder={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FolderList;
