import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
    Controller,
    useFormContext,
    type RegisterOptions,
} from "react-hook-form";

type Props = {
    name: string;
    placeholder: string;
    label?: string;
    className?: string;
    labelClassName?: string;
    rows?: number;
    rules?: RegisterOptions;
};

const NTextArea = ({
    name,
    placeholder,
    label,
    className,
    labelClassName,
    rows,
    rules,
}: Props) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <div className="flex flex-col mb-4 w-full">
                    {label && (
                        <label
                            htmlFor={name}
                            className={cn("mb-1 font-medium text-sm", labelClassName)}
                        >
                            {label}
                        </label>
                    )}
                    <Textarea
                        id={name}
                        placeholder={placeholder}
                        rows={rows}
                        {...field}
                        className={cn("w-full", className)}
                    />
                    {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                    )}
                </div>
            )}
        />
    );
};

export default NTextArea;