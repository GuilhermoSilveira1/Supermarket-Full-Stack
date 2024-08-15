# Supermarket-Full-Stack

A project that aims to create the frontend, integrate with the Java backend created in another repo, and with the PostgreSQL (still have to learn more about how to use it) DBMS.

Utilizing the Java created on the Supermarket Management System, with a CLI, the aim is to develop a frontend to the aplication, with the possibility to try some type of login validation, adm functions, etc.

Another goal is to develop an early stage of an API, to make the frontend, that will get the data from the user, send data to the Java backend, that will eventually save the data on the database.

Also, the ideia is to swap the data keeping method. Instead of using the serializable class, and creating a "data.dat", that is loaded when the system starts running, the goal is to create a PostgreSQL database, and make the Java backend talk to the database.

Something that I would like to try is to use some cloud service to host the DB, to learn about cloud development, among other concepts.

15/08/2024
Mid way through the frontend project, I decided to switch the aproach on loading the content of the pages, from having some HTML files to the JS file adding and removing content dinamically.
Some commits, changing those files are updates on the code to make this change.
