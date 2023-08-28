import { InventoryEntity } from "@/types/entities/inventory.entity";
import { useState } from "react";

type InventoryTableProps = {
  items: InventoryEntity[];
};

type CounterProps = {
  quantity: number;
};

const Counter = ({ quantity }: CounterProps) => {
  const [count, setCount] = useState<number>(quantity);

  const handleClick = (increment: number) => {
    setCount((prev) => prev + increment);
  };

  return (
    <div className="flex gap-2">
      <button
        className="btn-secondary btn-sm btn-circle"
        onClick={() => handleClick(-1)}
      >
        -
      </button>
      <button disabled className="btn btn-sm btn-circle !text-primary-500">
        {count}
      </button>
      <button
        className="btn-secondary btn-sm btn-circle"
        onClick={() => handleClick(1)}
      >
        +
      </button>
    </div>
  );
};

const InventoryTable = ({ items }: InventoryTableProps) => {
  const cellStyle = "p-3 text-gray-700 whitespace-nowrap";

  return (
    <>
      <div className="overflow-auto rounded-lg shadow hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 tracking-wide text-left">Id</th>
              <th className="p-3 tracking-wide text-left">Nom</th>
              <th className="p-3 tracking-wide text-left">Date modification</th>
              <th className="p-3 tracking-wide text-left">Status</th>
              <th className="p-3 tracking-wide text-left">Prix</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {items.map((item) => (
              <tr className="bg-white">
                <td className={cellStyle}>{item.id}</td>
                <td className={cellStyle}>{item.name}</td>
                <td className={cellStyle}>
                  {item.modifiedAt.toLocaleDateString()}
                </td>
                <td className={`${cellStyle} `}>
                  <span className="p-1.5 text-xs uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    En stock
                  </span>
                </td>
                <td className={cellStyle}>{item.realPrice.toFixed(2)}€</td>
                <td>
                  <Counter quantity={item.quantity} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
        {items.map((item) => (
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #{item.id}
                </a>
              </div>

              <div className="text-gray-500">
                {item.modifiedAt.toLocaleDateString()}
              </div>

              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-700">{item.name}</div>
            <div className="text-sm font-medium text-black">
              {item.realPrice.toFixed(2)}€
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default InventoryTable;
