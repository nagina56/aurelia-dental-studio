'use client';

import { useState } from 'react';
import { SERVICES, SITE } from '@/lib/site';
import {
  isWebhookConfigured,
  submitAppointment,
  type AppointmentPayload,
} from '@/lib/webhook';
import { IconAlert, IconCheck, IconSpinner } from '@/components/ui/Icons';

const TIME_SLOTS = [
  '08:30',
  '09:15',
  '10:00',
  '11:15',
  '13:00',
  '14:30',
  '16:00',
  '17:30',
];

const EMPTY: AppointmentPayload = {
  name: '',
  email: '',
  phone: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

type Status = { kind: 'idle' | 'sending' | 'sent' | 'demo' | 'error'; message?: string };

export function AppointmentForm() {
  const [values, setValues] = useState<AppointmentPayload>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentPayload, string>>>({});

  const configured = isWebhookConfigured();

  function update<K extends keyof AppointmentPayload>(key: K, value: AppointmentPayload[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof AppointmentPayload, string>> = {};
    if (!values.name.trim()) next.name = 'Please tell us your name.';
    if (!values.email.trim()) next.email = 'Please add an email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'That email address does not look right.';
    if (!values.phone.trim()) next.phone = 'Please add a contact number.';
    if (!values.service) next.service = 'Please choose what you need.';
    if (!values.preferredDate) next.preferredDate = 'Please pick a preferred date.';
    if (!values.preferredTime) next.preferredTime = 'Please pick a preferred time.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypot) return; // naive bot, silently drop
    if (!validate()) {
      setStatus({ kind: 'error', message: 'Please check the highlighted fields and try again.' });
      return;
    }

    setStatus({ kind: 'sending' });
    const result = await submitAppointment({
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
    });

    if (result.status === 'sent') {
      setStatus({ kind: 'sent' });
      setValues(EMPTY);
      setConsent(false);
    } else if (result.status === 'demo') {
      setStatus({ kind: 'demo' });
      setValues(EMPTY);
      setConsent(false);
    } else {
      setStatus({
        kind: 'error',
        message: `We could not send that just now. Please call the studio on ${SITE.phone} and we will book you directly.`,
      });
    }
  }

  if (status.kind === 'sent' || status.kind === 'demo') {
    return (
      <div className="form-status form-status--success">
        <IconCheck className="form-status__icon" />
        <div>
          <p className="form-status__title">
            {status.kind === 'sent' ? 'Request received' : 'Request captured (demo mode)'}
          </p>
          <p>
            {status.kind === 'sent'
              ? 'Thank you. Our patient care team will confirm your appointment by email within one working day.'
              : 'This demo has no webhook configured, so nothing was transmitted. Add NEXT_PUBLIC_N8N_WEBHOOK_URL to send real enquiries — the full confirmation layout is already in place.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label className="field__label" htmlFor="ap-name">
            Full name<span className="req">*</span>
          </label>
          <input
            id="ap-name"
            className="input"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className="field__error">{errors.name}</p> : null}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="ap-phone">
            Phone<span className="req">*</span>
          </label>
          <input
            id="ap-phone"
            className="input"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <p className="field__error">{errors.phone}</p> : null}
        </div>
      </div>

      <div className="field">
        <label className="field__label" htmlFor="ap-email">
          Email<span className="req">*</span>
        </label>
        <input
          id="ap-email"
          className="input"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? <p className="field__error">{errors.email}</p> : null}
      </div>

      <div className="field">
        <label className="field__label" htmlFor="ap-service">
          What do you need?<span className="req">*</span>
        </label>
        <select
          id="ap-service"
          className="select"
          name="service"
          value={values.service}
          onChange={(e) => update('service', e.target.value)}
          aria-invalid={Boolean(errors.service)}
        >
          <option value="">Select a service</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {errors.service ? <p className="field__error">{errors.service}</p> : null}
      </div>

      <div className="form__row">
        <div className="field">
          <label className="field__label" htmlFor="ap-date">
            Preferred date<span className="req">*</span>
          </label>
          <input
            id="ap-date"
            className="input"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={(e) => update('preferredDate', e.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
          />
          {errors.preferredDate ? (
            <p className="field__error">{errors.preferredDate}</p>
          ) : null}
        </div>
      </div>

      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="field__label" style={{ marginBottom: 'var(--sp-2)' }}>
          Preferred time<span className="req">*</span>
        </legend>
        <div className="slot-grid">
          {TIME_SLOTS.map((slot) => (
            <label className="slot" key={slot}>
              <input
                type="radio"
                name="preferredTime"
                value={slot}
                checked={values.preferredTime === slot}
                onChange={() => update('preferredTime', slot)}
              />
              <span>{slot}</span>
            </label>
          ))}
        </div>
        {errors.preferredTime ? (
          <p className="field__error" style={{ marginTop: 'var(--sp-2)' }}>
            {errors.preferredTime}
          </p>
        ) : null}
      </fieldset>

      <div className="field">
        <label className="field__label" htmlFor="ap-message">
          Anything we should know?
        </label>
        <textarea
          id="ap-message"
          className="textarea"
          name="message"
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Symptoms, concerns, or what you would like to achieve."
        />
      </div>

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="ap-company">Company</label>
        <input
          id="ap-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="form__actions">
        <label className="form__consent">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <span>
            I agree that Aurelia Dental Studio may contact me about this enquiry. We never
            share patient details, and you can ask us to delete them at any time.
          </span>
        </label>

        {status.kind === 'error' && status.message ? (
          <div className="form-status form-status--error">
            <IconAlert className="form-status__icon" />
            <p>{status.message}</p>
          </div>
        ) : null}

        <button className="btn btn--gold btn--block" type="submit" disabled={status.kind === 'sending'}>
          {status.kind === 'sending' ? (
            <>
              <IconSpinner />
              Sending
            </>
          ) : (
            'Request Appointment'
          )}
        </button>

        <p className="form__footnote">
          By submitting this form you are not committing to treatment. We will confirm
          availability and fees with you first. For urgent problems — pain, swelling or a
          knocked-out tooth — call{' '}
          <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a> instead of using this form.
        </p>
      </div>

      <div className="integrations">
        <span className={`integrations__item ${configured ? 'integrations__item--live' : ''}`}>
          {configured ? 'Enquiry delivery connected' : 'Demo mode — delivery not connected'}
        </span>
        <span className="integrations__item">Response within 1 working day</span>
      </div>
    </form>
  );
}
