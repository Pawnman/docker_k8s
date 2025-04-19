# Домашняя работа по курсу «Технологии сетевого взаимодействия» (k8s)
# Выполнил студент группы М80-209М-23 Пешков М.Ю.
<h2>Задание - Создать сервис, привязанный к хостовому посту и деплой при помощи использованием ingress</h2>

<p>Данный репозиторий содержит манифесты Kubernetes для развертывания простого веб-приложения с использованием NGINX Ingress Controller.</p>


<h2>Инструкция по развертыванию: </h2>
    <li>1. Убедиться, что установлены следующие инструменты: Docker, kubectl, minicube.</li>
    <li>2. Установить NGINX Ingress Controller: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml</li>
    <li>3. Проверить поды: kubectl get pods -n ingress-nginx</li>
    <li>4. Примененить манифесты Kubernetes: </li>
    <ul>
        <li>kubectl apply -f deployment.yaml</li>
        <li>kubectl apply -f service.yaml</li>
        <li>kubectl apply -f ingress.yaml</li>
    </ul>
    <li>5. Настроить DNS (для Windows): </li>
    <ul>
        <li>Добавить запись "127.0.0.1 my-app.example.com" (без кавычек) в файл, открыв от имени администратора C:\Windows\System32\drivers\etc\hosts</li>
        <li>kubectl apply -f service.yaml</li>
        <li>kubectl apply -f ingress.yaml</li>
    </ul>
    <li>6. Протестировать: </li>
    <ul>
        <li>Проверить поды: kubectl get pods</li>
    </ul>
    <p align="center">
      <img src="imпs/img_2.jpg" alt="Рисунок - Результат проверки подов" width="1000" height="200">
      <br>
      <em>Рисунок - Результат проверки подов</em>
    </p>
    <ul>
      <li>Провер дbnmоступностm через Service - временный под: </li>
      <li>kubectl run -i --tty --rm debug --image=busybox --restart=Never -- sh</li>
      <li> Команда внутри контейнера: </li>
      <li>wget -qO- http://my-app-service.default.svc.cluster.local:80</li>
    </ul>
    <li>7. Открыть страницу веб-браузере: http://my-app.example.com</li>
    <p align="center">
      <img src="imпs/img_1.jpg" alt="Рисунок - Веб-страница с приветсвием" width="1000" height="200">
      <br>
      <em>Рисунок - Веб-страница с приветсвием</em>
    </p>
