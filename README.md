
<div align="center">
<img src="logo.png" height="90px" width="auto" /> 
<h2>
    Portafolio / CV de <em>Marcos Portales</em>
</h2>
<p>
Résumé minimalista maquetado para web e impresión en PDF, con datos en <a href="https://jsonresume.org/schema/">JSON Resume</a>.
</p>

<p>
Desarrollador Full-Stack · IA, web moderna e IIoT — Moriles, Córdoba, España
</p>

<p>
Diseño inspirado en <a href="https://github.com/BartoszJarocki/cv">Bartosz Jarocki</a>.
Proyecto base de <a href="https://github.com/midudev/minimalist-portfolio-json">midudev</a>, adaptado y mantenido por mí.
</p>

</div>

<div align="center">
    <a href="#-sobre-el-proyecto">
        Sobre el proyecto
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-empezar">
        Empezar
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-comandos">
        Comandos
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-licencia">
        Licencia
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://portfolio.vercel.app">
        Ver portafolio
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="https://github.com/marcosportales">
        GitHub
    </a>
</div>

<p></p>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![GitHub stars](https://img.shields.io/github/stars/marcosportales/minimalist-portfolio-json)
![GitHub issues](https://img.shields.io/github/issues/marcosportales/minimalist-portfolio-json)
![GitHub forks](https://img.shields.io/github/forks/marcosportales/minimalist-portfolio-json)
![GitHub PRs](https://img.shields.io/github/issues-pr/marcosportales/minimalist-portfolio-json)

</div>

<img src="portada.png" alt="Vista previa del portafolio"></img>

## 👤 Sobre el proyecto

Este repositorio es mi **portafolio personal** y CV imprimible. El contenido vive en `cv.json` (y `cv_english.json` como variante en inglés): experiencia, proyectos, educación, skills y enlaces a redes.

Está desplegado en [portfolio.vercel.app](https://portfolio.vercel.app) e incluye, entre otras cosas:

- Atajos de teclado con **Ninja Keys**
- **Vercel Web Analytics** en producción
- Tipado del CV para que `astro check` pase en CI/CD

### Créditos

| Autor / recurso | Rol |
| --- | --- |
| [**midudev**](https://midu.dev) | Plantilla original [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json) |
| [**Bartosz Jarocki**](https://github.com/BartoszJarocki/cv) | Diseño del CV minimalista |
| [**JSON Resume**](https://jsonresume.org/schema/) | Esquema de datos del CV |
| **Marcos Portales** | Contenido, personalización y despliegue de esta versión |

Si quieres partir de la misma base que usé yo, el template oficial sigue siendo el de midudev (ver [Empezar](#-empezar)).

## 🛠️ Stack

- [**Astro**](https://astro.build/) - Framework para el sitio estático.
- [**TypeScript**](https://www.typescriptlang.org/) - Tipado del CV y componentes.
- [**Ninja Keys**](https://github.com/ssleptsov/ninja-keys) - Menú con atajos de teclado.
- [**@vercel/analytics**](https://vercel.com/docs/analytics) - Analítica web en producción.

## 🚀 Empezar

### 1. Clona este repo o usa el template original

Para **mi portafolio**:

```bash
git clone https://github.com/marcosportales/minimalist-portfolio-json.git
cd minimalist-portfolio-json
pnpm install
```

Para **crear el tuyo desde la plantilla de midudev** (recomendado si empiezas de cero):

```bash
# Activa pnpm en MacOS, WSL & Linux:
corepack enable
corepack prepare pnpm@latest --activate

pnpm create astro@latest -- --template midudev/minimalist-portfolio-json
```

### 2. Añade tu contenido

Edita `cv.json` (y opcionalmente `cv_english.json`) con tu experiencia, proyectos y perfiles.

### 3. Lanza el servidor de desarrollo

```bash
pnpm dev
```

Abre [**http://localhost:4321**](http://localhost:4321/) en el navegador.

Build de producción:

```bash
pnpm build
```

## 🧞 Comandos

|     | Comando          | Acción                                        |
| :-- | :--------------- | :-------------------------------------------- |
| ⚙️  | `dev` o `start` | Servidor de desarrollo en `localhost:4321`.  |
| ⚙️  | `build`          | `astro check` + empaquetado en `./dist/`.      |
| ⚙️  | `preview`        | Vista previa del build de producción. |

## 🔑 Licencia

[MIT](LICENSE.txt)

- Proyecto original por [**midudev**](https://midu.dev) — [minimalist-portfolio-json](https://github.com/midudev/minimalist-portfolio-json)
- Esta versión: portafolio y contenido de [**Marcos Portales**](https://github.com/marcosportales)
