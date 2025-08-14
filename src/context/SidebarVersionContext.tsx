import React, { createContext, PropsWithChildren } from 'react';
import useSidebarVersion from '../hooks/useSidebarVersion';
import { useContextWrapper } from './helpers';

const SIDEBAR_VERSION = {
  LG: 'LG',
  MD: 'MD',
  SM: 'SM',
  XS: 'XS',
} as const;

export type SidebarVersion = keyof typeof SIDEBAR_VERSION;

type versionProps = SidebarVersion | undefined;

const SidebarVersionContext = createContext<versionProps>(undefined);
SidebarVersionContext.displayName = 'SidebarVersionContext';

function useSidebarVersionContext() {
  return useContextWrapper(SidebarVersionContext);
}

function SidebarVersionProvider({ children }: PropsWithChildren) {
  const version = useSidebarVersion();

  return (
    <SidebarVersionContext value={version}>{children}</SidebarVersionContext>
  );
}

export { SidebarVersionProvider, useSidebarVersionContext };
