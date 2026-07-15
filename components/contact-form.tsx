"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/locales";
import type { Messages } from "@/i18n/types";

type FormState = {
  fullName: string;
  businessName: string;
  websiteUrl: string;
  email: string;
  phone: string;
  country: string;
  businessType: string;
  mainGoal: string;
  budgetRange: string;
  preferredContact: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type FormStatus = "idle" | "submitting" | "success" | "development" | "error";

const initialState: FormState = {
  fullName: "",
  businessName: "",
  websiteUrl: "",
  email: "",
  phone: "",
  country: "",
  businessType: "",
  mainGoal: "",
  budgetRange: "",
  preferredContact: "",
  message: ""
};

const requiredFields: Array<keyof FormState> = [
  "fullName",
  "businessName",
  "websiteUrl",
  "email",
  "country",
  "businessType",
  "mainGoal",
  "budgetRange",
  "preferredContact",
  "message"
];

function validate(values: FormState, copy: Messages["form"]): Errors {
  const errors: Errors = {};

  requiredFields.forEach((field) => {
    if (!values[field].trim()) {
      errors[field] = copy.validation.required;
    }
  });

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = copy.validation.email;
  }

  if (values.websiteUrl) {
    try {
      const url = new URL(values.websiteUrl);
      if (!["http:", "https:"].includes(url.protocol)) {
        errors.websiteUrl = copy.validation.urlProtocol;
      }
    } catch {
      errors.websiteUrl = copy.validation.urlFull;
    }
  }

  return errors;
}

export function ContactForm({
  locale,
  copy
}: {
  locale: Locale;
  copy: Messages["form"];
}) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);
  const isSubmitting = status === "submitting";

  const update = (field: keyof FormState, value: string) => {
    setStatus("idle");
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values, copy);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...values, locale })
      });
      const result = (await response.json().catch(() => ({}))) as { mode?: string };

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus(result.mode === "development" ? "development" : "success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="rounded-[14px] border border-ink-950/15 bg-white p-5 shadow-lift sm:p-8" onSubmit={onSubmit} noValidate>
      <div className="mb-7 border-b border-ink-950/10 pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-cobalt-500">
          {copy.title}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-600">
          {copy.intro}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={copy.fields.fullName.label} name="fullName" value={values.fullName} error={errors.fullName} onChange={update} autoComplete="name" required />
        <Field label={copy.fields.businessName.label} name="businessName" value={values.businessName} error={errors.businessName} onChange={update} autoComplete="organization" required />
        <Field label={copy.fields.websiteUrl.label} name="websiteUrl" type="url" value={values.websiteUrl} error={errors.websiteUrl} onChange={update} placeholder={copy.fields.websiteUrl.placeholder} autoComplete="url" required />
        <Field label={copy.fields.email.label} name="email" type="email" value={values.email} error={errors.email} onChange={update} autoComplete="email" required />
        <Field label={copy.fields.phone.label} name="phone" type="tel" value={values.phone} error={errors.phone} onChange={update} autoComplete="tel" />
        <Field label={copy.fields.country.label} name="country" value={values.country} error={errors.country} onChange={update} autoComplete="country-name" required />
        <SelectField
          label={copy.fields.businessType.label}
          name="businessType"
          value={values.businessType}
          error={errors.businessType}
          onChange={update}
          required
          placeholder={copy.selectPlaceholder}
          options={copy.options.businessType}
        />
        <SelectField
          label={copy.fields.mainGoal.label}
          name="mainGoal"
          value={values.mainGoal}
          error={errors.mainGoal}
          onChange={update}
          required
          placeholder={copy.selectPlaceholder}
          options={copy.options.mainGoal}
        />
        <SelectField
          label={copy.fields.budgetRange.label}
          name="budgetRange"
          value={values.budgetRange}
          error={errors.budgetRange}
          onChange={update}
          required
          placeholder={copy.selectPlaceholder}
          options={copy.options.budgetRange}
        />
        <SelectField
          label={copy.fields.preferredContact.label}
          name="preferredContact"
          value={values.preferredContact}
          error={errors.preferredContact}
          onChange={update}
          required
          placeholder={copy.selectPlaceholder}
          options={copy.options.preferredContact}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink-700">
          {copy.fields.message.label}
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`field min-h-36 resize-y ${errors.message ? "field-error" : ""}`}
          placeholder={copy.fields.message.placeholder}
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-rose-700">{errors.message}</p> : null}
      </div>

      {hasErrors ? (
        <p role="alert" className="mt-4 rounded-md border border-rose-500/30 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {copy.validation.formError}
        </p>
      ) : null}

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-md border border-rose-500/30 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          {copy.validation.serverError}
        </p>
      ) : null}

      {status === "success" || status === "development" ? (
        <div role="status" aria-live="polite" className="mt-4 flex items-start gap-3 rounded-md border border-emerald-600/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
          <p>{status === "development" ? copy.developmentSuccess : copy.success}</p>
        </div>
      ) : null}

      <button type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto" disabled={isSubmitting}>
        <span>{isSubmitting ? copy.submitting : copy.submit}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  error?: string;
  onChange: (name: keyof FormState, value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
};

function Field({ label, name, value, error, onChange, type = "text", placeholder, autoComplete, required = false }: FieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(name, event.target.value)}
        className={`field ${error ? "field-error" : ""}`}
      />
      {error ? <p id={errorId} className="mt-2 text-sm text-rose-700">{error}</p> : null}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: keyof FormState;
  value: string;
  error?: string;
  onChange: (name: keyof FormState, value: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
};

function SelectField({ label, name, value, error, onChange, options, placeholder, required = false }: SelectFieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ink-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(name, event.target.value)}
        className={`field ${error ? "field-error" : ""}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p id={errorId} className="mt-2 text-sm text-rose-700">{error}</p> : null}
    </div>
  );
}
