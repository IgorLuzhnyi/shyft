"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SectionsSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-gray-100 text-gray-300 rounded-sm">
        <SelectValue placeholder="Toutes les sections" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectItem value="section1">Section 1</SelectItem>
        <SelectItem value="section2">Section 2</SelectItem>
        <SelectItem value="section3">Section 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
