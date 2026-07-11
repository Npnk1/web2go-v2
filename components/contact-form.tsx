"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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

function validate(values: FormState): Errors {
  const errors: Errors = {};

  requiredFields.forEach((field) => {
    if (!values[field].trim()) {
      errors[field] = "This field is required.";
    }
  });

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.websiteUrl) {
    try {
      const url = new URL(values.websiteUrl);
      if (!["http:", "https:"].includes(url.protocol)) {
        errors.websiteUrl = "Use a valid website URL.";
      }
    } catch {
      errors.websiteUrl = "Use a full URL, for example https://example.com.";
    }
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const update = (field: keyof FormState, value: string) => {
    setSubmitted(false);
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // TODO: Connect this form to an email or CRM backend such as Resend, Supabase, Formspree, or a custom API route.
    setSubmitted(true);
  };

  return (
    <form className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-card sm:p-6" onSubmit={onSubmit} noValidate>
      <div className="mb-6 border-b border-white/10 pb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-signal-cyan">
          Consultation request
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Share the business context, website, and main goal so the first recommendation can be practical.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="fullName" value={values.fullName} error={errors.fullName} onChange={update} autoComplete="name" required />
        <Field label="Business name" name="businessName" value={values.businessName} error={errors.businessName} onChange={update} autoComplete="organization" required />
        <Field label="Website URL" name="websiteUrl" type="url" value={values.websiteUrl} error={errors.websiteUrl} onChange={update} placeholder="https://example.com" autoComplete="url" required />
        <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={update} autoComplete="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={update} autoComplete="tel" />
        <Field label="Country" name="country" value={values.country} error={errors.country} onChange={update} autoComplete="country-name" required />
        <SelectField
          label="Business type"
          name="businessType"
          value={values.businessType}
          error={errors.businessType}
          onChange={update}
          required
          options={["Restaurant", "Hotel", "Clinic", "Law firm", "Real estate", "Local service", "Ecommerce", "Other"]}
        />
        <SelectField
          label="Main goal"
          name="mainGoal"
          value={values.mainGoal}
          error={errors.mainGoal}
          onChange={update}
          required
          options={["AI/search visibility", "New website", "Website redesign", "More leads", "Technical SEO", "Performance", "Booking flow"]}
        />
        <SelectField
          label="Budget range"
          name="budgetRange"
          value={values.budgetRange}
          error={errors.budgetRange}
          onChange={update}
          required
          options={["EUR 490 - 1,000", "EUR 1,900 - 4,000", "EUR 4,000 - 8,000", "EUR 8,000+", "Need guidance"]}
        />
        <SelectField
          label="Preferred contact"
          name="preferredContact"
          value={values.preferredContact}
          error={errors.preferredContact}
          onChange={update}
          required
          options={["Email", "Phone", "Video call", "WhatsApp"]}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
          Message
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
          placeholder="Tell us what you want the website to improve."
        />
        {errors.message ? <p id="message-error" className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
      </div>

      {hasErrors ? (
        <p role="alert" className="mt-4 rounded-md border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          Please fix the highlighted fields before sending.
        </p>
      ) : null}

      {submitted ? (
        <div role="status" className="mt-4 flex items-start gap-3 rounded-md border border-signal-mint/30 bg-signal-mint/10 px-4 py-3 text-sm text-slate-100">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-mint" aria-hidden="true" />
          <p>
            Thanks. Your request details are valid. Connect the production email or CRM backend before launch to deliver submissions to Web2Go.
          </p>
        </div>
      ) : null}

      <button type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto">
        <span>Request consultation</span>
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
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-200">
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
      {error ? <p id={errorId} className="mt-2 text-sm text-rose-300">{error}</p> : null}
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
  required?: boolean;
};

function SelectField({ label, name, value, error, onChange, options, required = false }: SelectFieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-200">
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
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p id={errorId} className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}

