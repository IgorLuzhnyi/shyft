import { useDroppable } from "@dnd-kit/core";
import { Day, Shift } from "@/app/types/types";
import ShiftCard from "./ShiftCard";

interface DayCardProps {
  day: Day;
  shifts: Shift[];
}

export default function DayCard({ day, shifts }: DayCardProps) {
  const { setNodeRef } = useDroppable({
    id: day.title,
  });

  return (
    <div
      ref={setNodeRef}
      className="p-2 border-t border-r flex flex-col gap-y-2 justify-center items-center"
    >
      {shifts.map((shift) => (
        <ShiftCard key={shift.shiftId} shift={shift} />
      ))}
    </div>
  );
}
