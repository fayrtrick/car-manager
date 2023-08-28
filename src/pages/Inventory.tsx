import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import InventoryTable from "@/components/Table/InventoryTable";
import { InventoryEntity } from "@/types/entities/inventory.entity";

const examples: InventoryEntity[] = [
  {
    id: 1,
    name: "Example",
    description: "Example",
    realPrice: 253,
    quantity: 4,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: 2,
    name: "Example2",
    description: "Example2",
    realPrice: 2,
    quantity: 2,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
];

const Inventory = () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { name: "Gestion" },
          { name: "Inventaire", href: "/inventory" },
        ]}
      />
      <div className="md:flex md:justify-between md:items-center">
        <h1 className="text-2xl my-5">Gestion de l'inventaire</h1>
        <input
          type="text"
          placeholder="Rerchercher…"
          className="w-full md:w-auto input input-bordered input-sm"
        />
      </div>

      <InventoryTable items={examples} />
    </>
  );
};

export default Inventory;
