import { createContext } from 'react';

export type PageContextData = {
  page: number;
};

export type AuthContextType = {
  pageContextData: PageContextData;
  setPageContextData: (pageContextData: PageContextData) => void;
};

export const PageContext = createContext<AuthContextType>({
  pageContextData: {
    page: 0,
  },
  setPageContextData: () => null,
});
