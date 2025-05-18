import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, MessageSquare, ShoppingCart, Scale, BarChart } from 'lucide-react';

const AIAgent: React.FC = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isDanish = i18n.language === 'da';

  const handleDemoClick = () => {
    navigate('/#contact');
  };

  const initialMessages = {
    shopping: [
      { type: 'bot', text: 'Welcome to our store 🚀' },
      { type: 'bot', text: 'What can we do for you?' },
      { type: 'user', text: "I'm looking for some cool t-shirts for summer, which are clean and give good vibes" },
      { type: 'bot', text: 'Here are some of our most popular summer t-shirts:' }
    ],
    legal: [
      { type: 'bot', text: "I'm a legal assistant specialised in The Danish Rent Act. Let me know how I can assist you today" },
      { type: 'user', text: 'Can I kick out my tenant?' },
      { type: 'bot', text: 'Terminating or Cancelling a Tenancy\n\nTerminating or cancelling a tenant requires that you, as the landlord, comply with the rules set out in the Danish Rent Act. It is important to distinguish between termination and cancellation, as they have different requirements and consequences:\n\nTermination of a Tenant\nAs a landlord, you may only terminate a tenant in specific situations, such as:\n\nIf you need to use the property for your own residence.' }
    ],
    shopify: [
      { type: 'bot', text: 'Welcome back, Chris! 👋 How can I help you with your store insights today?' },
      { type: 'user', text: 'What products have performed best this week, and what have performed the worst? What is trending? Have we delivered on time?' },
      { type: 'bot', text: "Here's your store performance analysis for this week:\n\n📈 Top Performers:\n• Summer Collection T-Shirt: 127 units sold (+45% from last week)\n• Eco-Friendly Hoodie: 98 units sold (+32%)\n• Urban Streetwear Cap: 76 units sold (+28%)\n\n📉 Underperforming Products:\n• Vintage Denim Jacket: 12 units (-60% from last week)\n• Classic Polo Shirt: 15 units (-45%)" }
    ]
  };

  const [visibleMessages, setVisibleMessages] = useState({
    shopping: 0,
    legal: 0,
    shopify: 0
  });

  useEffect(() => {
    const startAnimation = () => {
      Object.keys(initialMessages).forEach(chatType => {
        let count = 0;
        const interval = setInterval(() => {
          if (count < initialMessages[chatType].length) {
            setVisibleMessages(prev => ({
              ...prev,
              [chatType]: count + 1
            }));
            count++;
          } else {
            clearInterval(interval);
          }
        }, 1000);
      });
    };

    // Start initial animation
    startAnimation();

    // Reset and restart animation every 15 seconds
    const resetInterval = setInterval(() => {
      setVisibleMessages({
        shopping: 0,
        legal: 0,
        shopify: 0
      });
      setTimeout(startAnimation, 500);
    }, 15000);

    return () => {
      clearInterval(resetInterval);
    };
  }, []);

  const features = [
    { name: isDanish ? 'Naturlig sprogbehandling' : 'Natural language processing' },
    { name: isDanish ? 'Flersproget support' : 'Multi-language support' },
    { name: isDanish ? 'Læringsmuligheder' : 'Learning capabilities' },
    { name: isDanish ? 'Integrationsmuligheder' : 'Integration options' },
    { name: isDanish ? 'Kontekstuel forståelse' : 'Contextual understanding' },
    { name: isDanish ? 'Realtidssvar' : 'Real-time responses' },
    { name: isDanish ? 'Tilpasset vidensbase' : 'Custom knowledge base' },
    { name: isDanish ? 'Analyse og rapportering' : 'Analytics and reporting' }
  ];

  const powerfulFeatures = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: isDanish ? 'Kundesupport' : 'Customer Support',
      description: isDanish 
        ? 'AI-drevet support der yder øjeblikkelig, døgnåben kundeservice'
        : 'AI-powered support agents provide instant, 24/7 customer service'
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: isDanish ? 'E-handels Assistent' : 'E-commerce Assistant',
      description: isDanish
        ? 'Personlige købsanbefalinger og support'
        : 'Personalized shopping recommendations and support'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: isDanish ? 'Juridisk Rådgivning' : 'Legal Advisory',
      description: isDanish
        ? 'Specialiseret juridisk indsigt og compliance-assistance'
        : 'Specialized legal insights and compliance assistance'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: isDanish ? 'Forretningsintelligens' : 'Business Intelligence',
      description: isDanish
        ? 'Realtidsanalyse af data og forretningsmæssige indsigter'
        : 'Real-time data analysis and business insights'
    }
  ];

  return (
    <main className="flex-grow pt-24">
      <Helmet>
        <title>{isDanish ? 'AI Agenter - Fremtidens Kundeservice' : 'AI Agents - The Future of Customer Service'}</title>
        <meta
          name="description"
          content={
            isDanish
              ? 'Transformer din virksomhed med intelligente AI-agenter. Automatiser kundeservice, juridisk rådgivning og forretningsintelligens.'
              : 'Transform your business with intelligent AI agents. Automate customer service, legal advisory, and business intelligence.'
          }
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 py-1 px-3 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20">
              <span className="text-sm font-semibold text-purple-400">
                {isDanish ? 'AI AGENT EKSPERTER' : 'AI AGENTS EXPERTS'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isDanish
                ? 'Transformer Din Virksomhed med Intelligente AI-Agenter'
                : 'Transform Your Business with Intelligent AI Agents'}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {isDanish
                ? 'Opdag forskellige anvendelser af AI-agenter skræddersyet til at løfte din virksomheds drift'
                : 'Discover diverse applications of AI agents tailored to elevate your business operations'}
            </p>
            <Button variant="primary" size="lg" onClick={handleDemoClick}>
              {isDanish ? 'Kom i Gang Nu' : 'Get Started Now'}
            </Button>
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Kraftfulde Funktioner' : 'Powerful Features'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Alt hvad du behøver for at skabe succesfulde AI-agenter'
                : 'Everything you need to create successful AI agents'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {powerfulFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Examples Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {isDanish ? 'Live Eksempler på AI Agenter' : 'Live Examples AI Agents'}
            </h2>
            <p className="text-gray-300">
              {isDanish
                ? 'Udforsk kraften i AI-agenter gennem vores live eksempler nedenfor'
                