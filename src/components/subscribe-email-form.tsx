"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Toaster, toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

type SubscribeEmailFormProps = {
  onSubmitSuccess?: (email: string) => void;
};

export function SubscribeEmailForm({ onSubmitSuccess }: SubscribeEmailFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (response.ok) {
        form.reset();
        toast.success("Email submitted successfully");
        if (onSubmitSuccess) {
          onSubmitSuccess(values.email);
        }
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("An error occurred while submitting email. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-sm">
        <FormField
          control={form.control}
          name="email"
          render={({ field: { ...field } }) => (
            <FormItem>
              <div className="flex gap-2">
                <FormControl>
                  <Input type="email" placeholder="Enter your email for updates" {...field} />
                </FormControl>
                <Toaster />
                <Button type="submit">Submit</Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}