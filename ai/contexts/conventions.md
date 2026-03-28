# Development Conventions

## File Naming & Structure

- Components are usually grouped in their own folders: `component-name/ComponentName.component.tsx`.
- Supporting files follow the suffix pattern: `.styles.ts`, `.types.ts`, `.config.tsx`, `.constants.ts`.
- File naming conventions:
  - Component files must use PascalCase (e.g., `UserProfile.component.tsx`).
  - Adjacent files must also use PascalCase (e.g., `UserProfile.styles.ts`, `UserProfile.types.ts`).
  - Exception: singular hooks and utilities must use camelCase (e.g., `useUserProfile.ts`).
- Use path aliases (`@/*`) to import from the `src` directory (e.g., `@/shared/...`).
- All folder names must use kebab-case (e.g., `user-profile`, `auth-service`, `checkout-form`).

## Coding Standards (ESLint, Prettier & EditorConfig)

- Always follow the project's ESLint, Prettier and EditorConfig configurations.
- These tools define the **source of truth** for code style and formatting.
- Do not manually override formatting rules (e.g., indentation, quotes, semicolons).
- Prefer automated formatting via Prettier over manual adjustments.
- Respect existing code style when modifying or extending code.
- Before finishing any task, ensure code is formatted and linted:
  - `npm run lint`
  - `npm run format`

## ESLint Rules & Coding Practices

- **Functions:** Named components must use function declarations:
  `function MyComponent() {}`.
  Arrow functions are allowed for unnamed components (e.g., inside `forwardRef`).
- **Default Exports:** Avoid exporting functions directly.
  Always declare first, then export:
  ```ts
  function MyComponent() {}
  export default MyComponent;
  ```
- **Imports:** You MUST always use path aliases (`@/*`) for absolute imports from the `src` directory (e.g., `@/shared/...`). Never use relative paths like `../../` to access files outside the current directory's scope.
