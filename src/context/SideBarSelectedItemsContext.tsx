import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { useContextWrapper } from './helpers';

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

type SideBarSelectedItemsContextStateProps = SideBarItemId[] | undefined;

type useSideBarSelectedItemsContextUpdaterProps =
  | Dispatch<SetStateAction<SideBarItemId[]>>
  | undefined;

const SideBarSelectedItemsContextState =
  createContext<SideBarSelectedItemsContextStateProps>(undefined);
const SideBarSelectedItemsContextUpdater =
  createContext<useSideBarSelectedItemsContextUpdaterProps>(undefined);

function useSideBarSelectedItemsContextState() {
  return useContextWrapper(
    'useSideBarSelectedItemsContextState must be used within its provider',
    SideBarSelectedItemsContextState
  );
}

function useSideBarSelectedItemsContextUpdater() {
  return useContextWrapper(
    'useSideBarSelectedItemsContextUpdater must be used within its provider',
    SideBarSelectedItemsContextUpdater
  );
}

function SideBarSelectedItemsProvider({ children }: PropsWithChildren) {
  const [ids, setIds] = useState<SideBarItemId[]>([]);

  return (
    <SideBarSelectedItemsContextState value={ids}>
      <SideBarSelectedItemsContextUpdater value={setIds}>
        {children}
      </SideBarSelectedItemsContextUpdater>
    </SideBarSelectedItemsContextState>
  );
}

export {
  SideBarSelectedItemsProvider,
  useSideBarSelectedItemsContextState,
  useSideBarSelectedItemsContextUpdater,
};
