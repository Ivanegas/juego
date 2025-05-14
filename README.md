# juego

openapi: 3.0.1
info:
  title: mroh-role-mrohccap
  description: API para obtener a través del ROL del usuario las opciones y sistemas a los que puede acceder.
  version: 1.0.0

servers:
  - url: https://mrohccap-apidev.mroholdings.com/mroh-role-mrohccap
    description: Entorno de desarrollo de MROH

paths:
  /api/health:
    get:
      summary: Verificar estado del microservicio
      description: Retorna el estado actual del microservicio (UP o DOWN).
      responses:
        '200':
          description: Servicio activo
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    example: "UP"
        '500':
          description: Error al verificar el estado
          content:
            text/plain:
              schema:
                type: string
                example: "DOWN"

  /api/option:
    post:
      summary: Obtener las opciones de acuerdo a los roles del usuario
      description: Se envía el rol del usuario y se obtienen las opciones que puede acceder.
      parameters:
        - name: rolesByUser
          in: query
          required: true
          description: Rol del usuario
          schema:
            type: string
      responses:
        '200':
          description: Proceso exitoso
          content:
            text/html:
              schema:
                type: string
        '500':
          description: Error al realizar el proceso
          content:
            text/plain:
              schema:
                type: string

  /api/optionbyemail:
    post:
      summary: Obtener las opciones de acuerdo al correo del usuario
      description: Se envía el correo del usuario y se obtienen las opciones que puede acceder.
      parameters:
        - name: email
          in: query
          required: true
          description: Correo del usuario
          schema:
            type: string
      responses:
        '200':
          description: Proceso exitoso
          content:
            text/html:
              schema:
                type: string
        '500':
          description: Error al realizar el proceso
          content:
            text/plain:
              schema:
                type: string

  /api/system:
    post:
      summary: Obtener los sistemas de acuerdo al correo del usuario
      description: Se envía el correo del usuario y se obtienen los sistemas que puede acceder.
      parameters:
        - name: email
          in: query
          required: true
          description: Correo del usuario
          schema:
            type: string
      responses:
        '200':
          description: Proceso exitoso
          content:
            text/html:
              schema:
                type: string
        '500':
          description: Error al realizar el proceso
          content:
            text/plain:
              schema:
                type: string
