import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type TFormConfig = {
  resolver: any;
  defaultValues?: Record<string, unknown>;
};

type TFormInputProps = {
  children: ReactNode;
  resolver?: any;
  defaultValues?: Record<string, unknown>;
  className?: string;
  onSubmit: SubmitHandler<any>;
  resetTrigger?: any;
};

const CustomForm = ({
  children,
  resolver,
  defaultValues,
  className,
  onSubmit,
  resetTrigger,
}: TFormInputProps) => {
  type TFormValue = z.infer<typeof resolver>;

  const formConfig: TFormConfig = {
    resolver,
  };
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const form = useForm<TFormValue>(formConfig);

  const submit: SubmitHandler<TFormValue> = (data) => {
    onSubmit(data);
    if (defaultValues) {
      form.reset(defaultValues);
    } else {
      form.reset();
    }
  };

  // Use useEffect to reset the form when resetTrigger changes
  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, resetTrigger, form]);

  return (
    <Form {...form}>
      <form className={cn("w-full", className)} onSubmit={form.handleSubmit(submit)}>
        {children}
      </form>
    </Form>
  );
};

export default CustomForm;
