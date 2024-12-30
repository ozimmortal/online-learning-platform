"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command as CommandPrimitive } from "cmdk";

const countries = [
  { value: "us", label: "New York, United States" },
  { value: "uk", label: "London, United Kingdom" },
  { value: "ca", label: "Toronto, Canada" },
  { value: "au", label: "Sydney, Australia" },
  { value: "de", label: "Berlin, Germany" },
  { value: "fr", label: "Paris, France" },
  { value: "jp", label: "Tokyo, Japan" },
  { value: "sg", label: "Singapore" },
  { value: "in", label: "Mumbai, India" },
  { value: "br", label: "São Paulo, Brazil" },
] as const;

export function LocationInput() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");

  const filteredCountries = React.useMemo(() => {
    if (!search) return countries;
    return countries.filter((country) =>
      country.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? countries.find((country) => country.value === value)?.label
            : "Select location..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <div className="border-b p-2">
          <input
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
            placeholder="Search location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {filteredCountries.length === 0 ? (
            <p className="p-4 text-sm text-muted-foreground">No location found.</p>
          ) : (
            filteredCountries.map((country) => (
              <div
                key={country.value}
                className={cn(
                  "flex cursor-pointer items-center px-4 py-2 hover:bg-accent",
                  value === country.value && "bg-accent"
                )}
                onClick={() => {
                  setValue(country.value);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === country.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {country.label}
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}