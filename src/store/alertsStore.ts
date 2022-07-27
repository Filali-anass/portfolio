import create from "zustand";

interface Alert {
  id?: string;
  title: string;
  message?: string;
}
interface AlertsState {
  alerts: Array<Alert>;
  // eslint-disable-next-line no-unused-vars
  showAlert: (alert: Alert) => void;
  rehydrate: () => void;
}

const useAlertsStore = create<AlertsState>((set) => ({
  alerts: [],
  showAlert: (alert: Alert) => {
    const id = `${Math.floor(
      Math.random() * (999999999 - 111111111 + 1) + 111111111
    )}`;
    set((state) => ({
      alerts: [...state.alerts, { ...alert, id }],
    }));
    setTimeout(
      () =>
        set((state) => ({
          alerts: state.alerts.filter((_alert) => _alert.id !== id),
        })),
      3000
    );
  },
  rehydrate: () => {
    set({ alerts: [] });
  },
}));

export default useAlertsStore;
