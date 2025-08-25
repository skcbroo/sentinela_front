// Landing Page completa do projeto Sentinela
import React, { useState } from 'react';
import {
  Shield,
  MessageCircle,
  Phone,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';


function LandingPage() {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const [selectedPlan, setSelectedPlan] = useState('');
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  email: '',
  plan: ''
});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted:', formData);
  alert('Obrigado pelo interesse! Entraremos em contato em breve.');
};

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const plans = [
  {
    name: 'Básico',
    price: 'R$ 89',
    period: '/mês',
    features: [
      '2 checagens por dia',
      'WhatsApp monitoramento',
      'Ligação de emergência',
      'Contato com familiares',
      'Suporte 8h às 18h'
    ],
    color: 'border-gray-200',
    buttonColor: 'bg-gray-600 hover:bg-gray-700'
  },
  {
    name: 'Intermediário',
    price: 'R$ 149',
    period: '/mês',
    features: [
      '4 checagens por dia',
      'WhatsApp monitoramento',
      'Ligação de emergência',
      'Contato com familiares',
      'Suporte 24h',
      'Relatório semanal'
    ],
    color: 'border-blue-200',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'Premium',
    price: 'R$ 239',
    period: '/mês',
    popular: true,
    features: [
      '6 checagens por dia',
      'WhatsApp monitoramento',
      'Ligação de emergência',
      'Contato com familiares',
      'Suporte 24h',
      'Relatório diário',
      'Resposta presencial'
    ],
    color: 'border-blue-500 ring-2 ring-blue-500',
    buttonColor: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'Elite',
    price: 'R$ 389',
    period: '/mês',
    features: [
      'Checagens ilimitadas',
      'WhatsApp monitoramento',
      'Ligação de emergência',
      'Contato com familiares',
      'Suporte 24h premium',
      'Relatório em tempo real',
      'Resposta presencial imediata',
      'Equipe médica parceira'
    ],
    color: 'border-yellow-400',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
  }
];

const testimonials = [
  {
    name: 'Maria Silva',
    city: 'São Paulo, SP',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Desde que contratei o Sentinela para minha mãe de 78 anos, durmo tranquila. Eles checam ela todos os dias e já evitaram uma emergência médica.'
  },
  {
    name: 'João Santos',
    city: 'Rio de Janeiro, RJ',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'Excelente serviço! Meu pai adora conversar com a equipe pelo WhatsApp. É muito mais que segurança, é cuidado humano.'
  },
  {
    name: 'Ana Costa',
    city: 'Belo Horizonte, MG',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    text: 'A tecnologia brasileira do Sentinela é impressionante. Rápidos, eficientes e sempre prestativos. Recomendo demais!'
  }
];

const differentials = [
  { icon: MessageCircle, text: 'Integração via WhatsApp' },
  { icon: Clock, text: 'Monitoramento 24h' },
  { icon: Phone, text: 'Resposta escalonada' },
  { icon: Users, text: 'Equipe tática treinada' },
  { icon: Shield, text: 'Tecnologia brasileira' }
];

// O conteúdo JSX segue direto após estas declarações
// Copie e cole o restante do conteúdo JSX conforme enviado anteriormente para completar o HTML da landing
return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Sentinela</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
              <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">Planos</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
            </nav>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              <a href="#como-funciona" className="block py-2 text-gray-700 hover:text-blue-600">Como Funciona</a>
              <a href="#planos" className="block py-2 text-gray-700 hover:text-blue-600">Planos</a>
              <a href="#depoimentos" className="block py-2 text-gray-700 hover:text-blue-600">Depoimentos</a>
              <a href="#contato" className="block py-2 text-gray-700 hover:text-blue-600">Contato</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Proteja quem você 
              <span className="text-blue-600"> ama</span> com 
              <span className="text-blue-600"> segurança inteligente</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sistema de monitoramento preditivo via WhatsApp que garante a segurança de idosos e pessoas que vivem sozinhas. 
              Checagens automáticas, escalonamento inteligente e resposta presencial quando necessário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="#contato"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>Quero monitorar um familiar agora</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#como-funciona"
                className="text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Como funciona?
              </a>
            </div>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" 
                alt="Família segura e protegida" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como funciona a segurança preditiva?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo automatizado e inteligente que garante a segurança 24 horas por dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: MessageCircle,
                title: 'Mensagem via WhatsApp',
                description: 'Enviamos uma mensagem automática de checagem no horário programado'
              },
              {
                step: '02',
                icon: Clock,
                title: 'Aguardamos resposta',
                description: 'Damos tempo para a pessoa responder confirmando que está bem'
              },
              {
                step: '03',
                icon: Phone,
                title: 'Escalamento automático',
                description: 'Se não houver resposta, ligamos e contatamos familiares imediatamente'
              },
              {
                step: '04',
                icon: Users,
                title: 'Equipe presencial',
                description: 'Em casos críticos, enviamos nossa equipe treinada ao local'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center relative">
                  <item.icon className="h-10 w-10 text-blue-600" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha o plano ideal para sua família
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Planos flexíveis que se adaptam às necessidades específicas de cada situação
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg p-6 ${plan.color} relative ${plan.popular ? 'transform scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${plan.buttonColor}`}
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Escolher {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Famílias que já confiam na segurança do Sentinela
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher o Sentinela?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {differentials.map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-white/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <item.icon className="h-8 w-8" />
                </div>
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Lead */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comece a proteger hoje mesmo
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato em até 30 minutos
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                  Plano de interesse
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={selectedPlan || formData.plan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecione um plano</option>
                  <option value="Básico">Básico - R$ 89/mês</option>
                  <option value="Intermediário">Intermediário - R$ 149/mês</option>
                  <option value="Premium">Premium - R$ 239/mês</option>
                  <option value="Elite">Elite - R$ 389/mês</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Quero ser protegido agora</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                * Campos obrigatórios. Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Sentinela</span>
              </div>
              <p className="text-gray-400 mb-4">
                Segurança preditiva e ativa para proteger quem você ama.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white">Como funciona</a></li>
                <li><a href="#" className="hover:text-white">Equipe</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white">Chat online</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white">LGPD</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sentinela. Todos os direitos reservados. Tecnologia brasileira de segurança preditiva.</p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Sentinela"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40 hover:scale-110 transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export default App;

