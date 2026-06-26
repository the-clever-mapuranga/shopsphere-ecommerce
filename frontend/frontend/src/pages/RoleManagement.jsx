function RoleManagement() {
  const roles = [
    "Super Admin",
    "Admin",
    "Manager",
    "Sales",
    "Customer Support",
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Role Based Access</h1>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>

        <tbody>
          {roles.map((role) => (
            <tr key={role}>
              <td>{role}</td>
              <td>Configure Permissions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleManagement;