"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { handleGenerateDescription } from "./actions";
import { Loader2, Copy } from "lucide-react";

const formSchema = z.object({
  productName: z.string().min(2, "Product name is required."),
  productCategory: z.string().min(2, "Product category is required."),
  productFeatures: z.string().min(10, "Please provide some features."),
  productStyle: z.string().min(2, "Product style is required."),
  inspirationKeywords: z.string().min(2, "Inspiration keywords are required."),
});

type FormData = z.infer<typeof formSchema>;

export default function DescriptionGeneratorForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState("");
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      productCategory: "",
      productFeatures: "",
      productStyle: "",
      inspirationKeywords: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsLoading(true);
    setGeneratedDescription("");
    const result = await handleGenerateDescription(values);
    setIsLoading(false);

    if (result.success && result.data) {
      setGeneratedDescription(result.data.description);
      toast({
        title: "Success!",
        description: "A new product description has been generated.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Failed to generate description.",
      });
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDescription);
    toast({
      title: "Copied!",
      description: "Description copied to clipboard.",
    });
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">
            Generate Product Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Hand-bound Leather Journal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Category</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Journal, Notebook" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Features</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 120gsm paper, A5 size, genuine leather cover, hand-stitched binding..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Style</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Rustic, Minimalist, Vintage" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inspirationKeywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inspiration Keywords</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Nature, Wanderlust, Mindfulness"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Description"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline">Generated Output</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          {isLoading && (
            <div className="flex h-full items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}
          {generatedDescription && (
            <div className="relative">
              <Textarea
                readOnly
                value={generatedDescription}
                className="h-96 text-base leading-relaxed"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={copyToClipboard}
                className="absolute right-2 top-2"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
          {!isLoading && !generatedDescription && (
            <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-8">
              <p className="text-center text-muted-foreground">
                Your generated description will appear here.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
