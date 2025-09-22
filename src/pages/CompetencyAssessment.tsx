import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Question {
  id: string;
  category: string;
  text: string;
  description: string;
  level: 'junior' | 'middle' | 'senior';
}

interface CompetencyArea {
  id: string;
  name: string;
  icon: string;
  color: string;
  questions: Question[];
}

const CompetencyAssessment = () => {
  const [currentTab, setCurrentTab] = useState('requirements');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [assessmentStarted, setAssessmentStarted] = useState(false);

  const competencyAreas: CompetencyArea[] = [
    {
      id: 'requirements',
      name: 'Работа с требованиями',
      icon: 'FileText',
      color: 'blue',
      questions: [
        {
          id: 'req1',
          category: 'requirements',
          text: 'Умею выявлять и формулировать бизнес-требования',
          description: 'Способность понимать потребности заказчика и переводить их в четкие требования',
          level: 'junior'
        },
        {
          id: 'req2',
          category: 'requirements',
          text: 'Создаю детальные функциональные требования с use case',
          description: 'Навык декомпозиции и детализации требований до уровня разработки',
          level: 'middle'
        },
        {
          id: 'req3',
          category: 'requirements',
          text: 'Провожу анализ влияния изменений требований на архитектуру',
          description: 'Понимание взаимосвязей и способность оценить impact изменений',
          level: 'senior'
        },
        {
          id: 'req4',
          category: 'requirements',
          text: 'Валидирую требования с заинтересованными сторонами',
          description: 'Организация процесса согласования и валидации требований',
          level: 'middle'
        },
        {
          id: 'req5',
          category: 'requirements',
          text: 'Создаю трассировочную матрицу требований',
          description: 'Отслеживание требований от бизнес-целей до реализации',
          level: 'senior'
        }
      ]
    },
    {
      id: 'modeling',
      name: 'Моделирование',
      icon: 'GitBranch',
      color: 'green',
      questions: [
        {
          id: 'mod1',
          category: 'modeling',
          text: 'Создаю диаграммы бизнес-процессов в BPMN',
          description: 'Навык моделирования процессов для их анализа и оптимизации',
          level: 'junior'
        },
        {
          id: 'mod2',
          category: 'modeling',
          text: 'Проектирую UML диаграммы (use case, activity, sequence)',
          description: 'Использование стандартных нотаций для описания системы',
          level: 'middle'
        },
        {
          id: 'mod3',
          category: 'modeling',
          text: 'Создаю концептуальные модели данных (ER-диаграммы)',
          description: 'Проектирование структуры данных и их взаимосвязей',
          level: 'middle'
        },
        {
          id: 'mod4',
          category: 'modeling',
          text: 'Строю архитектурные диаграммы системы (C4, компонентные)',
          description: 'Визуализация архитектуры на разных уровнях абстракции',
          level: 'senior'
        }
      ]
    },
    {
      id: 'technical',
      name: 'Технические навыки',
      icon: 'Code',
      color: 'purple',
      questions: [
        {
          id: 'tech1',
          category: 'technical',
          text: 'Пишу SQL запросы для анализа данных',
          description: 'Базовые навыки работы с базами данных',
          level: 'junior'
        },
        {
          id: 'tech2',
          category: 'technical',
          text: 'Понимаю принципы REST API и могу создать спецификацию',
          description: 'Знание интеграционных паттернов и API design',
          level: 'middle'
        },
        {
          id: 'tech3',
          category: 'technical',
          text: 'Анализирую производительность системы и нагрузочные характеристики',
          description: 'Понимание нефункциональных требований',
          level: 'senior'
        },
        {
          id: 'tech4',
          category: 'technical',
          text: 'Работаю с инструментами CI/CD и понимаю DevOps процессы',
          description: 'Знание современных практик разработки и развертывания',
          level: 'senior'
        }
      ]
    },
    {
      id: 'communication',
      name: 'Коммуникации',
      icon: 'Users',
      color: 'orange',
      questions: [
        {
          id: 'comm1',
          category: 'communication',
          text: 'Провожу интервью с заинтересованными сторонами',
          description: 'Навык сбора информации через интервьюирование',
          level: 'junior'
        },
        {
          id: 'comm2',
          category: 'communication',
          text: 'Презентую решения техническим и бизнес-командам',
          description: 'Способность адаптировать коммуникацию под аудиторию',
          level: 'middle'
        },
        {
          id: 'comm3',
          category: 'communication',
          text: 'Веду переговоры по изменению scope проекта',
          description: 'Навык управления изменениями и конфликтами интересов',
          level: 'senior'
        },
        {
          id: 'comm4',
          category: 'communication',
          text: 'Обучаю команду новым процессам и инструментам',
          description: 'Лидерские качества и способность к knowledge sharing',
          level: 'senior'
        }
      ]
    }
  ];

  const getCurrentQuestions = () => {
    const area = competencyAreas.find(area => area.id === currentTab);
    return area ? area.questions : [];
  };

  const handleAnswer = (questionId: string, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  };

  const nextQuestion = () => {
    const questions = getCurrentQuestions();
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Переход к следующей категории или результатам
      const currentAreaIndex = competencyAreas.findIndex(area => area.id === currentTab);
      if (currentAreaIndex < competencyAreas.length - 1) {
        setCurrentTab(competencyAreas[currentAreaIndex + 1].id);
        setCurrentQuestionIndex(0);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateResults = () => {
    const results: Record<string, any> = {};
    
    competencyAreas.forEach(area => {
      const areaAnswers = area.questions.map(q => answers[q.id] || 0);
      const maxScore = area.questions.length * 5;
      const currentScore = areaAnswers.reduce((sum, score) => sum + score, 0);
      const percentage = Math.round((currentScore / maxScore) * 100);
      
      let level = 'Junior';
      if (percentage >= 80) level = 'Senior';
      else if (percentage >= 60) level = 'Middle+';
      else if (percentage >= 40) level = 'Middle';
      
      results[area.id] = {
        name: area.name,
        score: currentScore,
        maxScore,
        percentage,
        level,
        color: area.color
      };
    });
    
    return results;
  };

  const overallProgress = () => {
    const totalQuestions = competencyAreas.reduce((sum, area) => sum + area.questions.length, 0);
    const answeredQuestions = Object.keys(answers).length;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const ScoreButton = ({ score, onClick, selected }: { score: number; onClick: () => void; selected: boolean }) => (
    <Button
      variant={selected ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={`w-12 h-12 ${selected ? 'ring-2 ring-primary' : ''}`}
    >
      {score}
    </Button>
  );

  const ResultsView = () => {
    const results = calculateResults();
    const overallScore = Object.values(results).reduce((sum: number, result: any) => sum + result.percentage, 0) / Object.keys(results).length;
    
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Результаты оценки</h2>
          <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-full mb-4">
            <span className="text-4xl font-bold text-primary">{Math.round(overallScore)}%</span>
          </div>
          <p className="text-xl text-slate-600">Общий уровень компетенций</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(results).map(([key, result]: [string, any]) => (
            <Card key={key} className="border-0 bg-white/80">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{result.name}</CardTitle>
                  <Badge variant="secondary">{result.level}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс</span>
                    <span>{result.score}/{result.maxScore}</span>
                  </div>
                  <Progress value={result.percentage} className="h-2" />
                  <div className="text-right text-sm font-medium">{result.percentage}%</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Рекомендации</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(results).map(([key, result]: [string, any]) => {
              if (result.percentage < 60) {
                return (
                  <Card key={key} className="border-l-4 border-l-orange-400 bg-orange-50">
                    <CardContent className="pt-4">
                      <h4 className="font-medium mb-2">{result.name}</h4>
                      <p className="text-sm text-slate-600">
                        Рекомендуется углубить знания в этой области. Пройдите дополнительное обучение или найдите ментора.
                      </p>
                    </CardContent>
                  </Card>
                );
              }
              return null;
            })}
          </div>
          
          <Button 
            onClick={() => {
              setShowResults(false);
              setAssessmentStarted(false);
              setAnswers({});
              setCurrentQuestionIndex(0);
              setCurrentTab('requirements');
            }}
            size="lg"
          >
            Пройти оценку заново
          </Button>
        </div>
      </div>
    );
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="container mx-auto max-w-4xl">
          <ResultsView />
        </div>
      </div>
    );
  }

  if (!assessmentStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-4">Оценка компетенций аналитика</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Пройдите комплексную оценку ваших навыков в 4 ключевых областях. 
                Результат покажет текущий уровень и даст рекомендации по развитию.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {competencyAreas.map((area) => (
                <Card key={area.id} className="border-0 bg-white/80">
                  <CardHeader className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${area.color}-100 rounded-full mb-4`}>
                      <Icon name={area.icon as any} size={24} className={`text-${area.color}-600`} />
                    </div>
                    <CardTitle className="text-lg">{area.name}</CardTitle>
                    <CardDescription>{area.questions.length} вопросов</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-slate-600">
                ⏱️ Время прохождения: ~15 минут<br />
                📊 {competencyAreas.reduce((sum, area) => sum + area.questions.length, 0)} вопросов в 4 категориях<br />
                📈 Персональные рекомендации по развитию
              </p>
              
              <Button size="lg" onClick={() => setAssessmentStarted(true)} className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Начать оценку
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestions = getCurrentQuestions();
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const isAnswered = currentQuestion && answers[currentQuestion.id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="container mx-auto max-w-4xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-800">Оценка компетенций</h1>
            <Badge variant="secondary">{overallProgress()}% завершено</Badge>
          </div>
          <Progress value={overallProgress()} className="h-2" />
        </div>

        {/* Tabs */}
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-8">
          <TabsList className="grid grid-cols-4 w-full">
            {competencyAreas.map((area) => (
              <TabsTrigger key={area.id} value={area.id} className="text-sm">
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {competencyAreas.map((area) => (
            <TabsContent key={area.id} value={area.id}>
              {currentQuestion && (
                <Card className="border-0 bg-white/80">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon name={area.icon as any} size={20} className="text-primary" />
                          <Badge variant="outline">{currentQuestion.level}</Badge>
                        </div>
                        <CardTitle className="text-xl">
                          Вопрос {currentQuestionIndex + 1} из {currentQuestions.length}
                        </CardTitle>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        {area.name}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{currentQuestion.text}</h3>
                      <p className="text-slate-600">{currentQuestion.description}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-4">Оцените свой уровень (1 - совсем не умею, 5 - эксперт):</p>
                      <div className="flex space-x-3">
                        {[1, 2, 3, 4, 5].map((score) => (
                          <ScoreButton
                            key={score}
                            score={score}
                            selected={answers[currentQuestion.id] === score}
                            onClick={() => handleAnswer(currentQuestion.id, score)}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>Не умею</span>
                        <span>Эксперт</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          if (currentQuestionIndex > 0) {
                            setCurrentQuestionIndex(currentQuestionIndex - 1);
                          }
                        }}
                        disabled={currentQuestionIndex === 0}
                      >
                        <Icon name="ChevronLeft" size={16} className="mr-2" />
                        Назад
                      </Button>
                      
                      <Button 
                        onClick={nextQuestion}
                        disabled={!isAnswered}
                      >
                        {currentQuestionIndex === currentQuestions.length - 1 && 
                         competencyAreas.findIndex(a => a.id === currentTab) === competencyAreas.length - 1 
                          ? 'Завершить' : 'Далее'}
                        <Icon name="ChevronRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CompetencyAssessment;