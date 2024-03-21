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
    <div className="w-full h-screen flex justify-center items-center">
      <ReactLoading type={"bars"} color={"#000"} height={100} width={100} />
    </div>
  );
}
