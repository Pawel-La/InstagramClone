import { createContext, PropsWithChildren, useState } from 'react';
import { useContextWrapper } from './helpers';

const SIDEBAR_ITEM_ID = {
  INSTAGRAM: 'INSTAGRAM',
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

const SidebarSelectedItemsStateContext = createContext<stateProps>(undefined);
SidebarSelectedItemsStateContext.displayName =
  'SidebarSelectedItemsStateContext';

function useSidebarSelectedItemsStateContext() {
  return useContextWrapper(SidebarSelectedItemsStateContext);
}

type updaterProps = ((key: SidebarItemId[]) => void) | undefined;

const SidebarSelectedItemsUpdaterContext =
  createContext<updaterProps>(undefined);
SidebarSelectedItemsUpdaterContext.displayName =
  'SidebarSelectedItemsUpdaterContext';

function useSidebarSelectedItemsUpdaterContext() {
  return useContextWrapper(SidebarSelectedItemsUpdaterContext);
}

function SidebarSelectedItemsProvider({ children }: PropsWithChildren) {
  const [ids, setIds] = useState<SidebarItemId[]>([]);

  return (
    <SidebarSelectedItemsStateContext value={ids}>
      <SidebarSelectedItemsUpdaterContext value={setIds}>
        {children}
      </SidebarSelectedItemsUpdaterContext>
    </SidebarSelectedItemsStateContext>
  );
}

export {
  SidebarSelectedItemsProvider,
  useSidebarSelectedItemsStateContext,
  useSidebarSelectedItemsUpdaterContext,
};
