"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface SideFormProps {
  open: boolean;
  setIsSideMenuOpen: (value: boolean) => void;
}

export default function SideForm({ open, setIsSideMenuOpen }: SideFormProps) {
  return (
    <Sheet open={open} onOpenChange={setIsSideMenuOpen}>
      <SheetContent style={{ width: "100%", maxWidth: "500px" }}>
        <VisuallyHidden>
          <DialogTitle>Formulaire de disponibilité</DialogTitle>
          <DialogDescription>
            Ici, vous pouvez ajouter un nouveau quart de travail ou une nouvelle
            absence
          </DialogDescription>
        </VisuallyHidden>
        <div>
          <div className="py-2 px-7  mr-6 flex gap-4 items-center border-b border-gray-100">
            <button onClick={() => setIsSideMenuOpen(false)}>
              <X strokeWidth={1.5} stroke="#9e9e9e" size={20} />
            </button>
            <p className="text-[26px] font-medium">Création d'un shift</p>
          </div>

          <div className="flex px-7 h-[80px] items-center justify-center">
            <div className="flex max-w-30 w-full">
              <div className="flex flex-1 h-10 border-l border-t border-b rounded-l-sm bg-[#e3e6f1] justify-center items-center">
                Shift
              </div>
              <div className="flex flex-1 h-10 border rounded-r-sm text-gray-500 justify-center items-center">
                Absence
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
