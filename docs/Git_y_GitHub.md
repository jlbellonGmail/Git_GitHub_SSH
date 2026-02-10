
# Git y GitHub

# LLEGAMOS AL MINUTO 1:05 DEL VIDEO #

## Git

**URL Oficial:**

	[Página oficial](https://git-scm.com/)
	
---

Evolución natural del historial de objetos
Esta secuencia garantiza la integridad total del repositorio. Es la forma más segura de trabajar porque permite "volver al pasado" para rescatar ideas sin borrar los errores o pasos intermedios que ocurrieron después.


## Instalar WSl ## 

Si no está istalado ejecutar:

`dism /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
`dism /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

verificar: `wsl --status`
si da error: `wsl --install -d Ubuntu`

## Cambiar password ##
`wsl -u root`

`passwd jlb` pass: 6511


## Primero configurar Git con un usuario y correo ##

	`git config --global user.name "jlbellon"`
	`git config --global user.email "jlbellon@gmail.com"`

	`git config --global init.defaultBranch main`  
	Para cambiar Master por main, otro nombre comunes pueden ser:
	Master, trunk o development

	Esto lo guarda en C:\Users\jlbel en archvio .gitconfig



**Comandos**

**Nota:**`git help -a` and `git help -g` list available subcommands and some concept guides. 

See `git help <command>` or `git help <concept>` to read about a specific subcommand or concept. 

See `git help git` for an overview of the system.

**Como crear un archivo desde la consola**

		windows cmd
		type nul > hellogit.py
		
		power shell
		New-Item -Path . -Name "test.py" -ItemType "File"
				
		mac / linux
		touch hellogit.py
		
`git branch -m main`g

`git init`  inicializar proyectos

`git status`  y nos dara información

`git add <nombreArchivo>`  lo agrega al area de **stage** y deja como referencia para la foto

`git restore --staged <nobreArchivo>' lo quita del area **stage** 

`git commit "mensaje"` agrega al repositorio (en editor :wq para salir) y es la foto al archivo

`git checkoaut <nombreArchivo>`  restaura a la version anterior el archivo commiteado

`git reset` muestra la ultima foto (commit) de los archivos
 
`git log` nos muestra los commit realizados

	`git log --graph`  muestra linea de tiempo

	`git log --graph --decorate --all --oneline`

de esta forma vamos viendo la rama como va avanzando

	main --- commit1 --- commit2 --- commit n


## Alias ##

Esto nos permite con texto simple igualar el comportamiento de un comando mas complejo de esciribir

`git config --global alias.tree "log --graph --decorate --all --oneline"`

`git config --global alias.reset "reset"`

entonces

`git tree equivale a git log --graph --decorate --all --oneline`














		
		
		
	


	