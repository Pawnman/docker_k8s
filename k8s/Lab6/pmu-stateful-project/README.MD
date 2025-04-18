# Лабораторная работа по курсу «Технологии сетевого взаимодействия» (k8s)

# Выполнил студент группы М80-209М-23 Пешков М.Ю.

<h2>Задание: Создать Stateful приложение в k8s (со StatefulSet)</h2>
<p>Приложение должно работать со своим PV (можно статическим). Приложение должно быть с фронтендом и бэкендом с правами хранилища и использует механизмы секретов паролей.</p>

<p>Создано приложение, развёрнутое при помощи Kubernetes, работающее в качестве фронтенда с Nginx, в качестве бэкенда - с MySQL. Оно отображает приветственную страницу с текстом "Welcome to nginx!". Приложение развертывается в локальном кластере Kubernetes (k3d) и доступно через браузер.</p>


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
    <li>3. Перейти в папку с проектом: cd  cd pmu-stateful-project</li>
    <li>4. Создать кластер с проброской порта: k3d cluster create my-cluster --port 30002:80@loadbalancer</li>
    <li>5. Примененить манифесты Kubernetes:</li>
    <ul>
        <li>kubectl apply -f pv.yaml</li>
        <li>kubectl apply -f pvc.yaml</li>
        <li>kubectl apply -f secret.yaml</li>
        <li>kubectl apply -f statefulset.yaml</li>
        <li>kubectl apply -f deployment.yaml</li>
        <li>kubectl apply -f service.yaml</li>
    </ul>
    <li>6. Проверить работу: kubectl get pods kubectl get pv,pvc</li>
    <li>7. Открыть бэкенд приложения:</li>

<p>kubectl exec -it -- mysql -u root -p, например: если имя mysql-0: kubectl exec -it mysql-0 -- mysql -u root -p Вссести пароль, который был зашифрован base64 (для удобства указан примечанием в secret.yaml) и выполнить команду MySQL: SHOW DATABASES;</p>

<li>8. Открыть фронтенд приложения:</li>

<p>Перейти на страницу http://localhost:30002/ если не находит файл можно воспользоваться либо форвардингом порта: kubectl port-forward svc/frontend 8080:80 и перейти: http://localhost:8080/ или временно использовать прокси: kubectl proxy --port=8080 и перейти: http://localhost:8080/api/v1/namespaces/default/services/frontend/proxy/</p>

