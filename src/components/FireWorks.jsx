import { motion } from "framer-motion";

const Fireworks = ({ isActive }) => {
  const particleCount = 50;
  const colors = ["#e7c081", "#6366f1", "#b559eb", "#ffffff"];

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => {
        const angle = (i / particleCount) * 360;
        const radius = Math.random() * 150 + 50;
        const x = Math.cos(angle * (Math.PI / 180)) * radius;
        const y = Math.sin(angle * (Math.PI / 180)) * radius;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color, x: 0, y: 0 }}
            animate={{
              x: x,
              y: y,
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.1,
            }}
          />
        );
      })}
    </div>
  );
};
export default Fireworks;
