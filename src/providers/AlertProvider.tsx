import React, { ReactNode } from "react";
import Alert from "../components/Alert";
import useAlertsStore from "../store/alertsStore";

interface AlertsProviderProps {
  children?: ReactNode;
}

const AlertsProvider = ({ children }: AlertsProviderProps) => {
  const { alerts } = useAlertsStore();

  return (
    <>
      {alerts.length !== 0 && (
        <div className="fixed z-[100] p-4 w-full justify-end">
          {alerts.map((alert) => (
            <Alert key={alert.id} title={alert.title} message={alert.message} />
          ))}
        </div>
      )}
      {children}
    </>
  );
};

export { useAlertsStore };
export default AlertsProvider;
