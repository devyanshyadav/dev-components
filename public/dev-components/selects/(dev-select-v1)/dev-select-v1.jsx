import React from 'react';
import Select from 'react-select';

const DevSelectV1 = ({ options, onChange, defaultValue }) => {
  return (
    <div className="w-64">
      <Select
        defaultValue={defaultValue}
        options={options}
        onChange={(e) => onChange?.(e)}
        classNames={{
          control: () => 'bg-rtlLight dark:bg-rtlDark !rounded-xl !border-accentNeon/70',
          option: ({ isFocused, isSelected }) =>
            `rounded-lg !cursor-pointer !p-1 !px-2 ${isSelected
              ? `!bg-accentNeon text-white`
              : isFocused
              && `!bg-accentNeon/20 !text-accentNeon`}`,
          menu: () => '!bg-rtlLight dark:!bg-rtlDark !rounded-xl p-1.5',
          menuList: () => 'space-y-1',
          singleValue: () => `!text-black dark:!text-white`,
          input: () => '!text-black dark:!text-white',
          indicatorSeparator: () => 'hidden',
          dropdownIndicator: () => '!text-accentNeon !cursor-pointer',
        }}
      />
    </div>
  );
};

export default DevSelectV1;