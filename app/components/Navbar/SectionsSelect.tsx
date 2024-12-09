"use client";

import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SectionsSelect() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
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
    )
  );
}
