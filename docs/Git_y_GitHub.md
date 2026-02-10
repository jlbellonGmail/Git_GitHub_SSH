
# Git y GitHub

# LLEGAMOS AL MINUTO 1:05 DEL VIDEO #

## Git

**URL Oficial:**

	[Página oficial](https://git-scm.com/)
	
---

## 1. configurar Git con un usuario y correo ##

	`git config --global user.name "jlbellon"`
	`git config --global user.email "jlbellon@gmail.com"`

	`git config --global init.defaultBranch main`  
	Para cambiar Master por main, otro nombre comunes pueden ser:
	Master, trunk o development

	Esto lo guarda en C:\Users\jlbel en archvio .gitconfig

## 2. Comandos ##

**Ayuda:**`git help -a`  `git help -g`  `git help <command>`  `git help <concept>`  `git help git` 
		
`git branch -m main` cambiar master a main

`git init`  inicializar proyectos

`git status`  estado de los archivos

`git add <nombreArchivo>`  lo agrega al area de **stage**  prepara para la foto

`git restore --staged <nobreArchivo>` lo quita del area **stage** 

`git commit "mensaje"` agrega al repositorio  es la foto 

`git checkoaut <nombreArchivo>`  ???

`git reset` recupera el ultimo commit y "elimina" actual
 
`git log` nos muestra los commit realizados

`git log --graph`  muestra linea de tiempo

`git log --graph --decorate --all --oneline` muestra resumido la linea de tiempo

## Alias ##

Esto nos permite con texto simple igualar el comportamiento de un comando mas complejo de esciribir

`git config --global alias.tree "log --graph --decorate --all --oneline"`

`git config --global alias.reset "reset"`

entonces

`git tree equivale a git log --graph --decorate --all --oneline`


## Evolución natural del historial de objetos ##
Esta secuencia garantiza la integridad total del repositorio. Es la forma más segura de trabajar porque permite "volver al pasado" para rescatar ideas sin borrar los errores o pasos intermedios que ocurrieron después. 

### Fase 1: Línea de tiempo ###
Ir armando el historial
1. Modificar el archivo
2. `git add <archivo>`  Preparando la foto/escenario (Staging)
3. `git commit -m "Mensaje"`  Obtener la foto ir armando historial
4. Resultado tras 3 ciclos: A, B, C (Donde C es el estado actual)

## Fase 2: Rescate y Progresión (El salto a D) ##
Para crear una nueva versión D basada en el contenido de B, pero manteniendo el registro de C. 
1. `git log --oneline` ver el hash de la versión a recuperar
2. `git restore --source <hash_de_B> <archivo>`
3. Trabajar en el archivo
4. `git add <archivo>`
5. `git commit -m "Mensaje D"`

Historial A,B,C,D

## Uso del Checkout y Reset ##
Tienes un archivo llamado notas.txt. A lo largo del tiempo, hiciste 3 commits:
Commit 1: El archivo dice "A"
Commit 2: El archivo dice "B"
Commit 3: El archivo dice "C" (Tu estado actual)

**Con git checkout (VIAJAR)**

`git checkout <ID-del-Commit-1> notas.txt`

Quieres ver cómo era el archivo cuando solo tenía la "A", pero no quieres borrar lo que hiciste después.

Tu archivo ahora muestra "A". Git te permite "visitar" el pasado.
Si luego te arrepientes, puedes volver a viajar al presente (C) fácilmente.
No destruiste nada.

**git reset --hard (DESHACER)**

`git reset --hard <ID-del-Commit-1>`

Decides que la "B" y la "C" fueron un error terrible y quieres que el proyecto vuelva a ser como cuando solo estaba la "A". Borraste el futuro. Los commits de "B" y "C" han desaparecido de tu línea de tiempo principal. Has "deshecho" la historia.

Resumen 

Checkout: Es como mirar una foto vieja o visitar un museo. El presente sigue existiendo.

Reset: Es como una máquina del tiempo que altera el pasado. El futuro que conocías deja de existir.


---


## Instalar WSl ## 

Si no está istalado ejecutar:

`dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
`dism /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

verificar: `wsl --status`
si da error: `wsl --install -d Ubuntu`

## Cambiar password ##
`wsl -u root`

`passwd jlb` pass: 6511


## Como crear un archivo desde la consola ##

		windows cmd
		type nul > hellogit.py
		
		power shell
		New-Item -Path . -Name "test.py" -ItemType "File"
				
		mac / linux
		touch hellogit.py










		
		
		
	


	