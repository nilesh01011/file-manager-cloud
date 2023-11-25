import { app } from '@/config/FirebaseConfig';
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext';
import { ShowToastContext } from '@/context/ShowToastContext';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

function CreateFolderModal() {
  const docId = Date.now().toString();
  const [folderName, setFolderName] = useState('');
  const { data: session } = useSession();
  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext);
  const { parentFolderId, setParentFolderId } = useContext(
    ParentFolderIdContext
  );

  // firebase
  const db = getFirestore(app);

  const onCreate = async () => {
    console.log(folderName);
    await setDoc(doc(db, 'Folders', docId), {
      name: folderName,
      id: docId,
      createBy: session.user.email,
      parentFolderId: parentFolderId,
    });
    // await setDoc(doc(db,"Folders",docId),{
    //     name:folderName,
    //     id:docId,
    //     createBy:session.user.email,
    //     parentFolderId:parentFolderId
    // })
    setShowToastMsg('Your Folder Created!');
    setFolderName("");
  };
  return (
    <div>
      <form
        method="dialog"
        className="modal-box p-9 items-center bg-white min-w-[340px]"
      >
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div
          className="w-full items-center 
      flex flex-col justify-center gap-3"
        >
          <Image src="/folder.png" alt="folder" width={50} height={50} />
          <input
            type="text"
            placeholder="Folder Name"
            className={`w-full pl-3 bg-transparent p-2 outline-none
            rounded-[4px] border-[1px] ${
              folderName === '' ? 'border-zinc-300' : 'border-black'
            }`}
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          {/* create buttons */}
          <button
            disabled={folderName === '' ? true : false}
            className={`${
              folderName === ''
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-500 cursor-pointer'
            } mt-1
            text-white rounded-[4px] p-2 px-3 w-full`}
            onClick={() => onCreate()}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateFolderModal;
