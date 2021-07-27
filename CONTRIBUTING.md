# Contributing

## Code of Conduct

### Files structure

- В проекте используется структура feature folder.  
  Для каждого набора сущностей используются под-папки внутри feature папок
  - `components` 
  - `services`
  - `utils`]
  - `constants`
  - `screens`
- Основные feature папки
  - `app/features/common`  
    В этой папке хранятся переиспользуемый код
  - `app/features/memes`  
    Папка для экрана memes 
  - `app/features/profile`
  - `app/faetures/matchings`
- Именование всех файлов проиcходит в kebab-case, включая папки и файлы для react компонентов

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less

### JavaScript Styleguide

All JavaScript code is linted with [Prettier](https://prettier.io/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties
* Avoid default export
* Create index.ts for components
* Create storybook stories for common components
