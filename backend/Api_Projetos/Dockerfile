FROM maven:3.8.4-openjdk-17 AS build

COPY src /app/src
COPY pom.xml /app

WORKDIR /app
RUN mvn clean install -DskipTests

FROM openjdk:17-jdk-slim

COPY --from=build /app/target/Api_Projetos-0.0.1-SNAPSHOT.jar /app/app.jar

WORKDIR /app

EXPOSE 8080

RUN echo "DATABASE_URL=${DATABASE_URL}" && \
    echo "USERNAME=${USERNAME}" && \
    echo "PASSWORD=${PASSWORD}"

CMD [ "java", "-jar", "app.jar" ]