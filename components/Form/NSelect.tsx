import { cn } from "@/lib/utils";
import {
    Controller,
    useFormContext,
    type RegisterOptions,
} from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    name: string;
    placeholder?: string;
    label?: string;
    items: { label: string; value: string }[];
    className?: string;
    labelClassName?: string;
    contentClassName?: string;
    rules?: RegisterOptions;
};

const NSelect = ({
    name,
    placeholder,
    label,
    items,
    className,
    labelClassName,
    contentClassName,
    rules,
}: Props) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <div className="flex flex-col mb-4">
                    {label && (
                        <label
                            htmlFor={name}
                            className={cn("mb-1 font-medium text-sm", labelClassName)}
                        >
                            {label}
                        </label>
                    )}
                    <div>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value || undefined}
                        >
                            <SelectTrigger
                                id={name}
                                className={cn("w-full py-5", className)}
                            >
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent className={contentClassName}>
                                <SelectGroup>
                                    {items.map((opt) => (
                                        <SelectItem key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {fieldState.error && (
                        <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                    )}
                </div>
            )}
        />
    );
};

export default NSelect;
