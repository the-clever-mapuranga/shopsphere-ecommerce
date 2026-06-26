import { useState } from "react";

function NotificationSettings() {
  const [settings, setSettings] = useState({
    orderEmails: true,
    promotions: false,
    stockAlerts: true,
  });

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Email Notifications</h2>

      <label>
        <input
          type="checkbox"
          checked={settings.orderEmails}
          onChange={() =>
            setSettings({
              ...settings,
              orderEmails: !settings.orderEmails,
            })
          }
        />

        Order Emails
      </label>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={settings.promotions}
          onChange={() =>
            setSettings({
              ...settings,
              promotions: !settings.promotions,
            })
          }
        />

        Promotions
      </label>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={settings.stockAlerts}
          onChange={() =>
            setSettings({
              ...settings,
              stockAlerts: !settings.stockAlerts,
            })
          }
        />

        Stock Alerts
      </label>
    </div>
  );
}

export default NotificationSettings;