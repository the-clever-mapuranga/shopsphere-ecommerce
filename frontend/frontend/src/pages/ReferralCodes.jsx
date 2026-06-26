import { useState } from "react";

function ReferralCodes() {
  const [codes] = useState([
    {
      id: 1,
      code: "WELCOME20",
      bonus: "$20",
    },
    {
      id: 2,
      code: "SHOP2026",
      bonus: "10%",
    },
  ]);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Referral Codes</h1>

      <table
        width="100%"
        border="1"
        cellPadding="10"
        style={{ marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Referral Code</th>
            <th>Reward</th>
          </tr>
        </thead>

        <tbody>
          {codes.map((code) => (
            <tr key={code.id}>
              <td>{code.code}</td>
              <td>{code.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReferralCodes;