import SideNavBar from '@/components/SideNavBar';
import Storage from '@/components/Storage/Storage';
import Toast from '@/components/Toast';
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext';
import { ShowToastContext } from '@/context/ShowToastContext';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [showToastMsg, setShowToastMsg] = useState();
  const [parentFolderId, setParentFolderId] = useState();
  return (
    <SessionProvider session={session}>
      {/* Folder Context */}
      <ParentFolderIdContext.Provider
        value={{ parentFolderId, setParentFolderId }}
      >
        {/* Toast Context */}
        <ShowToastContext.Provider value={{ showToastMsg, setShowToastMsg }}>
          <div className="flex bg-sky-50 text-black">
            <SideNavBar />
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
              <div className="col-span-2">
                <Component {...pageProps} />
              </div>
              <div className="bg-white p-5 order-first md:order-last shadow-blue-200 shadow-md">
                <Storage/>
              </div>
            </div>
          </div>
          {/* Toast msg */}
          {showToastMsg && <Toast msg={showToastMsg} />}
        </ShowToastContext.Provider>
      </ParentFolderIdContext.Provider>
    </SessionProvider>
  );
}
