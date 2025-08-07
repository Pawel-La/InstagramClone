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
const sideBarDefaultItemId = SideBarItemId.home;

type SideBarSelectedItemsContextProps =
  | {
      ids: SideBarItemId[];
      setIds: Dispatch<SetStateAction<SideBarItemId[]>>;
    }
  | undefined;

const SideBarSelectedItemsContext =
  createContext<SideBarSelectedItemsContextProps>(undefined);

function useSideBarSelectedItemsContext() {
  const selectedItems = useContext(SideBarSelectedItemsContext);

  if (selectedItems === undefined) {
    throw new Error(
      'useSideBarSelectedItemsContext must be used with SideBarSelectedItemsContext'
    );
  }

  return selectedItems;
}

function SideBarSelectedItemsProvider({ children }: PropsWithChildren) {
  const [ids, setIds] = useState<SideBarItemId[]>([sideBarDefaultItemId]);

  return (
    <SideBarSelectedItemsContext value={{ ids: ids, setIds: setIds }}>
      {children}
    </SideBarSelectedItemsContext>
  );
}

export { SideBarSelectedItemsProvider, useSideBarSelectedItemsContext };
