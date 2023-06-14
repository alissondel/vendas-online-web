import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { getAuthorizationToken, setAuthorizationToken } from '../functions/connection/auth';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

/* eslint-disable */
export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  useEffect(() => {
    const token = getAuthorizationToken()
    if(token) {
      setAccessToken(token)
    }
  }, [])

  const setAccessToken = (accessToken: string) => {
    setAuthorizationToken(accessToken)
    setGlobalData({
      ...globalData,
      accessToken,
    });
  }

  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  }

  return {
    notification: globalData.notification,
    setNotification,
    accessToken: globalData?.accessToken,
    setAccessToken,
  };
};
