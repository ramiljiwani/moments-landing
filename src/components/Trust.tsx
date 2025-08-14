import React from "react";
import { Camera, Heart, Users, ShieldCheck } from "lucide-react";
import { theme } from "../lib/theme";
import { Button } from "./Button";

export const Trust = () => (
  <section className="mt-28">
    <div className="mx-auto max-w-6xl px-5" style={{ justifyContent: 'center' }}>
      <div className="grid grid-cols-2 gap-6 rounded-3xl p-6 md:grid-cols-4" style={{ border: `1px solid ${theme.colors.text}14`, background: '#FFFFFF07' }}>
        <div className="text-sm opacity-70 flex items-center gap-2"><Camera size={16}/> Capture in-app</div>
        <div className="text-sm opacity-70 flex items-center gap-2"><Users size={16}/> Event join codes</div>
        <div className="text-sm opacity-70 flex items-center gap-2"><Heart size={16}/> Likes, not clout</div>
        <div className="text-sm opacity-70 flex items-center gap-2"><ShieldCheck size={16}/> Private by design</div>
      </div>
    </div>
  </section>
);
