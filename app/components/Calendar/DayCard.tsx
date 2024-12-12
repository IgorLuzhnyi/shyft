import { useDroppable } from "@dnd-kit/core";
import { Day, Shift } from "@/app/types/types";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
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
    <ContextMenu>
      <ContextMenuTrigger>
        <div
          ref={setNodeRef}
          className="h-full p-2 border-t border-r flex flex-col gap-y-2 justify-center items-center"
        >
          {shifts.map((shift) => (
            <ShiftCard key={shift.shiftId} shift={shift} />
          ))}
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="cursor-pointer">
          Créer un changement
        </ContextMenuItem>
        <ContextMenuItem className="cursor-pointer">
          Ajouter une absence
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
