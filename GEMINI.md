## Context Usage Rules

- Always read and consider all context files listed below before generating a response:
  - `ai/contexts/project-overview.md`
  - `ai/contexts/conventions.md`
  - `ai/contexts/test-conventions.md`
  - `ai/agents/frontend-expert.md`

- The context in these files is mandatory and must be followed strictly.

- If there is a conflict:
  1. `test-conventions.md` has the highest priority for anything related to tests
  2. `conventions.md` applies to general code standards
  3. `project-overview.md` defines architecture and structure
  4. `frontend-expert.md` defines best practices and opinions

- Do not ignore any context file when its domain is relevant to the request.

- All generated code and responses must comply with the defined conventions.

- After generating a response, validate internally that the output:
  - follows all relevant conventions
  - respects the rules defined in the context files
  - does not violate any project standards

- If any violation is detected, correct the response before finalizing it.
