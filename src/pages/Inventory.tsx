import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default function VehiclesTest1() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Gestion", href: "" },
          { name: "Inventaire", href: "/inventory" },
        ]}
      />
    </>
  );
}
