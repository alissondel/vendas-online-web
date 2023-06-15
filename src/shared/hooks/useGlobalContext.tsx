import { createContext, ReactNode, useContext, useState } from 'react';

import { UserType } from '../../modules/login/types/UserType';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  notification?: NotificationProps;
  user?: UserType;
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

  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };

  const setUser = (user: UserType) => {
    setGlobalData({
      ...globalData,
      user,
    });
  };

  return {
    notification: globalData.notification,
    setNotification,
    user: globalData?.user,
    setUser,
  };
};
