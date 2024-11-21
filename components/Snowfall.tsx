"use client";

import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";
import { useMemo } from "react";

export function Snowfall() {
  const snowflakes = useMemo(() => 
    [...Array(50)].map(() => ({
      size: Math.random() * 8 + 8,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      swayAmount: Math.random() * 100 + 50,
      swayDuration: Math.random() * 2 + 2,
    })), []
  );

  return (
    <>
      {snowflakes.map((flake, i) => (
        <motion.div
          key={i}
          className="fixed text-white/20 pointer-events-none"
          style={{
            left: flake.left,
          }}
          initial={{
            top: -20,
          }}
          animate={{
            top: "120vh",
            x: [
              -flake.swayAmount/2,
              flake.swayAmount/2,
              -flake.swayAmount/2
            ],
          }}
          transition={{
            top: {
              duration: flake.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: flake.delay,
            },
            x: {
              duration: flake.swayDuration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <Snowflake style={{ width: flake.size, height: flake.size }} />
        </motion.div>
      ))}
    </>
  );
}