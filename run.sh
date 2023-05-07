#!/bin/bash
docker-compose -f docker-compose.yml up -d
docker exec lighthouse-dashboard npm run dev --host 0.0.0.0