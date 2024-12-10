import React from "react";

interface ShiftCardProps {
  time: string;
  compensation: string;
}

export default function ShiftCard({ time, compensation }: ShiftCardProps) {
  return (
    <div>
      <p>{time}</p>
      <p>{compensation}</p>
    </div>
  );
}
