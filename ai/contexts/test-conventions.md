# Testing Conventions

- Always use `it` instead of `test`.
- **Structure:** You MUST use a completely flat test structure. Do NOT use `describe` blocks under any circumstances.
- Use `describe` only for logical grouping, not for naming components.
- Each test should be isolated and self-explanatory.
- Do not group tests unless explicitly required.

## Test Naming

- Test names must always start with a third-person singular verb.
- Allowed patterns:
  - `renders`
  - `returns`
  - `calls`
- Do not use `should` in test names.

### Examples

- `it('renders the Footer correctly', () => {})`
- `it('calls the submit handler when button is clicked', () => {})`
- `it('returns the expected value when input is valid', () => {})`

## File Structure

- Test files must be placed inside a `__tests__` folder.
- The test file name must match the exact component name with the `.test` suffix.

### Examples

- Component: `Footer.component.tsx`  
  Test: `__tests__/Footer.component.test.tsx`

- Component: `UserProfile.component.tsx`  
  Test: `__tests__/UserProfile.component.test.tsx`

- Component: `auth-service.ts`  
  Test: `__tests__/auth-service.test.ts`

- Test files must follow the pattern:
  - `*.test.tsx` for React components
  - `*.test.ts` for non-React logic
