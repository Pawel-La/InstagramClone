import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { useSidebar } from '@/src/components/Sidebar/SideBar';
import { SPACING } from '@/src/utils/theme';

const FEED_SECTION_WIDTH = 630 as const;
const RIGHT_SECTION_WIDTH = 319 as const;
const GAP_SIZE = 64 as const;

const styles = StyleSheet.create({
  listContainer: { paddingTop: SPACING.xxl },
  container: {
    flexDirection: 'row',
  },
  postContainer: {
    gap: SPACING.lg,
    marginTop: SPACING.sm,
    width: FEED_SECTION_WIDTH,
  },
});

export function useRowStyle(showRightSection: boolean, screenWidth: number) {
  const sideMargin = useSideMargin(screenWidth);
  let firstRowStyle: StyleProp<ViewStyle>, otherRowsStyle: StyleProp<ViewStyle>;

  if (showRightSection) {
    firstRowStyle = { marginHorizontal: sideMargin, gap: GAP_SIZE };
    otherRowsStyle = { marginLeft: sideMargin };
  } else {
    firstRowStyle = otherRowsStyle = { justifyContent: 'center' };
  }

  return { firstRowStyle, otherRowsStyle };
}

function useSideMargin(screenWidth: number) {
  const { width: sidebarWidth } = useSidebar();
  const totalWidth = FEED_SECTION_WIDTH + GAP_SIZE + RIGHT_SECTION_WIDTH;

  return (screenWidth - sidebarWidth - totalWidth) / 2;
}

export default styles;
