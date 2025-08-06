"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Rocket, LoaderCircle } from "lucide-react";
import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { appIdeas } from "@/lib/data";
import { handleInquiry } from "@/app/actions";

const inquiryFormSchema = z.object({
  ideaDescription: z.string().min(1, "Please describe your app idea."),
  appInterest: z.string().min(1, "Please select an app idea."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

const defaultValues: Partial<InquiryFormValues> = {
    ideaDescription: "",
    appInterest: "",
    message: "",
};

export default function InquiryModule() {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();
    const form = useForm<InquiryFormValues>({
        resolver: zodResolver(inquiryFormSchema),
        defaultValues,
    });

    function onSubmit(data: InquiryFormValues) {
        startTransition(async () => {
            const result = await handleInquiry(data);
            if (result.success) {
                toast({
                  title: "Inquiry Sent! 🚀",
                  description: "Our team has received your message and will get back to you shortly.",
                });
                form.reset();
            } else {
                 toast({
                  title: "Error",
                  description: "There was a problem sending your inquiry. Please try again later.",
                  variant: "destructive"
                });
            }
        });
    }

    return (
        <div className="p-6 bg-card/60 backdrop-blur-lg border border-border/20 shadow-xl shadow-accent/10 rounded-2xl">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="ideaDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>App Idea</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Describe the app idea you're looking for..." {...field} className="bg-background/80" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="appInterest"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Which App Kit are you interested in?</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger className="bg-background/80">
                                        <SelectValue placeholder="Select an app idea..." />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {appIdeas.map((idea) => (
                                            <SelectItem key={idea} value={idea}>{idea}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your message / customization needs</FormLabel>
                                <FormControl>
                                <Textarea
                                    placeholder="Tell us more about your project..."
                                    className="resize-none bg-background/80"
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-muted-foreground text-center sm:text-left">
                            No sign-up needed. Your inquiry will be sent directly to our team.
                        </p>
                        <Button type="submit" className="w-full sm:w-auto font-bold bg-gradient-accent text-accent-foreground animate-gradient" disabled={isPending}>
                            {isPending ? (
                                <LoaderCircle className="animate-spin" />
                            ) : (
                                <>
                                    Send Inquiry <Rocket className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
