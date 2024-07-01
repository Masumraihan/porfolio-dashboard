import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

type TCustomSelectProps = {
  defaultValue?: string;
  options: { name: string; value: string }[];
  placeholder?: string;
  label?: string;
  name: string;
  className?: string;
  loading?: boolean;
};

const CustomSelect = ({
  defaultValue,
  options,
  placeholder,
  label,
  name,
  className,
  loading,
}: TCustomSelectProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-2 w-full", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={loading}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage className='text-red' />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
