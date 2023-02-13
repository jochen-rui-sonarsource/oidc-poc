FROM --platform=arm64 node:19-alpine3.16 as frontend

COPY ./frontend/package.json /frontend/package.json
COPY ./frontend/package-lock.json /frontend/package-lock.json
COPY ./frontend /frontend

WORKDIR /frontend
RUN npm ci


FROM --platform=arm64 node:19-alpine3.16 as api

COPY ./api/package.json /api/package.json
COPY ./api/package-lock.json /api/package-lock.json
COPY ./api /api

WORKDIR /api
RUN npm ci