const InventoryTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Company</th>
          <th>City</th>
          <th>Progress</th>
          <th>Created</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-b-0 lg:w-6 before:hidden"></td>
          <td data-label="Name">TEST</td>
          <td data-label="Company">TEST</td>
          <td data-label="City">TEST</td>
          <td data-label="Progress" className="lg:w-32">
            <progress
              className="flex w-2/5 self-center lg:w-full"
              max="100"
              value={50}
            >
              100
            </progress>
          </td>
          <td data-label="Created" className="lg:w-1 whitespace-nowrap">
            <small className="text-gray-500 dark:text-slate-400">TEST</small>
          </td>
          <td className="before:hidden lg:w-1 whitespace-nowrap">dzdz</td>
        </tr>
      </tbody>
    </table>
  );
};

export default InventoryTable;
