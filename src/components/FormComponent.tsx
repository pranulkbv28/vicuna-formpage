"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import styles from "@/styles/formcomponent.module.css";

const formSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  addressline1: z.string(),
  addressline2: z.string(),
  city: z.string(),
  pincode: z.string(),
  state: z.string(),
  country: z.string(),
  email: z.string().min(11).max(50),
  phone: z.string().min(10).max(10),
  pay_mentmethod: z.string(),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      addressline1: "",
      addressline2: "",
      city: "",
      pincode: "",
      state: "",
      country: "",
      email: "",
      phone: "",
      pay_mentmethod: "prepaid",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <h1 className="text-xl text-center mb-12">Customer Details</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`space-y-8 ${styles.formBody}`}
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input required placeholder="John" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input required placeholder="Doe" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressline1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input required placeholder="Line 1" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressline2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address Line 2</FormLabel>
                <FormControl>
                  <Input placeholder="Line 2" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pincode</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    required
                    placeholder="johndoe@exampple.com"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input required {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pay_mentmethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Method</FormLabel>
                <FormControl>
                  {/* <Input required {...field} /> */}
                  <select defaultValue={"prepaid"} style={{ display: "block" }}>
                    {/* <option value=""></option> */}
                    <option value="cod">CoD</option>
                    <option value="prepaid">Prepaid</option>
                  </select>
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage /> */}
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
