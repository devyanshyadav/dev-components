import React from 'react';
import Select from 'react-select';

type SelectProps = {
    options: { value: string; label: string }[];
    onChange?: (e: any) => void;
    defaultValues?: { value: string; label: string }[];
}
const DevMultiselectV1 = ({ options, onChange, defaultValues }: SelectProps) => {
    return (
        <div className='max-w-sm'>
            <Select
                defaultValue={defaultValues}
                isMulti
                options={options}
                onChange={(e) => onChange?.(e)}
                classNames={{
                    control: () => 'bg-rtlLight dark:bg-rtlDark !rounded-xl !border-accentNeon/70',
                    option: ({ isFocused, isSelected }) =>
                        `rounded-lg !cursor-pointer !p-1 !px-2 ${isSelected
                            ? `!bg-accentNeon text-white`
                            : isFocused
                            && `!bg-accentNeon/20 !text-accentNeon`
                        }`,
                    menu: () => '!bg-rtlLight dark:!bg-rtlDark !rounded-xl p-1.5',
                    menuList: () => 'space-y-1',
                    singleValue: () => `!text-black dark:!text-white`,
                    input: () => '!text-black dark:!text-white',
                    indicatorSeparator: () => 'hidden',
                    dropdownIndicator: () => '!text-accentNeon !cursor-pointer',
                    multiValue: () => '!bg-accentNeon/20 !rounded-lg !text-accentNeon',
                    multiValueLabel: () => '!text-accentNeon',
                    multiValueRemove: () => '!bg-accentNeon/20 !rounded-r-lg !text-accentNeon',
                }}
            />
        </div>
    )
}

export default DevMultiselectV1