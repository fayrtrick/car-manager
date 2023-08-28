import animatedLogo from "@/assets/animated-loader.gif";

export function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={animatedLogo} alt="loader" />
    </div>
  );
}
