import { Shift } from "@/app/types/types";
import { useDraggable } from "@dnd-kit/core";

interface ShiftCardProps {
  shift: Shift;
}

export default function ShiftCard({ shift }: ShiftCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: shift.shiftId,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-2 rounded-sm bg-yellow-200"
      style={style}
    >
      <p>{shift.time}</p>
      <p>{shift.compensation}</p>
    </div>
  );
}
