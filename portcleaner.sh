#!/bin/bash

# List of ports
ports=(8000 8001 8002 8003 5009)

# Loop through the ports
for port in "${ports[@]}"; do
  # Get the PID of the process running on the current port using netstat
  pid=$(netstat -ano | findstr ":$port" | awk '{print $5}')
  
  # Check if a process is found
  if [ -n "$pid" ]; then
    echo "Killing process with PID $pid on port $port"
    # Kill the process
    taskkill /F /PID $pid
  else
    echo "No process found on port $port"
  fi
done
