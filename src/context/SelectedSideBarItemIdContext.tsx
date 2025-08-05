import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export enum SideBarItemId {
  'home',
  'search',
  'explore',
  'reels',
  'messages',
  'notifications',
  'create',
  'profile',
  'more',
}
const defaultSideBarItemId = SideBarItemId.home;

type SelectedSideBarItemIdContextProps =
  | {
      id: SideBarItemId;
      setId: Dispatch<SetStateAction<SideBarItemId>>;
    }
  | undefined;

const SelectedSideBarItemIdContext =
  createContext<SelectedSideBarItemIdContextProps>(undefined);

export function useSelectedSideBarItemIdContext() {
  const selectedItemId = useContext(SelectedSideBarItemIdContext);

  if (selectedItemId === undefined) {
    throw new Error(
      'useSelectedSideBarItemIdContext must be used with SelectedSideBarItemIdContext'
    );
  }

  return selectedItemId;
}

export function SelectedSideBarItemIdProvider({ children }: PropsWithChildren) {
  const [id, setId] = useState<SideBarItemId>(defaultSideBarItemId);

  return (
    <SelectedSideBarItemIdContext value={{ id: id, setId: setId }}>
      {children}
    </SelectedSideBarItemIdContext>
  );
}
