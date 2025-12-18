import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AppState {
  // 状态
  sidebarCollapsed: boolean;
  loading: boolean;

  // Actions
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>()(
  immer((set) => ({
    sidebarCollapsed: false,
    loading: false,

    // 切换侧边栏
    toggleSidebar: () =>
      set((state) => {
        state.sidebarCollapsed = !state.sidebarCollapsed;
      }),

    // 设置侧边栏状态
    setSidebarCollapsed: (collapsed) =>
      set((state) => {
        state.sidebarCollapsed = collapsed;
      }),

    // 设置加载状态
    setLoading: (loading) =>
      set((state) => {
        state.loading = loading;
      }),
  })),
);
