import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export type LibraryItem = {
  id: string;
  uri: string;
  createdAt: number;
};

type LibraryValue = {
  items: LibraryItem[];
  addItem: (uri: string) => void;
};

const LibraryContext = createContext<LibraryValue | undefined>(undefined);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LibraryItem[]>([]);

  const addItem = (uri: string) => {
    const item: LibraryItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      uri,
      createdAt: Date.now(),
    };
    setItems((prev) => [item, ...prev]);
  };

  const value = useMemo(() => ({ items, addItem }), [items]);
  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
}

export function useLibrary() {
  const ctx = useContext(LibraryContext);
  if (!ctx) throw new Error('useLibrary must be used within LibraryProvider');
  return ctx;
}
