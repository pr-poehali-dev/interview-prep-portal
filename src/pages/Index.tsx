import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const modules = [
    {
      id: 'competency-matrix',
      title: 'Матрица компетенций',
      description: 'Оценка текущего уровня и план развития аналитика',
      icon: 'Grid3x3',
      level: 'Самооценка',
      duration: 'Постоянно',
      topics: ['Junior → Middle', 'Middle → Senior', 'Lead-навыки', 'Планы развития']
    },
    {
      id: 'requirements-practice',
      title: 'Работа с требованиями',
      description: 'Практические навыки для реальных проектов компании',
      icon: 'FileText',
      level: 'Применение',
      duration: 'По задачам',
      topics: ['Шаблоны документов', 'Чек-листы', 'Реальные кейсы', 'Лучшие практики']
    },
    {
      id: 'analysis-toolkit',
      title: 'Инструменты аналитика',
      description: 'Корпоративные стандарты и инструменты',
      icon: 'Wrench',
      level: 'Инструменты',
      duration: 'Справочник',
      topics: ['Confluence', 'Jira', 'Figma', 'Draw.io', 'SQL инструменты']
    },
    {
      id: 'project-cases',
      title: 'Проектные кейсы',
      description: 'Разбор реальных задач и решений в компании',
      icon: 'Briefcase',
      level: 'Кейсы',
      duration: 'Библиотека',
      topics: ['Успешные проекты', 'Уроки провалов', 'Типовые решения', 'Метрики']
    },
    {
      id: 'process-guide',
      title: 'Процессы и стандарты',
      description: 'Внутренние регламенты и методологии',
      icon: 'Settings',
      level: 'Процессы',
      duration: 'Регламенты',
      topics: ['SCRUM в компании', 'Code Review', 'Документооборот', 'Эскалация']
    },
    {
      id: 'self-check',
      title: 'Самопроверка',
      description: 'Чек-листы и тесты для проверки готовности',
      icon: 'CheckSquare',
      level: 'Контроль',
      duration: 'Перед задачей',
      topics: ['Готовность к проекту', 'Качество результата', 'Soft skills', 'Hard skills']
    }
  ];

  const stats = [
    { label: 'Компетенций в матрице', value: '45+', icon: 'Grid3x3' },
    { label: 'Проектных кейсов', value: '30+', icon: 'Briefcase' },
    { label: 'Практических чек-листов', value: '25+', icon: 'CheckSquare' },
    { label: 'Сотрудников прошли обучение', value: '120+', icon: 'Users' }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Самооценка': return 'bg-blue-100 text-blue-800';
      case 'Применение': return 'bg-green-100 text-green-800';
      case 'Инструменты': return 'bg-purple-100 text-purple-800';
      case 'Кейсы': return 'bg-orange-100 text-orange-800';
      case 'Процессы': return 'bg-slate-100 text-slate-800';
      case 'Контроль': return 'bg-red-100 text-red-800';
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
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-slate-800">АИСА Траектория</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#modules" className="text-slate-600 hover:text-primary transition-colors">Траектории</a>
              <a href="#matrix" className="text-slate-600 hover:text-primary transition-colors">Матрица</a>
              <a href="#progress" className="text-slate-600 hover:text-primary transition-colors">Мой прогресс</a>
              <Button variant="outline" size="sm">Профиль</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Платформа развития аналитиков компании
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Прокачай свои навыки 
              <span className="text-primary block">системного аналитика</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Матрица компетенций, практические кейсы и чек-листы 
              для применения в реальных проектах компании
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/assessment'}>
                <Icon name="Grid3x3" size={20} className="mr-2" />
                Оценить компетенции
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="CheckSquare" size={20} className="mr-2" />
                Чек-листы
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Траектории развития</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Структурированный подход к развитию навыков для работы в реальных проектах
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
                    Перейти к разделу
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
          <h2 className="text-4xl font-bold mb-6">Начни развитие уже сегодня</h2>
          <p className="text-xl mb-8 opacity-90">
            Более 120 сотрудников уже используют платформу для развития аналитических навыков
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Grid3x3" size={20} className="mr-2" />
              Пройти оценку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Users" size={20} className="mr-2" />
              Связаться с HR
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
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <span className="text-xl font-bold">АИСА Траектория</span>
              </div>
              <p className="text-slate-400 max-w-md">
                Корпоративная платформа развития навыков системных и бизнес-аналитиков
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Матрица компетенций</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Практические кейсы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Чек-листы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Инструменты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HR отдел</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обратная связь</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 АИСА Траектория. Внутренняя корпоративная платформа.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;