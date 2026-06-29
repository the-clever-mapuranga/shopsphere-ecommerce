import { useState } from "react";

function DiscountRuleForm({ onSave }) {
  const [rule, setRule] = useState({
    minimum: "",
    percentage: "",
  });

  const submit = (e) => {
    e.preventDefault();

    onSave(rule);

    setRule({
      minimum: "",
      percentage: "",
    });
  };

  return (
    <form
      onSubmit={submit}
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Discount Rules</h2>

      <input
        placeholder="Minimum Order Amount"
        value={rule.minimum}
        onChange={(e) =>
          setRule({
            ...rule,
            minimum: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
        }}
      />

      <input
        placeholder="Discount Percentage"
        value={rule.percentage}
        onChange={(e) =>
          setRule({
            ...rule,
            percentage: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
        }}
      />

      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
        }}
      >
        Save Rule
      </button>
    </form>
  );
}

export default DiscountRuleForm;