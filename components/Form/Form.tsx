/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { useForm, FormProvider, SubmitHandler, FieldValues } from 'react-hook-form';

type TConfigProps = {
    resolver?: any;
    defaultValues?: Record<string, any>;
}

type Props = {
    children: ReactNode;
    onSubmit: (data: FieldValues) => void | boolean | Promise<void | boolean>;
    resetOnSuccess?: boolean;
} & TConfigProps;

const Form = ({
    children,
    onSubmit,
    resolver,
    defaultValues,
    resetOnSuccess = false,
}: Props) => {
    const formConfig: TConfigProps = {};
    if (resolver) {
        formConfig['resolver'] = resolver;
    }

    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }

    const methods = useForm<FieldValues>(formConfig);

    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (onSubmit) {
            const succeeded = await onSubmit(data);
            if (resetOnSuccess && succeeded === true) {
                methods.reset();
            }
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default Form;
