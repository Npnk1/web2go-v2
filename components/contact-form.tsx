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
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const clearError = (field: keyof FormState) => {
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
    const formData = new FormData(event.currentTarget);
    const values = { ...initialState };

    (Object.keys(values) as Array<keyof FormState>).forEach((field) => {
      values[field] = String(formData.get(field) ?? "");
    });

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
    <form className="rounded-lg border border-white/10 bg-white p-5 text-slate-950 shadow-xl shadow-black/20 sm:p-6" onSubmit={onSubmit} noValidate>
      <div className="mb-6 border-b border-slate-200 pb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
          Consultation request
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Tell us enough to understand the website, goal, and likely scope.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="fullName" error={errors.fullName} onChange={clearError} />
        <Field label="Business name" name="businessName" error={errors.businessName} onChange={clearError} />
        <Field label="Website URL" name="websiteUrl" error={errors.websiteUrl} onChange={clearError} placeholder="https://example.com" />
        <Field label="Email" name="email" type="email" error={errors.email} onChange={clearError} />
        <Field label="Phone optional" name="phone" type="tel" error={errors.phone} onChange={clearError} />
        <Field label="Country" name="country" error={errors.country} onChange={clearError} />
        <SelectField
          label="Business type"
          name="businessType"
          error={errors.businessType}
          onChange={clearError}
          options={["Restaurant", "Hotel", "Clinic", "Law firm", "Real estate", "Local service", "Ecommerce", "Other"]}
        />
        <SelectField
          label="Main goal"
          name="mainGoal"
          error={errors.mainGoal}
          onChange={clearError}
          options={["AI/search visibility", "New website", "Website redesign", "More leads", "Technical SEO", "Performance", "Booking flow"]}
        />
        <SelectField
          label="Budget range"
          name="budgetRange"
          error={errors.budgetRange}
          onChange={clearError}
          options={["EUR 490 - 1,000", "EUR 1,900 - 4,000", "EUR 4,000 - 8,000", "EUR 8,000+", "Need guidance"]}
        />
        <SelectField
          label="Preferred contact"
          name="preferredContact"
          error={errors.preferredContact}
          onChange={clearError}
          options={["Email", "Phone", "Video call", "WhatsApp"]}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={() => clearError("message")}
          rows={5}
          className={`field min-h-36 resize-y ${errors.message ? "field-error" : ""}`}
          placeholder="Tell us what you want the website to improve."
        />
        {errors.message ? <p className="mt-2 text-sm text-rose-700">{errors.message}</p> : null}
      </div>

      {hasErrors ? (
        <p className="mt-4 rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
          Please fix the highlighted fields before sending.
        </p>
      ) : null}

      {submitted ? (
        <div className="mt-4 flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
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
  error?: string;
  onChange: (name: keyof FormState) => void;
  type?: string;
  placeholder?: string;
};

function Field({ label, name, error, onChange, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={() => onChange(name)}
        className={`field ${error ? "field-error" : ""}`}
      />
      {error ? <p className="mt-2 text-sm text-rose-700">{error}</p> : null}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: keyof FormState;
  error?: string;
  onChange: (name: keyof FormState) => void;
  options: string[];
};

function SelectField({ label, name, error, onChange, options }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-800">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        onChange={() => onChange(name)}
        className={`field ${error ? "field-error" : ""}`}
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-sm text-rose-700">{error}</p> : null}
    </div>
  );
}
