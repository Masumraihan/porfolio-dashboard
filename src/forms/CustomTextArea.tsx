import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type TFormInputProps = {
  loading?: boolean;
  label?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  cols?: number;
  className?: string;
};

const CustomTextArea = ({
  loading,
  label,
  placeholder,
  name,
  defaultValue,
  rows,
  cols,
  className,
}: TFormInputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              className='focus:!ring-primary w-full'
              placeholder={placeholder}
              disabled={loading}
              rows={rows}
              cols={cols}
              {...field}
            />
          </FormControl>
          <FormMessage className='text-red' />
        </FormItem>
      )}
    />
  );
};

export default CustomTextArea;
