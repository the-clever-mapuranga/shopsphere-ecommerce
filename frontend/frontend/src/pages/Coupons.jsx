
import { useEffect, useState } from "react";

import CouponForm from "../components/CouponForm";
import CouponTable from "../components/CouponTable";

import {
  getCoupons,
  createCoupon,
  deleteCoupon,
} from "../services/couponService";

function Coupons() {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    loadCoupons();
  }, []);

  const loadCoupons = async () => {
    try {
      const data = await getCoupons();
      setCoupons(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCoupon = async (coupon) => {
    try {
      await createCoupon(coupon);
      loadCoupons();
    } catch (error) {
      console.error(error);
    }
  };

  const removeCoupon = async (id) => {
    try {
      await deleteCoupon(id);
      loadCoupons();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
      }}
    >
      <h1>Coupon Management</h1>

      <CouponForm
        onSubmit={addCoupon}
      />

      <CouponTable
        coupons={coupons}
        onDelete={removeCoupon}
      />
    </div>
  );
}

export default Coupons;
