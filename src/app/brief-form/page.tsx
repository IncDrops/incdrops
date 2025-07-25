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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";

const briefFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contentType: z.string({
    required_error: "Please select a content type.",
  }),
  keywords: z.string().min(3, {
    message: "Please provide at least one keyword.",
  }),
  topic: z.string().min(5, {
    message: "Topic must be at least 5 characters.",
  }),
  audience: z.string().optional(),
  goals: z.string().optional(),
  notes: z.string().optional(),
});

export default function BriefFormPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof briefFormSchema>>({
    resolver: zodResolver(briefFormSchema),
    defaultValues: {
      name: "",
      email: "",
      keywords: "",
      topic: "",
      audience: "",
      goals: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof briefFormSchema>) {
    console.log(values);
    toast({
      title: "Brief Submitted!",
      description: "Thank you. We have received your brief and will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <AnimatedWrapper>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold font-headline tracking-tight lg:text-5xl">Client Brief Form</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the details below to kickstart your content creation.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="contentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a content type..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="blog-post">Blog Post</SelectItem>
                        <SelectItem value="social-media">Social Media Captions</SelectItem>
                        <SelectItem value="ai-image">AI-Generated Image</SelectItem>
                        <SelectItem value="ai-video-concept">AI Video Concept/Script</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      What kind of content do you need?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title / Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'The Future of Renewable Energy'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., solar, wind, sustainability" {...field} />
                    </FormControl>
                     <FormDescription>
                      Comma-separated keywords relevant to your content.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

               <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Message & Goals</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What is the primary message you want to convey? What are the goals of this content (e.g., drive traffic, generate leads)?"
                        className="resize-y min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="audience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Tech enthusiasts, Small business owners" {...field} />
                    </FormControl>
                     <FormDescription>
                      Who are you trying to reach with this content?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes or References</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Include any other details, links to inspiration, or specific instructions here."
                        className="resize-y min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button type="submit" size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                  Submit Brief
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </AnimatedWrapper>
    </div>
  );
}
