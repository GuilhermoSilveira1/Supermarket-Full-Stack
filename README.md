# Supermarket-Full-Stack

A project that aims to create the frontend, integrate with the Java backend created in another repo, and with the PostgreSQL (still have to learn more about how to use it) DBMS.

Utilizing the Java created on the Supermarket Management System, with a CLI, the aim is to develop a frontend to the aplication, with the possibility to try some type of login validation, adm functions, etc.

Another goal is to develop an early stage of an API, to make the frontend, that will get the data from the user, send data to the Java backend, that will eventually save the data on the database.

Also, the ideia is to swap the data keeping method. Instead of using the serializable class, and creating a "data.dat", that is loaded when the system starts running, the goal is to create a PostgreSQL database, and make the Java backend talk to the database.
