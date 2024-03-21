import ReactLoading from "react-loading";
// balls
// bars
// bubbles
// cubes
// cylon
// spin
// spinningBubbles
// spokes
export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-800">
      <ReactLoading type={"bars"} color={"white"} height={100} width={100} />
    </div>
  );
}
