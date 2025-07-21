import React, { useState } from 'react';
import { Form, Label, Input, Textarea, Button, ErrorMsg } from './ContactForm.styles';

/**
 * Validation helpers
 */
const isEmail = (value: string) => value.includes('@');
const isUkMobile = (value: string) => /^07\d{10,11}$/.test(value.trim());
const isNumber   = (value: string) => !Number.isNaN(Number(value));

export const ContactForm: React.FC = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd   = new FormData(form);

    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const nextErrors: Record<string, string> = {};

    if (!data.name.trim())       nextErrors.name    = 'Please enter your name';

    if (!data.email.trim())      nextErrors.email   = 'Email is required';
    else if (!isEmail(data.email)) nextErrors.email = 'Please use a valid email';

    if (!data.number.trim())     nextErrors.number  = 'Phone number is required';
    else if (!isUkMobile(data.number))
      nextErrors.number = 'Must Be A Valid UK Mobile Number';


    if (!data.address.trim())    nextErrors.address = 'Address is required';

    if (!data.budget.trim())     nextErrors.budget  = 'Budget is required';
    else if (!isNumber(data.budget))
      nextErrors.budget = 'Budget must be a number';

    if (!data.details.trim())
      nextErrors.details = 'Short Description Required';

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);
      form.submit();
    }
  console.log(data)
  };


  return (
    <Form
      action="https://formsubmit.co/luke.boat.apple@gmail.com"
      method="POST"
      onChange={handleSubmit}
    >
      {/* 🔒 redirect after successful submit */}
      <input type="hidden" name="_next" value="http://localhost:3000/" />

      <Label htmlFor="name">Name / Title</Label>
      {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
      <Input id="name" name="name" />

      <Label htmlFor="email">Email</Label>
      {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
      <Input type="email" id="email" name="email" />

      <Label htmlFor="number">Phone Number</Label>
      {errors.number && <ErrorMsg>{errors.number}</ErrorMsg>}
      <Input min='11' max='11' type="tel" id="number" name="number" placeholder="07…" />

      <Label htmlFor="address">Address</Label>
      {errors.address && <ErrorMsg>{errors.address}</ErrorMsg>}
      <Input id="address" name="address" />

      <Label htmlFor="budget">Budget (£)</Label>
      {errors.budget && <ErrorMsg>{errors.budget}</ErrorMsg>}
      <Input id="budget" name="budget" />

      <Label htmlFor="details">Details</Label>{errors.details && <ErrorMsg>{errors.details}</ErrorMsg>}
      <Textarea id="details" name="details" />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Send'}
      </Button>
    </Form>
  );
};
