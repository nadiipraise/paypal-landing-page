
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock, Users, ArrowRight, Star, Lock, RefreshCw } from 'lucide-react';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Limited Time Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 text-center relative">
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          <Clock size={16} />
          <span>Limited Time: 50% OFF expires in</span>
          <div className="flex gap-1 font-mono font-bold">
            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
            <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxQTJCNEMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto max-w-6xl">
          {/* Centered Content */}
          <div className="text-center space-y-8 mb-16">
            <Badge className="bg-teal-100 text-teal-800 border-teal-200 text-sm font-medium px-4 py-2 mx-auto">
              🚀 Verified PayPal Solution
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight max-w-4xl mx-auto">
              Receive Global
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent block">
                Payments
              </span>
              Without Limits
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Step-by-step guide to creating your verified USA PayPal account in days. 
              Perfect for freelancers, survey takers, and online entrepreneurs.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Unlock My Guide Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {Array.from({length: 5}).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-500">4.9/5 from 2,847+ customers</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span>Secure Download</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw size={16} />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
          
          {/* Centered 3D Ebook Mockup */}
          <div className="flex justify-center">
            <div className="relative transform hover:scale-105 transition-transform duration-700 animate-[float_6s_ease-in-out_infinite]">
              <div className="w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Book Cover Design */}
                <div className="absolute inset-4 bg-gradient-to-br from-teal-500 to-blue-600 rounded-md flex flex-col justify-between p-6 text-white">
                  <div>
                    <h3 className="font-bold text-2xl leading-tight mb-2">
                      How to Create a Verified USA PayPal Account
                    </h3>
                    <p className="text-teal-100 text-sm">From Nigeria</p>
                  </div>
                  <div className="text-right">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                      <Shield className="text-white" size={24} />
                    </div>
                    <p className="text-xs text-teal-100">Complete Guide</p>
                  </div>
                </div>
                
                {/* 3D Effect Shadow */}
                <div className="absolute -right-2 -bottom-2 w-full h-full bg-slate-700 rounded-lg -z-10"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-pulse opacity-80"></div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why This Guide Changes Everything
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Thousands of Nigerians are already receiving international payments. Here's how.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <CheckCircle className="text-teal-600" size={32} />,
                title: "100% Legal Method",
                description: "Fully compliant with PayPal's terms of service. No account suspensions."
              },
              {
                icon: <Shield className="text-blue-600" size={32} />,
                title: "Verified Status",
                description: "Get your account verified and increase your withdrawal limits significantly."
              },
              {
                icon: <Clock className="text-orange-600" size={32} />,
                title: "Quick Setup",
                description: "Complete the entire process in 24-48 hours following our step-by-step guide."
              },
              {
                icon: <Users className="text-purple-600" size={32} />,
                title: "Expert Support",
                description: "Access to our private community and direct support from our team."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Simple 4-step process to get your verified PayPal account
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Download the Guide",
                description: "Get instant access to our comprehensive PDF guide with detailed screenshots and instructions."
              },
              {
                step: "02", 
                title: "Gather Required Documents",
                description: "We'll show you exactly what documents you need and how to obtain them legally."
              },
              {
                step: "03",
                title: "Follow Our Process",
                description: "Step-by-step walkthrough with screenshots for creating and verifying your account."
              },
              {
                step: "04",
                title: "Start Receiving Payments",
                description: "Your verified PayPal account is ready to receive international payments without limits."
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto md:mx-0">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Receiving Global Payments?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians who are already earning freely with verified PayPal accounts.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-teal-100 text-lg mb-2">Limited Time Price</div>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-teal-200 line-through">₦10,000</span>
                <span className="text-4xl font-bold text-white">₦5,000</span>
              </div>
              <div className="text-teal-100 text-sm">Save 50% - Today Only!</div>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-white text-teal-600 hover:bg-teal-50 px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Lock className="mr-2" size={20} />
            Get Instant Access Now
          </Button>
          
          <p className="text-teal-100 text-sm mt-4">
            30-day money-back guarantee • Secure payment • Instant download
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
