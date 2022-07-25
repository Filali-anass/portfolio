import create from "zustand";
import { v4 as uuidv4 } from "uuid";
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
    const id = uuidv4();
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
