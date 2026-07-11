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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="fullName" value={values.fullName} error={errors.fullName} onChange={update} />
        <Field label="Business name" name="businessName" value={values.businessName} error={errors.businessName} onChange={update} />
        <Field label="Website URL" name="websiteUrl" value={values.websiteUrl} error={errors.websiteUrl} onChange={update} placeholder="https://example.com" />
        <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={update} />
        <Field label="Phone optional" name="phone" type="tel" value={values.phone} error={errors.phone} onChange={update} />
        <Field label="Country" name="country" value={values.country} error={errors.country} onChange={update} />
        <SelectField
          label="Business type"
          name="businessType"
          value={values.businessType}
          error={errors.businessType}
          onChange={update}
          options={["Restaurant", "Hotel", "Clinic", "Law firm", "Real estate", "Local service", "Ecommerce", "Other"]}
        />
        <SelectField
          label="Main goal"
          name="mainGoal"
          value={values.mainGoal}
          error={errors.mainGoal}
          onChange={update}
          options={["AI/search visibility", "New website", "Website redesign", "More leads", "Technical SEO", "Performance", "Booking flow"]}
        />
        <SelectField
          label="Budget range"
          name="budgetRange"
          value={values.budgetRange}
          error={errors.budgetRange}
          onChange={update}
          options={["EUR 490 - 1,000", "EUR 1,900 - 4,000", "EUR 4,000 - 8,000", "EUR 8,000+", "Need guidance"]}
        />
        <SelectField
          label="Preferred contact"
          name="preferredContact"
          value={values.preferredContact}
          error={errors.preferredContact}
          onChange={update}
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
          className={`field min-h-36 resize-y ${errors.message ? "field-error" : ""}`}
          placeholder="Tell us what you want the website to improve."
        />
        {errors.message ? <p className="mt-2 text-sm text-rose-300">{errors.message}</p> : null}
      </div>

      {hasErrors ? (
        <p className="mt-4 rounded-md border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          Please fix the highlighted fields before sending.
        </p>
      ) : null}

      {submitted ? (
        <div className="mt-4 flex items-start gap-3 rounded-md border border-signal-mint/30 bg-signal-mint/10 px-4 py-3 text-sm text-slate-100">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal-mint" aria-hidden="true" />
          <p>
            Thanks. Your consultation request is ready in the interface. A backend connection is still needed before production.
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
};

function Field({ label, name, value, error, onChange, type = "text", placeholder }: FieldProps) {
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
        onChange={(event) => onChange(name, event.target.value)}
        className={`field ${error ? "field-error" : ""}`}
      />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
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
};

function SelectField({ label, name, value, error, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
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
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}

