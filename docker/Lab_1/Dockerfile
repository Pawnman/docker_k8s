# Используем пустой базовый образ
FROM scratch

# Копируем статический интерпретатор Python в контейнер
COPY python /bin/python

# Копируем стандартные библиотеки Python в контейнер
COPY ./python3.10 /usr/local/lib/python3.10

# Устанавливаем переменную окружения PYTHONSTART
ENV PYTHONSTART=/usr/local

# Копируем ваш Python-скрипт
COPY first_programm.py /app/first_programm.py

# Указываем рабочую директорию
WORKDIR /app

# Указываем команду по умолчанию
CMD ["/bin/python", "/app/first_programm.py"]

