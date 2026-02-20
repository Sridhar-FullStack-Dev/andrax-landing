import Grainient from "@/components/Grainient";
import { archivo } from "@/lib/fonts";

export default function NotFound() {
  return (
    <section className="h-screen relative">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Grainient
          color1="#546736"
          color2="#43522B"
          color3="#E9B94A"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center uppercase text-off-white-2">
        <h1
          className={`text-[8rem] font-bold ${archivo.className} text-center`}
        >
          Page Not Found
        </h1>
      </div>
    </section>
  );
}
