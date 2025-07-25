
import React from "react";

const brands = [
  "toa", "jabra", "barco", "mipro", "datavideo",
  "audiotechnica", "yamaha", "aver", "lg", "samsung"
];

export default function BrandShowcase() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 bg-slate-50">
      {brands.map(name => (
        <div key={name} className="bg-white p-4 rounded-2xl shadow text-center">
          <img src={`/public/assets/brands/${name}.png`} alt={name} className="max-h-20 mx-auto object-contain" />
        </div>
      ))}
    </div>
  );
}
