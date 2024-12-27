import { useToast } from "./use-toast";

export const useShowErrorMessage = () => {
  const { toast } = useToast();

  return (message: string) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
    });
  };
};
