# Devs4U

### Instalar el repositorio

Debes tener instalado git en tu máquina.
Ubica la carpeta que va a contener tu proyecto y abre git bash en ese directorio.
Para abrir git bash: click derecho en el interior de la carpeta donde deseas abrirlo > Abrir git bash aqui.

Una vez que tengas abierto git bash en la carpeta destino, tipea en la terminal:

```
	git clone https://github.com/Grupo8IngSoftUcab/Devs4U
```

y listo, tendras que esperar que github descargue el repo 

luego, para seguir con la siguiente parte de la instalacion abre git bash en la carpeta `Devs4U`
o tipea:

```
	cd Devs4U
```



### Instalar el proyecto

Se necesita tener instalado yarn y node en sus últimas versiones (LTS).
Puedes descargarlos en: https://yarnpkg.com/en/docs/install#windows-stable
y en https://nodejs.org/en/

Abre la consola git bash dentro de la carpeta devs4u.

Si es la primera vez que abres el proyecto tipea 
``` 
yarn install
```
para instalar las dependencias

Luego si deseas correr solo el frontend
```
yarn start
```
Y listo! El proyecto esta corriendo en el puerto 3000
puedes ir a http://localhost:3000/ en tu navegador y observarlo. 


Si deseas solo correr el backend
```
yarn run serve
```
El backend se encuentra en el puerto 5000. Usa http://localhost:5000/ si deseas probarlo con Postman

Si deseas correr tanto frontend como backend 
``` 
yarn run dev
```




### Instalar una dependencia

Teclea 
``` yarn add nombreDependencia ```

### Sobre las dependencias en el backend
**Express**: ayuda a hacer las request http en node, simplificandola. Especialmente utilizaremos su middleware y su router
**BodyParser**: permite parsear el body de un request
