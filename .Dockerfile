# Use an official Python runtime as a parent image
FROM python:3.8-slim-buster

# Set the working directory in the container to /app
WORKDIR /app

# Add the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV MODEL_PATH="./models/mistral-7b-openorca.Q4_0.gguf"
ENV CHAT_FORMAT="chatml"
ENV GPU_LAYERS="1"

CMD ["/app/start_servers.sh"]