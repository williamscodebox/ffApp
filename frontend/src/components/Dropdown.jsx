import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sidebar } from "lucide-react";

const Dropdown = ({ onSelectWeek }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleSelectWeek = (week) => {
    setSelectedWeek(week);
    onSelectWeek(week); // Pass the week up to parent for query logic
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Pick A Week</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {[...Array(18)].map((_, i) => (
          <DropdownMenuItem key={i} onClick={() => handleSelectWeek(i)}>
            Week {i + 1}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
