import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type TFormInputProps = {
  loading?: boolean;
  type: string;
  label?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
  accept?: string;
  className?: string;
  id?: string;
};

const CustomInput = ({
  loading,
  type,
  label,
  placeholder,
  name,
  defaultValue,
  accept,
  className,
  id,
}: TFormInputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel className=''>{label}</FormLabel>
          <FormControl>
            <Input
              className={cn("w-full focus:!ring-primary", className)}
              spellCheck={true}
              lang='en'
              type={type}
              placeholder={placeholder}
              disabled={loading}
              {...field}
              accept={accept}
              id={id}
            />
          </FormControl>
          <FormMessage className='text-red' />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
