# Custom Metadata API Exposure

## What is it?
Allow extensions to attach/read custom metadata on messages or sessions.

## Why expose it?
- Supports advanced workflows and cross-extension integrations.
- Enables tagging, workflow state, and custom analytics.

## Example use cases
- Tag messages for workflow state or categorization.
- Share metadata between cooperating extensions.
- Analytics on custom tags or states.

## Risks/considerations
- Security: metadata could be abused or leak info.
- Mutability: must control who can write/read metadata.

## Proposed exposure mechanism
- API export for metadata access.
- VS Code command to get/set metadata.
- Event emitter for metadata changes.
