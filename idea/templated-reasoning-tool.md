# Templated Reasoning Pattern Tool

**Concept:**
Create a tool that initiates and manages a stepwise, templated reasoning process. When the LLM calls this tool, it returns a prompt or reasoning step; the LLM responds, and the tool returns the next step, continuing the exchange. Each message sent and received is tracked in the context as part of the tool's result.

**Motivation:**
- Enables structured, multi-turn reasoning patterns (e.g., Socratic questioning, checklists, or guided workflows).
- Allows the LLM to externalize and track its reasoning process, making agentic behavior more transparent and auditable.
- Useful for debugging, teaching, or enforcing best practices in code review, design, or problem solving.

**How it works:**
- The tool exposes a set of reasoning templates or step sequences (e.g., "5 Whys", "Design Checklist").
- The LLM calls the tool to start a session; the tool returns the first prompt/step.
- The LLM responds; the tool processes the reply and returns the next step or prompt.
- Each exchange (tool prompt, LLM response) is recorded in the tool call result and context.
- The process continues until the template is complete or the LLM ends the session.

**Potential Use Cases:**
- Guided code review or debugging sessions.
- Structured design or architecture discussions.
- Teaching and onboarding workflows.
- Auditable agentic reasoning chains for compliance or research.
