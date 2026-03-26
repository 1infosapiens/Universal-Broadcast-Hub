import { Hero } from "@/components/hero";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData, useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormData) {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. Our admissions team will contact you shortly.",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive"
        });
      }
    });
  }

  return (
    <div>
      <Hero 
        title="Contact Admissions"
        subtitle="Take the first step towards your creative future."
        imageSrc={`${import.meta.env.BASE_URL}images/campus-hero.png`}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="heading-sm text-primary mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-10">
                Whether you have questions about our programs, campus tours, or the application process, our team is here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Visit Us</h4>
                    <p className="text-muted-foreground mt-1">533 College Rd,<br />Selden, NY 11784<br />USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Email Us</h4>
                    <a href="mailto:info@unibeuni.com" className="text-muted-foreground mt-1 hover:text-secondary transition-colors">info@unibeuni.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Call Us</h4>
                    <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-background rounded-2xl p-8 md:p-10 border border-border shadow-xl">
              <h3 className="font-display font-bold text-2xl text-primary mb-8">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-white" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-bold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-bold">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" className="bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold">Department of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Select a department" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="modeling">Modeling</SelectItem>
                            <SelectItem value="music">Music</SelectItem>
                            <SelectItem value="dance">Dance</SelectItem>
                            <SelectItem value="film">Film & Theatre</SelectItem>
                            <SelectItem value="business">Business School</SelectItem>
                            <SelectItem value="law">Law School</SelectItem>
                            <SelectItem value="journalism">Communication & Journalism</SelectItem>
                            <SelectItem value="other">Other / General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary font-bold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your interests and any questions you have..." 
                            className="min-h-[120px] bg-white"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full py-4 rounded-md font-bold text-primary bg-secondary hover:bg-secondary/90 transition-all duration-300 shadow-md flex items-center justify-center"
                  >
                    {submitMutation.isPending ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                    ) : (
                      "Submit Application Inquiry"
                    )}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
