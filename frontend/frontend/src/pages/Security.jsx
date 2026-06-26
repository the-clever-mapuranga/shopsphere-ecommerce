import TwoFactorForm from "../components/TwoFactorForm";
import DiscountRuleForm from "../components/DiscountRuleForm";
import NotificationSettings from "../components/NotificationSettings";
import { enableTwoFactor } from "../services/twoFactorService";

function Security() {
  const handleEnable = async (code) => {
    try {
      await enableTwoFactor(code);
      alert("2FA Enabled");
    } catch (error) {
      console.error(error);
      alert("Failed to enable 2FA");
    }
  };

  const handleRule = (rule) => {
    console.log(rule);
    alert("Discount rule saved");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto" }}>
      <h1>Security Center</h1>

      <TwoFactorForm onEnable={handleEnable} />

      <br />

      <DiscountRuleForm onSave={handleRule} />

      <br />

      <NotificationSettings />
    </div>
  );
}

export default Security;