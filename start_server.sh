#!/bin/bash
# Start the API server
python3 -m llama_cpp.server --model "$MODEL_PATH" --chat_format "$CHAT_FORMAT" --n_gpu_layers "$GPU_LAYERS" &

# Start the UI server
python3 -m http.server 8080