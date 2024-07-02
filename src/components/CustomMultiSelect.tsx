"use client";

import MultipleSelector from "@/components/ui/MultiSelector";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

type TCustomMultiSelectProps = {
  options?: { label: string; value: string }[];
  placeholder?: string;
  label?: string;
  name: string;
  className?: string;
  loading?: boolean;
  creatable?: boolean;
};

const CustomMultiSelect = ({
  options,
  placeholder,
  label,
  className,
  loading,
  name,
  creatable,
}: TCustomMultiSelectProps) => {
  const { control } = useFormContext();

  return (
    <div className={cn("w-full", className)}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <MultipleSelector
                {...field}
                disabled={loading}
                creatable={creatable}
                //defaultOptions={options}
                placeholder={placeholder}
                value={options}
                badgeClassName='text-white'
                className={cn("w-full focus:!ring-primary", className)}
                //emptyIndicator={
                //  <p className='text-center text-lg leading-10 text-gray-600 dark:text-gray-400'>
                //    no results found.
                //  </p>
                //}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomMultiSelect;
