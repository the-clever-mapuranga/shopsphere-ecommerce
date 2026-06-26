
import { useEffect, useState } from "react";

import InventoryCard from "../components/InventoryCard";
import InventoryTable from "../components/InventoryTable";

import {
  getInventory,
} from "../services/inventoryService";

function Inventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const data = await getInventory();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const totalProducts = products.length;

  const totalStock = products.reduce(
    (sum, product) =>
      sum + product.stock_quantity,
    0
  );

  const lowStock = products.filter(
    (product) =>
      product.stock_quantity <= 10
  ).length;

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
      }}
    >
      <h1>Inventory Management</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <InventoryCard
          title="Products"
          value={totalProducts}
          color="#4f46e5"
        />

        <InventoryCard
          title="Items In Stock"
          value={totalStock}
          color="#059669"
        />

        <InventoryCard
          title="Low Stock"
          value={lowStock}
          color="#dc2626"
        />
      </div>

      <InventoryTable
        products={products}
      />
    </div>
  );
}

export default Inventory;
