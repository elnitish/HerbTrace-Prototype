import { motion } from "framer-motion";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { AdminDashboard } from "@/pages/AdminDashboard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as ShadToaster } from "@/components/ui/toaster";
import { Toaster } from "sonner";

const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return <AdminDashboard />;
};

function App() {

  return (
    <AuthProvider>
      <TooltipProvider>
        <AppContent />
        <ShadToaster />
        <Toaster />
      </TooltipProvider>
    </AuthProvider>
  );
}

export default App;