import { Input } from "@/components/ui/input"
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Control, FieldPath} from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
    control:Control<z.infer<typeof formSchema>>;
    name:FieldPath<z.infer<typeof formSchema>>;
    label:string;
    placeholder:string;

}

export default function CustomInput({control,name,label,placeholder}:CustomInputProps) {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
        <div className="form-item">
            <FormLabel htmlFor={name} className="form-label">{label}</FormLabel>
            <div className="flex w-full flex-col">
                <FormControl>
                    <Input {...field} type={name} id={name} placeholder={placeholder} className="input-class"/>
                </FormControl>
            <FormMessage {...field} className="form-message mt-2"/>
            </div>
        </div>
    )}
    />
  )
}
