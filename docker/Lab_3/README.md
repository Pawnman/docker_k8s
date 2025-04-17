# Лабораторная работа по курсу "Технологии сетевого взаимодействия" 
# Выполнил студент группы М80-209М-23 Пешков М.Ю.
# Задание: сборка многоступенчатого build-а (сравнение с одноступенчатым подходом)

В данной работе для наглядности выполнены:
1. Подход одноступенчатой сборки
2. Подход многоступенчатой сборки

Сборка контейнера одноступенчатая: docker build -t pmu-node-app-single-stage -f Dockerfile-single .
Сборка контейнера многоступенчатая: docker build -t pmu-node-app-multi-stage .

Запуск контейнера для проверки работоспособности: docker run --rm -p 4000:3000 pmu-node-app-single-stage

Результататы:

pmu-node-app-multi-stage latest 2373331f7524 4 seconds ago 129MB
pmu-node-app-single-stage latest 25b6769bb21f 6 minutes ago 199MB

