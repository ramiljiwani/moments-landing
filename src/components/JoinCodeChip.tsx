import React, { useEffect, useState } from "react";
import { theme } from "../lib/theme";

export const JoinCodeChip = () => {
  const codes = ["M8NT5", "FRI35", "PICZ1", "EVNT5", "M0MNT"];
  const [i, setI] = useState(0);
  
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % codes.length), 1400);
    return () => clearInterval(t);
  }, [codes.length]);
  
  return (
    <span className="ml-2 inline-flex items-center rounded-md px-2 py-0.5 text-[11px] tracking-wider"
      style={{ background: '#FFFFFF12', color: theme.colors.secondary, border: '1px solid #FFFFFF22' }}
    >
      {codes[i]}
    </span>
  );
};
