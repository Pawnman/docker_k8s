# Домашняя работа по курсу «Технологии сетевого взаимодействия» (k8s)
# Выполнил студент группы М80-209М-23 Пешков М.Ю.

<h2>Задание: задеплоить Nginx со статической страницей</h2>


<h2>Структура проекта</h2>
    <li>Dockerfile Файл для сборки Docker-образа</li>
    <li>README.md Инструкция по развёртыванию</li>
    <li>deployment.yaml Манифест Kubernetes для Deployment</li>
    <li>index.html HTML-файл для статической страницы</li>
    <li>service.yaml  Манифест Kubernetes для Service</li>
    <li>configmap.yaml Манифест Kubernetes для ConfigMap</li>


<h2>Запуск и развертывание</h2>
    <li>1. Убедиться, что установлены следующие инструменты: Docker, kubectl, k3d.</li>
    <li>2. Склонировать репозиторий: git clone <URL-репозитория></li>
    <li>3. Перейти в папку с проектом: cd pmu-nginx-project</li>
    <li>4. Создать кластер k3d: k3d cluster create test-cluster --port '30001:30001'</li>
    <li>5. Сборать Docker-образ: docker build -t pmu-nginx:v1 .</li>
    <li>6. Импорт образа в k3d: k3d image import pmu-nginx:v1 --cluster test-cluster</li>
    <li>7. Примененить манифесты Kubernetes:</li>
    <ul>
        <li>kubectl apply -f configmap.yaml</li>
        <li>kubectl apply -f deployment.yaml</li>
        <li>kubectl apply -f service.yaml</li>
    </ul>
    <li>8. Проверить работу: kubectl get pods</li>
    <li>9. Открыть веб-браузер и перейти по адресу: http://localhost:30001</li>
