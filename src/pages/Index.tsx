import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const modules = [
    {
      id: 'it-basics',
      title: 'Общая информация об IT',
      description: 'SDLC, Agile, роли в команде, цикл жизни требований',
      icon: 'Code',
      level: 'Базовый',
      duration: '2 часа',
      topics: ['SDLC', 'Agile & Waterfall', 'DevOps', 'Роли в команде']
    },
    {
      id: 'requirements',
      title: 'Работа с требованиями',
      description: 'Виды требований, методы сбора, UML, BPMN, User Stories',
      icon: 'FileText',
      level: 'Средний',
      duration: '4 часа',
      topics: ['Виды требований', 'UML диаграммы', 'User Stories', 'Use Cases']
    },
    {
      id: 'databases',
      title: 'Базы данных',
      description: 'SQL основы, проектирование БД, ER-диаграммы',
      icon: 'Database',
      level: 'Средний',
      duration: '3 часа',
      topics: ['SQL запросы', 'Проектирование БД', 'Нормализация', 'ER-диаграммы']
    },
    {
      id: 'architecture',
      title: 'Архитектура',
      description: 'Монолит vs микросервисы, паттерны интеграции',
      icon: 'Building',
      level: 'Продвинутый',
      duration: '3 часа',
      topics: ['Архитектурные паттерны', 'Микросервисы', 'API Design', 'Интеграции']
    },
    {
      id: 'integrations',
      title: 'Интеграции',
      description: 'REST, SOAP, gRPC, асинхронные интеграции',
      icon: 'Zap',
      level: 'Продвинутый',
      duration: '2.5 часа',
      topics: ['REST API', 'SOAP', 'Очереди сообщений', 'Брокеры']
    },
    {
      id: 'interview-prep',
      title: 'Подготовка к интервью',
      description: 'Типовые вопросы, симуляция собеседования',
      icon: 'Users',
      level: 'Практика',
      duration: '2 часа',
      topics: ['Вопросы для Middle', 'Вопросы для Senior', 'Советы', 'Симуляция']
    }
  ];

  const stats = [
    { label: 'Модулей обучения', value: '6+', icon: 'BookOpen' },
    { label: 'Практических кейсов', value: '50+', icon: 'Target' },
    { label: 'Вопросов для собеседования', value: '200+', icon: 'MessageCircle' },
    { label: 'Часов контента', value: '16+', icon: 'Clock' }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Базовый': return 'bg-green-100 text-green-800';
      case 'Средний': return 'bg-blue-100 text-blue-800';
      case 'Продвинутый': return 'bg-purple-100 text-purple-800';
      case 'Практика': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-slate-800">IT Analyst Prep</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#modules" className="text-slate-600 hover:text-primary transition-colors">Модули</a>
              <a href="#about" className="text-slate-600 hover:text-primary transition-colors">О курсе</a>
              <a href="#pricing" className="text-slate-600 hover:text-primary transition-colors">Цены</a>
              <Button variant="outline" size="sm">Войти</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Для Middle / Middle+ / Senior аналитиков
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Подготовка к собеседованию 
              <span className="text-primary block">IT-аналитика</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Структурированные знания, практические кейсы и симуляция собеседований 
              для успешного трудоустройства в IT-компанию
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Начать подготовку
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="FileText" size={20} className="mr-2" />
                Программа курса
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon name={stat.icon as any} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Модули обучения</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Пошаговая подготовка от основ IT до сложных архитектурных решений
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card 
                key={module.id} 
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm animate-slide-up hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={module.icon as any} size={24} className="text-primary" />
                    </div>
                    <Badge className={`${getLevelColor(module.level)}`}>
                      {module.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {module.duration}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {module.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Начать модуль
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Готов к следующему шагу в карьере?</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйся к сотням аналитиков, которые успешно прошли собеседования в топовые IT-компании
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={24} className="text-primary" />
                <span className="text-xl font-bold">IT Analyst Prep</span>
              </div>
              <p className="text-slate-400 max-w-md">
                Профессиональная подготовка к собеседованиям для системных и бизнес-аналитиков
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Модули</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Основы IT</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Требования</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Базы данных</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Архитектура</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 IT Analyst Prep. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;