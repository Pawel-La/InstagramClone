import { createContext, PropsWithChildren, useState } from 'react';
import { useContextWrapper } from './helpers';

export const SIDEBAR_ITEM_ID = {
  HOME: 'HOME',
  SEARCH: 'SEARCH',
  EXPLORE: 'EXPLORE',
  REELS: 'REELS',
  MESSAGES: 'MESSAGES',
  NOTIFICATIONS: 'NOTIFICATIONS',
  CREATE: 'CREATE',
  PROFILE: 'PROFILE',
  MORE: 'MORE',
} as const;

export type SidebarItemId = keyof typeof SIDEBAR_ITEM_ID;

type stateProps = SidebarItemId[] | undefined;

const SidebarSelectedItemsContextState = createContext<stateProps>(undefined);

function useSidebarSelectedItemsContextState() {
  return useContextWrapper(
    'useSidebarSelectedItemsContextState must be used within its provider',
    SidebarSelectedItemsContextState
  );
}

type updaterProps = ((key: SidebarItemId[]) => void) | undefined;

const SidebarSelectedItemsContextUpdater =
  createContext<updaterProps>(undefined);

function useSidebarSelectedItemsContextUpdater() {
  return useContextWrapper(
    'useSidebarSelectedItemsContextUpdater must be used within its provider',
    SidebarSelectedItemsContextUpdater
  );
}

function SidebarSelectedItemsProvider({ children }: PropsWithChildren) {
  const [ids, setIds] = useState<SidebarItemId[]>([]);

  return (
    <SidebarSelectedItemsContextState value={ids}>
      <SidebarSelectedItemsContextUpdater value={setIds}>
        {children}
      </SidebarSelectedItemsContextUpdater>
    </SidebarSelectedItemsContextState>
  );
}

export {
  SidebarSelectedItemsProvider,
  useSidebarSelectedItemsContextState,
  useSidebarSelectedItemsContextUpdater,
};
