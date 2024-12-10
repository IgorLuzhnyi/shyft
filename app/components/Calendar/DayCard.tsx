import { useDroppable } from "@dnd-kit/core";
import { Shift } from "@/app/types/types";
import ShiftCard from "./ShiftCard";

interface DayCardProps {
  day: string;
  shifts: Shift[];
}

export default function DayCard({ day, shifts }: DayCardProps) {
  const { setNodeRef } = useDroppable({
    id: day,
  });

  return (
    <div
      ref={setNodeRef}
      className="py-2 border-t border-r p-2 flex justify-center items-center"
    >
      {shifts.map((shift) => (
        <ShiftCard key={shift.shiftId} shift={shift} />
      ))}
    </div>
  );
}
