import { useState } from "react";
import Sidebar from "./components/Layout/Sidebar";
import { TopBar } from "./components/Layout/TopBar";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <TopBar />
        <div className="px-10 lg:px-14 py-8">
          <p>Contenu de la page</p>
          {/*<Outlet />*/}
        </div>
      </div>
      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
