import React from 'react';
import Select from 'react-select';

const DevMultiselectV1 = ({ options, onChange, defaultValues }) => {
    return (
        <div className='max-w-sm'>
            <Select
                defaultValue={defaultValues}
                isMulti
                options={options}
                onChange={(e) => onChange?.(e)}
                classNames={{
                    control: () => 'bg-LIGHT dark:bg-DARK !rounded-xl !border-ACCENT/70',
                    option: ({ isFocused, isSelected }) =>
                        `rounded-lg !cursor-pointer !p-1 !px-2 ${isSelected
                            ? `!bg-ACCENT text-white`
                            : isFocused
                            && `!bg-ACCENT/20 !text-ACCENT`
                        }`,
                    menu: () => '!bg-LIGHT dark:!bg-DARK !rounded-xl p-1.5',
                    menuList: () => 'space-y-1',
                    singleValue: () => `!text-black dark:!text-white`,
                    input: () => '!text-black dark:!text-white',
                    indicatorSeparator: () => 'hidden',
                    dropdownIndicator: () => '!text-ACCENT !cursor-pointer',
                    multiValue: () => '!bg-ACCENT/20 !rounded-lg !text-ACCENT',
                    multiValueLabel: () => '!text-ACCENT',
                    multiValueRemove: () => '!bg-ACCENT/20 !rounded-r-lg !text-ACCENT',
                }}
            />
        </div>
    )
}

export default DevMultiselectV1