import { useEffect, useState } from "react";
import API from "../services/api";

function SystemLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loadLogs();
  }, []);

  async function loadLogs() {
    try {
      const response = await API.get("/admin/logs/");
      setLogs(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>System Logs</h1>

      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.user}</td>
              <td>{log.action}</td>
              <td>{log.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SystemLogs;