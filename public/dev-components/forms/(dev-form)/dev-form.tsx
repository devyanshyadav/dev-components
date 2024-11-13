"use client";

import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useState,
} from "react";

// Types and Interfaces
interface ValidationRule {
  required?: string | boolean;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: (value: any, allValues: Record<string, string>) => string | any;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

interface FormInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "ref" | "className"
  > {
  type?: string;
  label?: string;
  error?: string;
  classNames?: {
    mainContainer?: string;
    inputContainer?: string;
  };
  name: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DevFormProps {
  children: React.ReactNode;
  onSubmit?: (
    result: {
      values: Record<string, string> | null;
      errors: Record<string, string> | null;
    },
    e: React.FormEvent
  ) => void;
  validationRules?: ValidationRules;
  className?: string;
}

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

// FormInput Component remains the same
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      type = "text",
      label,
      error,
      icon,
      classNames = { mainContainer: "", inputContainer: "" },
      onChange,
      name,
      children,
      ...props
    },
    ref
  ) => {
    const commonStyle = cn(
      "w-full p-1 rounded-md flex border border-ACCENT transition-all ring-ACCENT/50 items-center",
      children ? "!hidden" : "",
      icon ? "gap-2" : ""
    );
    return (
      <div>
        <div className={cn(classNames.mainContainer)}>
          {label && (
            <label htmlFor={label} className="text-sm block m-1">
              {label}
            </label>
          )}

          <div
            className={cn(
              "has-[:focus]:ring",
              commonStyle,
              classNames.inputContainer
            )}
          >
            {icon && <span className="text-xl text-ACCENT]">{icon}</span>}
            <input
              ref={ref}
              id={label && label}
              type={type}
              name={name}
              {...props}
              className="focus:bg-transparent p-1 bg-transparent rounded-md accent-ACCENT text-sm outline-0 w-full"
            />
          </div>
          {children}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

// Modified DevForm Component
const DevForm: React.FC<DevFormProps> = ({
  children,
  onSubmit,
  validationRules = {},
  className = "",
  ...props
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (values: Record<string, any>): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    Object.keys(validationRules).forEach((field) => {
      const rules = validationRules[field];
      const value = values[field];

      if (rules.required) {
        if (
          value === undefined ||
          value === null ||
          (typeof value === "string" && value.trim() === "") ||
          (Array.isArray(value) && value.length === 0)
        ) {
          newErrors[field] =
            typeof rules.required === "string"
              ? rules.required
              : "This field is required";
        }
      }

      if (
        rules.minLength &&
        typeof value === "string" &&
        value.length < rules.minLength.value
      ) {
        newErrors[field] = rules.minLength.message;
      }

      if (
        rules.maxLength &&
        typeof value === "string" &&
        value.length > rules.maxLength.value
      ) {
        newErrors[field] = rules.maxLength.message;
      }

      if (
        rules.pattern &&
        typeof value === "string" &&
        !rules.pattern.value.test(value)
      ) {
        newErrors[field] = rules.pattern.message;
      }

      if (rules.validate) {
        const customError = rules.validate(value, values);
        if (customError) {
          newErrors[field] = customError;
        }
      }
    });

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (onSubmit) {
      if (Object.keys(validationErrors).length === 0) {
        onSubmit({ values, errors: null }, e);
      } else {
        onSubmit({ values: null, errors: validationErrors }, e);
      }
    }
  };

  const renderChildren = useCallback(() => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;

      if (child.type === FormInput) {
        return React.cloneElement(child, {
          ...child.props,
          error: errors[child.props.name],
        });
      }

      return React.cloneElement(child, {
        ...child.props,
        children: React.Children.map(child.props.children, (grandchild) => {
          if (
            !React.isValidElement(grandchild) ||
            grandchild.type !== FormInput
          ) {
            return grandchild;
          }

          return React.cloneElement(grandchild, {
            ...(grandchild.props as ComponentProps<typeof grandchild.type>),
            error: errors[(grandchild as React.ReactElement).props.name],
          });
        }),
      });
    });
  }, [children, errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      {...props}
    >
      {renderChildren()}
    </form>
  );
};

export { DevForm, FormInput };