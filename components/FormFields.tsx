import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-ink-700 mb-1.5"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full px-4 py-2.5 rounded-btn border text-ink-900 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500',
          error
            ? 'border-red-300 bg-red-50'
            : 'border-ink-200 bg-white hover:border-ink-400',
          'disabled:bg-ink-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-ink-400">{helperText}</p>
      )}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export function Select({
  label,
  error,
  helperText,
  options,
  className,
  id,
  ...props
}: SelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-semibold text-ink-700 mb-1.5"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          'w-full px-4 py-2.5 rounded-btn border text-ink-900 transition-colors appearance-none bg-white',
          'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500',
          error
            ? 'border-red-300 bg-red-50'
            : 'border-ink-200 hover:border-ink-400',
          'disabled:bg-ink-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1.5 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-ink-400">{helperText}</p>
      )}
    </div>
  );
}

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

export function Checkbox({ label, helperText, className, id, ...props }: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={checkboxId}
          type="checkbox"
          className={cn(
            'w-5 h-5 rounded border-ink-300 text-brand-500',
            'focus:ring-2 focus:ring-brand-500 focus:ring-offset-0',
            'transition-colors cursor-pointer',
            className
          )}
          {...props}
        />
      </div>
      <div className="ml-3">
        <label htmlFor={checkboxId} className="font-semibold text-ink-800 cursor-pointer">
          {label}
        </label>
        {helperText && (
          <p className="text-sm text-ink-400 mt-0.5">{helperText}</p>
        )}
      </div>
    </div>
  );
}
