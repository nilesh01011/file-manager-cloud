import { Inter } from 'next/font/google';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import SearchBar from '@/components/SearchBar';
import FolderList from '@/components/Folder/FolderList';
import FileList from '@/components/File/FileList';
import Head from 'next/head';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import { app } from '@/config/FirebaseConfig';
import { ShowToastContext } from '@/context/ShowToastContext';
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const [folderList, setFolderList] = useState([]);
  const [fileList, setFileList] = useState([]);

  const db = getFirestore(app);
  const { parentFolderId, setParentFolderId } = useContext(
    ParentFolderIdContext
  );
  const { showToastMsg, setShowToastMsg } = useContext(ShowToastContext);

  useEffect(() => {
    console.log('User Session');
    if (!session) {
      router.push('/login');
    } else {
      setFolderList([]);
      getFolderList();
      getFileList();

      console.log('User Session', session.user);
    }
    setParentFolderId(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, session]);

  // get all folders list
  const getFolderList = async () => {
    setFolderList([]);
    // fetch user folder list from firestore
    const q = query(
      collection(db, 'Folders'),
      // where('parentFolderId', '==', 0),
      where('createBy', '==', session.user.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, ' => ', doc.data());
      setFolderList((folderList) => [...folderList, doc.data()]);
    });
  };

  // get all file list
  const getFileList = async () => {
    setFileList([]);
    const q = query(
      collection(db, 'files'),
      where('parentFolderId', '==', 0),
      where('createdBy', '==', session.user.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setFileList((fileList) => [...fileList, doc.data()]);
    });
  };

  return (
    <>
      <Head>
        <title>File Manager Store</title>
      </Head>
      <main className="p-5">
        {/* search bar */}
        <SearchBar />
        {/* folder */}
        <FolderList folderList={folderList} />
        {/* file */}
        <FileList fileList={fileList} />
      </main>
    </>
  );
}
