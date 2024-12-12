"use client";

import { useCalendarContext } from "@/app/contexts/calendarContext";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SHIFT_TYPES } from "@/app/constants/dummyData";
import { Button } from "@/components/ui/button";

interface SideFormProps {
  open: boolean;
  setIsSideMenuOpen: (value: boolean) => void;
}

export default function SideForm({ open, setIsSideMenuOpen }: SideFormProps) {
  const { employees } = useCalendarContext();

  return (
    <Sheet open={open} onOpenChange={setIsSideMenuOpen}>
      <SheetContent style={{ width: "100%", maxWidth: "560px" }}>
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

          <div className="py-2 px-7">
            <div className="flex h-[70px] items-center justify-center">
              <div className="flex max-w-30 w-full">
                <div className="flex flex-1 h-10 border-l border-t border-b rounded-l-sm bg-[#e3e6f1] justify-center items-center">
                  Shift
                </div>
                <div className="flex flex-1 h-10 border rounded-r-sm text-gray-500 justify-center items-center">
                  Absence
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 font-medium">Section</p>
              <Select>
                <SelectTrigger className="w-full h-[42px] bg-[#f6f8fc] text-gray-300 rounded-sm">
                  <SelectValue placeholder="Choicir une section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="section1">Section 1</SelectItem>
                  <SelectItem value="section2">Section 2</SelectItem>
                  <SelectItem value="section3">Section 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4">
              <p className="mb-3 font-medium">Utilisateur</p>
              <Select>
                <SelectTrigger className="w-full justify-between h-[42px] bg-[#f6f8fc] text-gray-300 rounded-sm">
                  <SelectValue placeholder="Choisir un utilisateur" />
                </SelectTrigger>
                <SelectContent>
                  {employees.map((employee) => (
                    <SelectItem key={employee.userId} value={employee.userId}>
                      <div className="flex">
                        <p className="w-full justify">
                          {employee.firstName} {employee.lastName}
                        </p>
                        {/* <div className="flex gap-2 w-full justify-end ">
                          <p>H.SEM</p>
                          <p>63.5/38h</p>
                          </div> */}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4">
              <p className="mb-3 font-medium">Competences</p>
              <Select>
                <SelectTrigger className="w-full h-[42px] bg-[#f6f8fc] text-gray-300 rounded-sm">
                  <SelectValue placeholder="Choicir une competences" />
                </SelectTrigger>
                <SelectContent>
                  {SHIFT_TYPES.map((shiftType) => (
                    <SelectItem key={shiftType.title} value={shiftType.title}>
                      {shiftType.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4">
              <p className="mb-3 font-medium">Attributs</p>
              <Select>
                <SelectTrigger className="w-full h-[42px] bg-[#f6f8fc] text-gray-300 rounded-sm">
                  <SelectValue placeholder="Choicir une attribut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="attribut1">Attribut 1</SelectItem>
                  <SelectItem value="attribut2">Attribut 2</SelectItem>
                  <SelectItem value="attribut3">Attribut 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 flex gap-3">
              <div>
                <p className="mb-3 font-medium">
                  <span
                    style={{
                      color: "red",
                      fontSize: "10px",
                      verticalAlign: "4px",
                    }}
                  >
                    *
                  </span>{" "}
                  Debut
                </p>
                <input
                  type="text"
                  readOnly
                  value="8:00"
                  className="outline-none border h-[42px] px-4 rounded-sm bg-[#f6f8fc] w-20"
                />
              </div>
              <div>
                <p className="mb-3 font-medium">
                  <span
                    style={{
                      color: "red",
                      fontSize: "10px",
                      verticalAlign: "4px",
                    }}
                  >
                    *
                  </span>{" "}
                  Fin
                </p>
                <input
                  type="text"
                  readOnly
                  value="17:00"
                  className="outline-none border h-[42px] px-4 rounded-sm bg-[#f6f8fc] w-20"
                />
              </div>
              <div>
                <p className="mb-3 font-medium">Raccourcis</p>
                <Select>
                  <SelectTrigger className="w-48 h-[42px] bg-[#f6f8fc] text-gray-300 rounded-sm">
                    <SelectValue placeholder="Raccourcis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="raccourcis1">Raccourcis 1</SelectItem>
                    <SelectItem value="raccourcis2">Raccourcis 2</SelectItem>
                    <SelectItem value="raccourcis3">Raccourcis 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <div className="flex1">
                <p className="mb-3 font-medium">Pause payee</p>
                <input
                  type="text"
                  readOnly
                  value=""
                  className="outline-none border h-[42px] px-4 rounded-sm bg-[#f6f8fc] w-40"
                />
              </div>
              <div className="flex1">
                <p className="mb-3 font-medium">Pause non payee</p>
                <input
                  type="text"
                  readOnly
                  value="00:30"
                  className="outline-none border h-[42px] px-4 rounded-sm bg-[#f6f8fc] w-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-3 font-medium">Code special RH</p>
              <Select>
                <SelectTrigger className="w-full h-[42px] bg-[#f6f8fc] text-gray-300 rounded-sm">
                  <SelectValue placeholder="Choicir une section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="code1">Code 1</SelectItem>
                  <SelectItem value="code2">Code 2</SelectItem>
                  <SelectItem value="code3">Code 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-6 flex gap-2 items-center">
              <Checkbox className="border-gray-300 hover:bg-gray-200" />
              <p className="text-sm font-medium">
                Shift non comptabilise dans les heures prestees
              </p>
            </div>
          </div>

          <div
            className="absolute px-8 z-[9999] bottom-0 w-full h-[130px] flex flex-col gap-y-3 justify-center items-center"
            style={{ boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="px-8">
              <p className="text-sm font-[600]">
                • Depassement des heures hebdomadaires maximales de 38h. (+34
                h.)
              </p>
            </div>
            <div className="flex w-full gap-x-3">
              <Button className="flex-1 py-6 rounded-sm bg-[#d13033] hover:bg-[#bb3b3d]">
                Annuler
              </Button>
              <Button className="flex-1 py-6 rounded-sm bg-[#00a653] hover:bg-[#37ca81]">
                Creer shift
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
