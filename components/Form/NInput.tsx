import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    Controller,
    useFormContext,
    type RegisterOptions,
} from "react-hook-form";

type Props = {
    type: string;
    name: string;
    placeholder: string;
    label?: string;
    autoComplete?: string;
    className?: string;
    labelClassName?: string;
    rules?: RegisterOptions;
};

const NInput = ({
    type,
    name,
    placeholder,
    label,
    autoComplete,
    className,
    labelClassName,
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

                    <Input
                        id={name}
                        type={type}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        className={cn(
                            "py-7 w-full border-none bg-gray-100 rounded-sm",
                            className,
                        )}
                        {...field}
                    />

                    {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                        </p>
                    )}
                </div>
            )}
        />
    );
};

export default NInput;
