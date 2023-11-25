import { list } from '@/data/menu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CreateFolderModal from './Folder/CreateFolderModal';
import UploadFileModal from './File/UploadFileModal';

function SideNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const onMenuClick = (item, index) => {
    setActiveIndex(index);
    // router.push('/')
  };
  return (
    <div className="w-[200px] bg-white h-screen sticky top-0 z-10 shadow-blue-200 shadow-md p-5">
      <div className="flex justify-center">
        <Image
          src="/cloud.png"
          alt="logo"
          className="cursor-pointer h-[60px] object-contain"
          width={150}
          height={30}
          onClick={() => router.push('/')}
        />
      </div>
      {/* add new file button */}
      <button
        onClick={() => window.upload_file.showModal()}
        className="flex gap-2 items-center text-[13px]
        bg-blue-500 p-2 text-white rounded-md px-3
        hover:scale-105 transition-all mt-5 w-full justify-center"
      >
        Add New File
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      {/* create new folders */}
      <button
        className="flex gap-2 items-center text-[13px]
        bg-sky-400 w-full p-2 justify-center text-white rounded-md px-3
        hover:scale-105 transition-all mt-1"
        onClick={() => window.my_modal_3.showModal()}
      >
        Create Folder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* menu items lists */}
      <div className="mt-7">
        {list.map((item, index) => (
          <h2
            key={index}
            onClick={() => onMenuClick(item, index)}
            className={`flex gap-2 items-center
            p-2 mt-3 rounded-md cursor-pointer
            hover:bg-blue-500 hover:text-white
            ${
              activeIndex == index ? 'bg-blue-500 text-white' : 'text-gray-500'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={item.logo}
              />
            </svg>
            {item.name}
          </h2>
        ))}
      </div>
      {/* folder model box */}
      <dialog id="my_modal_3" className="modal">
        <CreateFolderModal />
      </dialog>

      {/* file model box */}
      <dialog id="upload_file" className="modal">
        <UploadFileModal closeModal={() => window.upload_file.close()} />
      </dialog>
    </div>
  );
}

export default SideNavBar;
