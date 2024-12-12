import { Shift } from "@/app/types/types";
import { useDraggable } from "@dnd-kit/core";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Clock, CirclePause } from "lucide-react";
import { FaRegMoneyBillAlt } from "react-icons/fa";

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
    <ContextMenu>
      <ContextMenuTrigger style={{ width: "100%" }}>
        <div
          ref={setNodeRef}
          {...listeners}
          {...attributes}
          className={`py-2 px-3 w-full rounded-md ${shift.shiftType.title === "Fermeture" ? "bg-[#f8f9ff]" : "bg-[#eefca1]"}`}
          style={style}
        >
          <p className="text-sm">{shift.time}</p>
          <div className="mt-[2px] flex items-center gap-2">
            <p className="flex items-center gap-[2px] text-xs text-gray-500">
              <Clock strokeWidth={1.4} size={12} />
              {shift.paidHours}
            </p>
            <p className="flex items-center gap-[2px] text-xs text-gray-500">
              <CirclePause strokeWidth={1.4} size={12} />
              {shift.unpaidHours}
            </p>
            <p className="flex items-center gap-[2px] text-xs text-gray-500">
              <FaRegMoneyBillAlt size={14} />
              {shift.rate}
            </p>
          </div>
          <p
            className={`mt-[4px] px-2 py-1 w-full text-[10px] rounded-md font-bold bg-[${shift.shiftType.bgColor}]`}
          >
            {shift.shiftType.title}
          </p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="cursor-pointer">Modifier</ContextMenuItem>
        <ContextMenuItem className="cursor-pointer">Supprimer</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
