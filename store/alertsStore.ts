import create from "zustand";
import Alert from "../components/Alert";

interface Alert {
  id?: string;
  title: string;
  message?: string;
}
interface AlertsState {
  alerts: Array<Alert>;
  showAlert: (alert: Alert) => void;
  rehydrate: () => void;
}

const useAlertsStore = create<AlertsState>((set, get) => ({
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
          alerts: state.alerts.filter((alert) => alert.id !== id),
        })),
      3000
    );
  },
  rehydrate: () => {
    set({ alerts: [] });
  },
}));

export default useAlertsStore;
