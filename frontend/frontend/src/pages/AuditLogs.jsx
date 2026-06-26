function AuditLogs() {
  const logs = [
    {
      id: 1,
      user: "Admin",
      action: "Created Product",
      date: "2026-06-26",
    },
    {
      id: 2,
      user: "Manager",
      action: "Updated Inventory",
      date: "2026-06-26",
    },
    {
      id: 3,
      user: "Admin",
      action: "Deleted Coupon",
      date: "2026-06-25",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Audit Logs</h1>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px" }}
      >
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
              <td>{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuditLogs;