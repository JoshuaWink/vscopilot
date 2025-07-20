# GitHub Copilot Chat — Developer Documentation

## Project Overview

This repository contains the source code for the GitHub Copilot Chat extension for Visual Studio Code. It provides conversational AI features, agent mode, and deep integration with the VS Code editor, enabling AI-powered peer programming and code assistance.

---

## Folder Structure

```
Directory structure:
└── microsoft-vscode-copilot-chat/
    ├── README.md
    ├── cgmanifest.json
    ├── CHANGELOG.md
    ├── CODE_OF_CONDUCT.md
    ├── CodeQL.yml
    ├── CONTRIBUTING.md
    ├── eslint.config.mjs
    ├── LICENSE.txt
    ├── lint-staged.config.js
    ├── package.json
    ├── package.nls.json
    ├── SECURITY.md
    ├── tsconfig.base.json
    ├── tsconfig.json
    ├── tsconfig.worker.json
    ├── tsfmt.json
    ├── vite.config.ts
    ├── .esbuild.ts
    ├── .eslint-ignore
    ├── .npmrc
    ├── .nvmrc
    ├── .prettierignore
    ├── .vscode-test.mjs
    ├── .vscodeignore
    ├── assets/
    │   └── copilot.woff
    ├── docs/
    │   └── tools.md
    ├── script/
    │   ├── applyLocalDts.sh
    │   ├── compareStestAlternativeRuns.ts
    │   ├── logRecordingTypes.ts
    │   ├── postinstall.ts
    │   ├── prepare.ts
    │   ├── scoredEditsReconciler.ts
    │   ├── simulate.ps1
    │   ├── simulate.sh
    │   ├── tsconfig.json
    │   ├── electron/
    │   │   ├── simulationWorkbench.css
    │   │   ├── simulationWorkbench.html
    │   │   └── simulationWorkbenchMain.js
    │   ├── setup/
    │   │   ├── copySources.ts
    │   │   ├── createVenv.mts
    │   │   ├── getEnv.mts
    │   │   └── getToken.mts
    │   ├── test/
    │   │   └── scoredEditsReconciler.spec.ts
    │   └── testGeneration/
    │       └── editFromPatchTests.ts
    ├── src/
    │   ├── vscodeTypes.ts
    │   ├── extension/
    │   │   ├── githubPullRequest.d.ts
    │   │   ├── vscode.proposed.activeComment.d.ts
    │   │   ├── vscode.proposed.aiRelatedInformation.d.ts
    │   │   ├── vscode.proposed.aiSettingsSearch.d.ts
    │   │   ├── vscode.proposed.aiTextSearchProvider.d.ts
    │   │   ├── vscode.proposed.authLearnMore.d.ts
    │   │   ├── vscode.proposed.chatBinaryReferenceData.d.ts
    │   │   ├── vscode.proposed.chatEditing.d.ts
    │   │   ├── vscode.proposed.chatParticipantAdditions.d.ts
    │   │   ├── vscode.proposed.chatParticipantPrivate.d.ts
    │   │   ├── vscode.proposed.chatProvider.d.ts
    │   │   ├── vscode.proposed.chatReadonlyPromptReference.d.ts
    │   │   ├── vscode.proposed.chatReferenceDiagnostic.d.ts
    │   │   ├── vscode.proposed.chatStatusItem.d.ts
    │   │   ├── vscode.proposed.codeActionAI.d.ts
    │   │   ├── vscode.proposed.commentReveal.d.ts
    │   │   ├── vscode.proposed.contribCommentsViewThreadMenus.d.ts
    │   │   ├── vscode.proposed.contribCommentThreadAdditionalMenu.d.ts
    │   │   ├── vscode.proposed.contribSourceControlInputBoxMenu.d.ts
    │   │   ├── vscode.proposed.defaultChatParticipant.d.ts
    │   │   ├── vscode.proposed.documentFiltersExclusive.d.ts
    │   │   ├── vscode.proposed.embeddings.d.ts
    │   │   ├── vscode.proposed.extensionsAny.d.ts
    │   │   ├── vscode.proposed.findFiles2.d.ts
    │   │   ├── vscode.proposed.findTextInFiles.d.ts
    │   │   ├── vscode.proposed.findTextInFiles2.d.ts
    │   │   ├── vscode.proposed.inlineCompletionsAdditions.d.ts
    │   │   ├── vscode.proposed.interactive.d.ts
    │   │   ├── vscode.proposed.languageModelCapabilities.d.ts
    │   │   ├── vscode.proposed.languageModelDataPart.d.ts
    │   │   ├── vscode.proposed.languageModelSystem.d.ts
    │   │   ├── vscode.proposed.mappedEditsProvider.d.ts
    │   │   ├── vscode.proposed.newSymbolNamesProvider.d.ts
    │   │   ├── vscode.proposed.readonlyMessage.d.ts
    │   │   ├── vscode.proposed.resolvers.d.ts
    │   │   ├── vscode.proposed.scmInputBoxValueProvider.d.ts
    │   │   ├── vscode.proposed.taskProblemMatcherStatus.d.ts
    │   │   ├── vscode.proposed.terminalDataWriteEvent.d.ts
    │   │   ├── vscode.proposed.terminalExecuteCommandEvent.d.ts
    │   │   ├── vscode.proposed.terminalQuickFixProvider.d.ts
    │   │   ├── vscode.proposed.terminalSelection.d.ts
    │   │   ├── vscode.proposed.testObserver.d.ts
    │   │   ├── vscode.proposed.textDocumentChangeReason.d.ts
    │   │   ├── vscode.proposed.textSearchProvider.d.ts
    │   │   ├── vscode.proposed.textSearchProvider2.d.ts
    │   │   ├── api/
    │   │   │   └── vscode/
    │   │   │       ├── api.d.ts
    │   │   │       └── extensionApi.ts
    │   │   ├── authentication/
    │   │   │   └── vscode-node/
    │   │   │       └── authentication.contribution.ts
    │   │   ├── byok/
    │   │   │   ├── common/
    │   │   │   │   └── byokProvider.ts
    │   │   │   ├── node/
    │   │   │   │   └── openAIEndpoint.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── anthropicMessageConverter.ts
    │   │   │       ├── anthropicProvider.ts
    │   │   │       ├── azureProvider.ts
    │   │   │       ├── baseOpenAICompatibleProvider.ts
    │   │   │       ├── byokContribution.ts
    │   │   │       ├── byokStorageService.ts
    │   │   │       ├── byokUIService.ts
    │   │   │       ├── cerebrasProvider.ts
    │   │   │       ├── geminiProvider.ts
    │   │   │       ├── groqProvider.ts
    │   │   │       ├── ollamaProvider.ts
    │   │   │       ├── openAIProvider.ts
    │   │   │       └── openRouterProvider.ts
    │   │   ├── chat/
    │   │   │   └── vscode-node/
    │   │   │       └── chatQuota.contribution.ts
    │   │   ├── codeBlocks/
    │   │   │   ├── node/
    │   │   │   │   ├── codeBlockProcessor.ts
    │   │   │   │   └── test/
    │   │   │   │       └── codeBlockProcessor.spec.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── chatBlockLanguageFeatures.contribution.ts
    │   │   │       └── provider.ts
    │   │   ├── commands/
    │   │   │   └── node/
    │   │   │       └── commandService.ts
    │   │   ├── common/
    │   │   │   ├── constants.ts
    │   │   │   └── contributions.ts
    │   │   ├── configuration/
    │   │   │   └── vscode-node/
    │   │   │       └── configurationMigration.ts
    │   │   ├── context/
    │   │   │   ├── node/
    │   │   │   │   └── resolvers/
    │   │   │   │       ├── extensionApi.tsx
    │   │   │   │       ├── fixSelection.ts
    │   │   │   │       ├── genericInlineIntentInvocation.ts
    │   │   │   │       ├── genericPanelIntentInvocation.ts
    │   │   │   │       ├── inlineChatSelection.ts
    │   │   │   │       ├── inlineFixIntentInvocation.ts
    │   │   │   │       ├── promptWorkspaceLabels.ts
    │   │   │   │       ├── selectionContextHelpers.ts
    │   │   │   │       └── vscodeContext.ts
    │   │   │   └── vscode/
    │   │   │       └── context.contribution.ts
    │   │   ├── contextKeys/
    │   │   │   └── vscode-node/
    │   │   │       └── contextKeys.contribution.ts
    │   │   ├── conversation/
    │   │   │   ├── common/
    │   │   │   │   └── languageModelChatMessageHelpers.ts
    │   │   │   ├── node/
    │   │   │   │   ├── aiMappedEditsProvider.ts
    │   │   │   │   └── githubPullRequestProviders.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── aiMappedEditsContrib.ts
    │   │   │       ├── chatParticipants.ts
    │   │   │       ├── conversationFeature.ts
    │   │   │       ├── feedbackCollection.ts
    │   │   │       ├── feedbackContribution.ts
    │   │   │       ├── feedbackReporter.ts
    │   │   │       ├── languageModelAccess.ts
    │   │   │       ├── languageModelAccessPrompt.tsx
    │   │   │       ├── logWorkspaceState.ts
    │   │   │       ├── newWorkspaceFollowup.ts
    │   │   │       ├── remoteAgents.ts
    │   │   │       ├── terminalFixGenerator.ts
    │   │   │       ├── userActions.ts
    │   │   │       ├── welcomeMessageProvider.ts
    │   │   │       └── test/
    │   │   │           ├── conversationFeature.test.ts
    │   │   │           ├── githubPullRequestTitleAndDescription.test.ts
    │   │   │           ├── interactiveEditorSessionProvider.test.ts
    │   │   │           ├── interactiveSessionProvider.telemetry.test.ts
    │   │   │           └── languageModelAccess.test.ts
    │   │   ├── conversationStore/
    │   │   │   └── node/
    │   │   │       └── conversationStore.ts
    │   │   ├── extension/
    │   │   │   ├── vscode/
    │   │   │   │   ├── contributions.ts
    │   │   │   │   ├── extension.ts
    │   │   │   │   └── services.ts
    │   │   │   ├── vscode-node/
    │   │   │   │   ├── contributions.ts
    │   │   │   │   ├── extension.ts
    │   │   │   │   └── services.ts
    │   │   │   └── vscode-worker/
    │   │   │       ├── contributions.ts
    │   │   │       ├── extension.ts
    │   │   │       └── services.ts
    │   │   ├── getting-started/
    │   │   │   ├── common/
    │   │   │   │   └── newWorkspaceContext.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── commands.ts
    │   │   │       ├── newWorkspace.contribution.ts
    │   │   │       └── newWorkspaceInitializer.ts
    │   │   ├── ignore/
    │   │   │   └── vscode-node/
    │   │   │       ├── ignoreMessage.ts
    │   │   │       └── ignoreProvider.ts
    │   │   ├── inlineChat/
    │   │   │   ├── node/
    │   │   │   │   ├── codeContextRegion.ts
    │   │   │   │   ├── diagnosticsTelemetry.ts
    │   │   │   │   ├── inlineChatConstants.ts
    │   │   │   │   ├── promptCraftingTypes.ts
    │   │   │   │   └── rendererVisualization.ts
    │   │   │   ├── test/
    │   │   │   │   └── vscode-node/
    │   │   │   │       └── inlineChatCompletionProvider.test.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── inlineChatCodeActions.ts
    │   │   │       ├── inlineChatCommands.ts
    │   │   │       ├── inlineChatHint.ts
    │   │   │       └── inlineChatNotebookActions.ts
    │   │   ├── inlineEdits/
    │   │   │   ├── common/
    │   │   │   │   ├── common.ts
    │   │   │   │   ├── delayer.ts
    │   │   │   │   ├── documentWithAnnotatedEdits.ts
    │   │   │   │   ├── editRebase.ts
    │   │   │   │   ├── editSourceTrackingImpl.ts
    │   │   │   │   ├── editTracker.ts
    │   │   │   │   ├── ghNearbyNesProvider.tsx
    │   │   │   │   ├── nearbyCursorInlineEditProvider.ts
    │   │   │   │   ├── observableWorkspaceRecordingReplayer.ts
    │   │   │   │   └── rejectionCollector.ts
    │   │   │   ├── node/
    │   │   │   │   ├── createNextEditProvider.ts
    │   │   │   │   ├── debugRecorder.ts
    │   │   │   │   ├── diffNextEdits.ts
    │   │   │   │   ├── importFiltering.ts
    │   │   │   │   ├── nesConfigs.ts
    │   │   │   │   ├── nextEditCache.ts
    │   │   │   │   ├── nextEditProvider.ts
    │   │   │   │   ├── nextEditProviderTelemetry.ts
    │   │   │   │   ├── nextEditResult.ts
    │   │   │   │   └── serverPoweredInlineEditProvider.ts
    │   │   │   ├── test/
    │   │   │   │   ├── common/
    │   │   │   │   │   └── editRebase.spec.ts
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── debugRecorder.spec.ts
    │   │   │   │   │   ├── editSourceTracker.spec.ts
    │   │   │   │   │   ├── fileLoading.ts
    │   │   │   │   │   ├── ignoreImportChanges.spec.ts
    │   │   │   │   │   ├── nesXtabHistoryTracker.spec.ts
    │   │   │   │   │   ├── nextEditProvider.spec.ts
    │   │   │   │   │   ├── nextEditProviderCaching.spec.ts
    │   │   │   │   │   ├── rejectionCollector.spec.ts
    │   │   │   │   │   ├── runRecording.ts
    │   │   │   │   │   ├── utils.ts
    │   │   │   │   │   └── recordings/
    │   │   │   │   │       ├── ArrayToObject.recording.w.json
    │   │   │   │   │       ├── ChangePointToPoint3D.recording.w.json
    │   │   │   │   │       ├── DeclaringConstructorArgument.recording.w.json
    │   │   │   │   │       ├── EditSourceTracker.test1.recording.w.json
    │   │   │   │   │       └── RejectionCollector.test1.w.json
    │   │   │   │   └── vscode-node/
    │   │   │   │       ├── documentFilter.ts
    │   │   │   │       ├── isInlineSuggestion.test.ts
    │   │   │   │       └── isSubword.spec.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── inlineCompletionProvider.ts
    │   │   │       ├── inlineEditModel.ts
    │   │   │       ├── inlineEditProviderFeature.ts
    │   │   │       ├── isInlineSuggestion.ts
    │   │   │       ├── components/
    │   │   │       │   ├── inlineEditDebugComponent.ts
    │   │   │       │   ├── logContextRecorder.ts
    │   │   │       │   └── test/
    │   │   │       │       └── inlineEditDebugComponent.spec.ts
    │   │   │       ├── features/
    │   │   │       │   ├── diagnosticsCompletionProcessor.ts
    │   │   │       │   ├── diagnosticsInlineEditProvider.ts
    │   │   │       │   ├── editSourceTrackingFeature.ts
    │   │   │       │   └── diagnosticsBasedCompletions/
    │   │   │       │       ├── anyDiagnosticsCompletionProvider.ts
    │   │   │       │       ├── asyncDiagnosticsCompletionProvider.ts
    │   │   │       │       ├── diagnosticsCompletions.ts
    │   │   │       │       └── importDiagnosticsCompletionProvider.ts
    │   │   │       ├── parts/
    │   │   │       │   ├── inlineEditLogger.ts
    │   │   │       │   ├── lastEditTimeTracker.ts
    │   │   │       │   └── vscodeWorkspace.ts
    │   │   │       └── utils/
    │   │   │           ├── observablesUtils.ts
    │   │   │           └── virtualTextDocumentProvider.ts
    │   │   ├── intents/
    │   │   │   ├── common/
    │   │   │   │   └── intents.ts
    │   │   │   ├── node/
    │   │   │   │   ├── agentIntent.ts
    │   │   │   │   ├── allIntents.ts
    │   │   │   │   ├── askAgentIntent.ts
    │   │   │   │   ├── cacheBreakpoints.ts
    │   │   │   │   ├── docIntent.tsx
    │   │   │   │   ├── editCodeIntent.ts
    │   │   │   │   ├── editCodeIntent2.ts
    │   │   │   │   ├── editCodeStep.ts
    │   │   │   │   ├── explainIntent.ts
    │   │   │   │   ├── fixIntent.ts
    │   │   │   │   ├── generateCodeIntent.ts
    │   │   │   │   ├── generateNewWorkspaceContent.ts
    │   │   │   │   ├── intentService.ts
    │   │   │   │   ├── newIntent.ts
    │   │   │   │   ├── newNotebookIntent.contribution.ts
    │   │   │   │   ├── newNotebookIntent.ts
    │   │   │   │   ├── pauseController.ts
    │   │   │   │   ├── reviewIntent.ts
    │   │   │   │   ├── searchIntent.ts
    │   │   │   │   ├── searchKeywordsIntent.ts
    │   │   │   │   ├── searchPanelIntent.ts
    │   │   │   │   ├── setupTests.ts
    │   │   │   │   ├── startDebugging.ts
    │   │   │   │   ├── terminalExplainIntent.ts
    │   │   │   │   ├── terminalIntent.ts
    │   │   │   │   ├── toolCallingLoop.ts
    │   │   │   │   ├── unknownIntent.ts
    │   │   │   │   ├── vscodeIntent.ts
    │   │   │   │   ├── workspaceIntent.ts
    │   │   │   │   └── testIntent/
    │   │   │   │       ├── setupTestsFrameworkQueryInvocation.tsx
    │   │   │   │       ├── setupTestsInvocation.tsx
    │   │   │   │       ├── summarizedDocumentWithSelection.tsx
    │   │   │   │       ├── testDeps.tsx
    │   │   │   │       ├── testFromSrcInvocation.tsx
    │   │   │   │       ├── testFromTestInvocation.tsx
    │   │   │   │       ├── testInfoStorage.ts
    │   │   │   │       ├── testIntent.tsx
    │   │   │   │       ├── testPromptUtil.ts
    │   │   │   │       └── userQueryParser.tsx
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       └── editCodeIntent.spec.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── fixTestFailureContributions.ts
    │   │   │       ├── newWorkspacePreviewFileSystemProvider.ts
    │   │   │       ├── newWorkspaceTextDocumentProvider.ts
    │   │   │       ├── testGenAction.ts
    │   │   │       └── testGenLens.ts
    │   │   ├── linkify/
    │   │   │   ├── common/
    │   │   │   │   ├── commands.ts
    │   │   │   │   ├── filePathLinkifier.ts
    │   │   │   │   ├── linkifiedText.ts
    │   │   │   │   ├── linkifier.ts
    │   │   │   │   ├── linkifyService.ts
    │   │   │   │   └── responseStreamWithLinkification.ts
    │   │   │   ├── test/
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── filePathLinkifier.spec.ts
    │   │   │   │   │   ├── linkifier.spec.ts
    │   │   │   │   │   └── util.ts
    │   │   │   │   └── vscode-node/
    │   │   │   │       ├── findSymbol.test.ts
    │   │   │   │       ├── notebookCellLinkifier.spec.ts
    │   │   │   │       └── symbolLinkifier.test.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── commands.ts
    │   │   │       ├── findSymbol.ts
    │   │   │       ├── findWord.ts
    │   │   │       ├── inlineCodeSymbolLinkifier.ts
    │   │   │       ├── notebookCellLinkifier.ts
    │   │   │       └── symbolLinkifier.ts
    │   │   ├── log/
    │   │   │   └── vscode-node/
    │   │   │       ├── loggingActions.ts
    │   │   │       └── requestLogTree.ts
    │   │   ├── mcp/
    │   │   │   └── vscode-node/
    │   │   │       ├── commands.ts
    │   │   │       ├── mcpToolCallingLoop.tsx
    │   │   │       ├── mcpToolCallingLoopPrompt.tsx
    │   │   │       └── mcpToolCallingTools.tsx
    │   │   ├── notebook/
    │   │   │   └── vscode-node/
    │   │   │       └── followActions.ts
    │   │   ├── onboardDebug/
    │   │   │   ├── common/
    │   │   │   │   └── launchConfigService.ts
    │   │   │   ├── node/
    │   │   │   │   ├── commandToConfigConverter.tsx
    │   │   │   │   ├── copilotDebugCommandSessionFactory.tsx
    │   │   │   │   ├── debuggableCommandIdentifier.ts
    │   │   │   │   ├── languageToolsProvider.tsx
    │   │   │   │   ├── parseLaunchConfigFromResponse.ts
    │   │   │   │   └── copilotDebugWorker/
    │   │   │   │       ├── copilotDebugWorker.ps1
    │   │   │   │       ├── index.ts
    │   │   │   │       ├── open.ts
    │   │   │   │       ├── rpc.ts
    │   │   │   │       ├── shared.ts
    │   │   │   │       └── streamSplitter.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       ├── debuggableCommandIdentifier.spec.ts
    │   │   │   │       └── parseLaunchConfigFromResponse.spec.ts
    │   │   │   ├── vscode/
    │   │   │   │   └── launchConfigService.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── copilotDebugCommandContribution.ts
    │   │   │       ├── copilotDebugCommandHandle.ts
    │   │   │       ├── copilotDebugCommandSession.ts
    │   │   │       └── onboardTerminalTestsContribution.ts
    │   │   ├── prompt/
    │   │   │   ├── common/
    │   │   │   │   ├── chatVariablesCollection.ts
    │   │   │   │   ├── codeGuesser.ts
    │   │   │   │   ├── conversation.ts
    │   │   │   │   ├── fileTreeParser.ts
    │   │   │   │   ├── importStatement.ts
    │   │   │   │   ├── intents.ts
    │   │   │   │   ├── repository.ts
    │   │   │   │   ├── streamingGrammar.ts
    │   │   │   │   └── toolCallRound.ts
    │   │   │   ├── node/
    │   │   │   │   ├── chatMLFetcher.ts
    │   │   │   │   ├── chatParticipantRequestHandler.ts
    │   │   │   │   ├── chatParticipantTelemetry.ts
    │   │   │   │   ├── codebaseToolCalling.ts
    │   │   │   │   ├── conversation.ts
    │   │   │   │   ├── defaultIntentRequestHandler.ts
    │   │   │   │   ├── definitionAroundCursor.tsx
    │   │   │   │   ├── devContainerConfigGenerator.ts
    │   │   │   │   ├── documentContext.ts
    │   │   │   │   ├── editFromDiffGeneration.ts
    │   │   │   │   ├── editGeneration.ts
    │   │   │   │   ├── feedbackGenerator.ts
    │   │   │   │   ├── feedbackReporter.ts
    │   │   │   │   ├── gitCommitMessageGenerator.ts
    │   │   │   │   ├── githubPullRequestTitleAndDescriptionGenerator.ts
    │   │   │   │   ├── indentationGuesser.ts
    │   │   │   │   ├── intentDetector.tsx
    │   │   │   │   ├── intentRegistry.ts
    │   │   │   │   ├── intents.ts
    │   │   │   │   ├── promptVariablesService.ts
    │   │   │   │   ├── pseudoStartStopConversationCallback.ts
    │   │   │   │   ├── responseProcessorContext.ts
    │   │   │   │   ├── settingsEditorSearchResultsSelector.ts
    │   │   │   │   ├── streamingEdits.ts
    │   │   │   │   ├── summarizer.ts
    │   │   │   │   ├── telemetry.ts
    │   │   │   │   ├── test2Impl.tsx
    │   │   │   │   ├── testExample.tsx
    │   │   │   │   ├── testFiles.ts
    │   │   │   │   ├── title.ts
    │   │   │   │   └── test/
    │   │   │   │       ├── codeGuesser.spec.ts
    │   │   │   │       ├── defaultIntentRequestHandler.spec.ts
    │   │   │   │       ├── feedbackGenerator.spec.ts
    │   │   │   │       ├── indentationGuesser.spec.ts
    │   │   │   │       ├── positionOffsetTransformer.spec.ts
    │   │   │   │       ├── streamingEdits.spec.ts
    │   │   │   │       ├── testFiles.spec.ts
    │   │   │   │       └── __snapshots__/
    │   │   │   │           └── defaultIntentRequestHandler.spec.ts.snap
    │   │   │   ├── test/
    │   │   │   │   ├── common/
    │   │   │   │   │   ├── fileTreeParser.spec.ts
    │   │   │   │   │   └── streamingGrammar.spec.ts
    │   │   │   │   └── node/
    │   │   │   │       └── conversation.spec.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── debugCommands.ts
    │   │   │       ├── devContainerConfigurationServiceImpl.ts
    │   │   │       ├── endpointProviderImpl.ts
    │   │   │       ├── gitCommitMessageServiceImpl.ts
    │   │   │       ├── gitDiffService.ts
    │   │   │       ├── promptVariablesService.ts
    │   │   │       ├── renameSuggestions.ts
    │   │   │       ├── requestLoggerImpl.ts
    │   │   │       ├── requestLoggerToolResult.tsx
    │   │   │       └── settingsEditorSearchServiceImpl.ts
    │   │   ├── prompts/
    │   │   │   └── node/
    │   │   │       ├── agent/
    │   │   │       │   ├── agentConversationHistory.tsx
    │   │   │       │   ├── agentInstructions.tsx
    │   │   │       │   ├── agentPrompt.tsx
    │   │   │       │   ├── simpleSummarizedHistoryPrompt.tsx
    │   │   │       │   ├── summarizedConversationHistory.tsx
    │   │   │       │   └── test/
    │   │   │       │       ├── agentPrompt.spec.tsx
    │   │   │       │       ├── summarization.spec.tsx
    │   │   │       │       ├── terminalAndTaskPrompt.spec.tsx
    │   │   │       │       └── __snapshots__/
    │   │   │       │           ├── agentPrompt.spec.tsx.snap
    │   │   │       │           ├── summarization-currentTurn-Agent.spec.snap
    │   │   │       │           ├── summarization-currentTurnEarlierRound-Agent.spec.snap
    │   │   │       │           ├── summarization-currentTurnEarlierRound-FullSumm.spec.snap
    │   │   │       │           ├── summarization-currentTurnEarlierRound-SimpleSummarizedHistory.spec.snap
    │   │   │       │           ├── summarization-duringToolCalling-Agent.spec.snap
    │   │   │       │           ├── summarization-duringToolCalling-FullSumm.spec.snap
    │   │   │       │           ├── summarization-duringToolCalling-SimpleSummarizedHistory.spec.snap
    │   │   │       │           ├── summarization-previousTurnMultiple-Agent.spec.snap
    │   │   │       │           ├── summarization-previousTurnMultiple-FullSumm.spec.snap
    │   │   │       │           ├── summarization-previousTurnMultiple-SimpleSummarizedHistory.spec.snap
    │   │   │       │           ├── summarization-previousTurnNoRounds-Agent.spec.snap
    │   │   │       │           ├── summarization-previousTurnNoRounds-FullSumm.spec.snap
    │   │   │       │           └── summarization-previousTurnNoRounds-SimpleSummarizedHistory.spec.snap
    │   │   │       ├── base/
    │   │   │       │   ├── capabilities.tsx
    │   │   │       │   ├── common.tsx
    │   │   │       │   ├── copilotIdentity.tsx
    │   │   │       │   ├── instructionMessage.tsx
    │   │   │       │   ├── promptElement.ts
    │   │   │       │   ├── promptRenderer.ts
    │   │   │       │   ├── responseTranslationRules.tsx
    │   │   │       │   ├── safetyRules.tsx
    │   │   │       │   ├── tag.tsx
    │   │   │       │   └── terminalAndTaskState.tsx
    │   │   │       ├── codeMapper/
    │   │   │       │   ├── codeMapper.ts
    │   │   │       │   ├── codeMapperPrompt.tsx
    │   │   │       │   ├── codeMapperService.ts
    │   │   │       │   └── patchEditGeneration.tsx
    │   │   │       ├── devcontainer/
    │   │   │       │   └── devContainerConfigPrompt.tsx
    │   │   │       ├── feedback/
    │   │   │       │   ├── currentChange.tsx
    │   │   │       │   └── provideFeedback.tsx
    │   │   │       ├── git/
    │   │   │       │   ├── gitChanges.tsx
    │   │   │       │   └── gitCommitMessagePrompt.tsx
    │   │   │       ├── github/
    │   │   │       │   └── pullRequestDescriptionPrompt.tsx
    │   │   │       ├── inline/
    │   │   │       │   ├── adjustSelection.ts
    │   │   │       │   ├── diagnosticsContext.tsx
    │   │   │       │   ├── diffEditGeneration.tsx
    │   │   │       │   ├── fixCookbookService.ts
    │   │   │       │   ├── inlineChatEditCodePrompt.tsx
    │   │   │       │   ├── inlineChatEditMarkdownPrompt.tsx
    │   │   │       │   ├── inlineChatFix3Prompt.tsx
    │   │   │       │   ├── inlineChatGenerateCodePrompt.tsx
    │   │   │       │   ├── inlineChatGenerateMarkdownPrompt.tsx
    │   │   │       │   ├── inlineChatNotebookCommon.ts
    │   │   │       │   ├── inlineChatNotebookCommonPromptElements.tsx
    │   │   │       │   ├── inlineChatNotebookEditPrompt.tsx
    │   │   │       │   ├── inlineChatNotebookFixPrompt.tsx
    │   │   │       │   ├── inlineChatNotebookGeneratePrompt.tsx
    │   │   │       │   ├── inlineChatWorkspaceSearch.tsx
    │   │   │       │   ├── languageServerContextPrompt.tsx
    │   │   │       │   ├── promptingSummarizedDocument.ts
    │   │   │       │   ├── pythonCookbookData.ts
    │   │   │       │   ├── temporalContext.tsx
    │   │   │       │   ├── visualization.ts
    │   │   │       │   ├── workingCopies.ts
    │   │   │       │   ├── summarizedDocument/
    │   │   │       │   │   ├── fragments.ts
    │   │   │       │   │   ├── implementation.ts
    │   │   │       │   │   ├── projectedText.ts
    │   │   │       │   │   ├── summarizeDocument.ts
    │   │   │       │   │   └── summarizeDocumentHelpers.ts
    │   │   │       │   └── utils/
    │   │   │       │       └── streaming.ts
    │   │   │       ├── notebook/
    │   │   │       │   ├── commonPrompts.tsx
    │   │   │       │   └── alternateContent/
    │   │   │       │       └── test/
    │   │   │       │           ├── alternativeContent.spec.ts
    │   │   │       │           ├── alternativeContentEditGenerator.spec.ts
    │   │   │       │           ├── utils.ts
    │   │   │       │           └── fixtures/
    │   │   │       │               ├── circle_area_edits.altContent.json
    │   │   │       │               ├── circle_area_edits.altContent.text
    │   │   │       │               ├── circle_area_edits.altContent.xml
    │   │   │       │               ├── circle_area_edits_after.ipynb
    │   │   │       │               ├── circle_area_edits_before.ipynb
    │   │   │       │               ├── data_processing.altContent.json
    │   │   │       │               ├── data_processing.altContent.text
    │   │   │       │               ├── data_processing.altContent.xml
    │   │   │       │               ├── data_processing_2.altContent.json
    │   │   │       │               ├── data_processing_2.altContent.text
    │   │   │       │               ├── data_processing_2.altContent.xml
    │   │   │       │               ├── data_processing_2_after.ipynb
    │   │   │       │               ├── data_processing_2_before.ipynb
    │   │   │       │               ├── data_processing_after.ipynb
    │   │   │       │               ├── data_processing_before.ipynb
    │   │   │       │               ├── data_visualization.altContent.json
    │   │   │       │               ├── data_visualization.altContent.text
    │   │   │       │               ├── data_visualization.altContent.xml
    │   │   │       │               ├── data_visualization_2.altContent.json
    │   │   │       │               ├── data_visualization_2.altContent.text
    │   │   │       │               ├── data_visualization_2.altContent.xml
    │   │   │       │               ├── data_visualization_2_after.ipynb
    │   │   │       │               ├── data_visualization_2_before.ipynb
    │   │   │       │               ├── data_visualization_after.ipynb
    │   │   │       │               ├── data_visualization_before.ipynb
    │   │   │       │               ├── datacleansing.altContent.json
    │   │   │       │               ├── datacleansing.altContent.text
    │   │   │       │               ├── datacleansing.altContent.xml
    │   │   │       │               ├── datacleansing_after.ipynb
    │   │   │       │               ├── datacleansing_before.ipynb
    │   │   │       │               ├── dataframe.altContent.json
    │   │   │       │               ├── dataframe.altContent.text
    │   │   │       │               ├── dataframe.altContent.xml
    │   │   │       │               ├── dataframe_after.ipynb
    │   │   │       │               ├── dataframe_before.ipynb
    │   │   │       │               ├── delete_1_line_in_cell.altContent.text
    │   │   │       │               ├── delete_1_line_in_cell.altContent.xml
    │   │   │       │               ├── delete_1_line_in_cell_after.ipynb
    │   │   │       │               ├── delete_1_line_in_cell_before.ipynb
    │   │   │       │               ├── duplicateCellIds.ipynb
    │   │   │       │               ├── duplicateCellIds.xml
    │   │   │       │               ├── edit.altContent.json
    │   │   │       │               ├── edit.altContent.text
    │   │   │       │               ├── edit.altContent.xml
    │   │   │       │               ├── edit_after.ipynb
    │   │   │       │               ├── edit_before.ipynb
    │   │   │       │               ├── empty.altContent.json
    │   │   │       │               ├── empty.altContent.text
    │   │   │       │               ├── empty.altContent.xml
    │   │   │       │               ├── empty_after.ipynb
    │   │   │       │               ├── empty_before.ipynb
    │   │   │       │               ├── imports.altContent.json
    │   │   │       │               ├── imports.altContent.text
    │   │   │       │               ├── imports.altContent.xml
    │   │   │       │               ├── imports_after.ipynb
    │   │   │       │               ├── imports_before.ipynb
    │   │   │       │               ├── insert.1.ipynb.xml
    │   │   │       │               ├── insert.2.ipynb.xml
    │   │   │       │               ├── insert.3.ipynb.xml
    │   │   │       │               ├── insert.4.ipynb.xml
    │   │   │       │               ├── insert.ipynb
    │   │   │       │               ├── large_cell.altContent.json
    │   │   │       │               ├── large_cell.altContent.text
    │   │   │       │               ├── large_cell.altContent.xml
    │   │   │       │               ├── large_cell_after.ipynb
    │   │   │       │               ├── large_cell_before.ipynb
    │   │   │       │               ├── matplotlib_to_plotly_after.ipynb
    │   │   │       │               ├── matplotlib_to_plotly_before.ipynb
    │   │   │       │               ├── multicells.altContent.json
    │   │   │       │               ├── multicells.altContent.text
    │   │   │       │               ├── multicells.altContent.xml
    │   │   │       │               ├── multicells_after.ipynb
    │   │   │       │               ├── multicells_before.ipynb
    │   │   │       │               ├── plot.altContent.json
    │   │   │       │               ├── plot.altContent.text
    │   │   │       │               ├── plot.altContent.xml
    │   │   │       │               ├── plot_after.ipynb
    │   │   │       │               ├── plot_before.ipynb
    │   │   │       │               ├── plotly_to_matplotlib.altContent.text
    │   │   │       │               ├── plotly_to_matplotlib.altContent.xml
    │   │   │       │               ├── plotly_to_matplotlib_after.ipynb
    │   │   │       │               ├── plotly_to_matplotlib_before.ipynb
    │   │   │       │               ├── refactor.altContent.json
    │   │   │       │               ├── refactor.altContent.text
    │   │   │       │               ├── refactor.altContent.xml
    │   │   │       │               ├── refactor_after.ipynb
    │   │   │       │               ├── refactor_before.ipynb
    │   │   │       │               ├── reorder.altContent.json
    │   │   │       │               ├── reorder.altContent.text
    │   │   │       │               ├── reorder.altContent.xml
    │   │   │       │               ├── reorder_after.ipynb
    │   │   │       │               ├── reorder_before.ipynb
    │   │   │       │               ├── sample.github-issues
    │   │   │       │               ├── sample.github-issues.json
    │   │   │       │               ├── sample.github-issues.text
    │   │   │       │               ├── sample.github-issues.xml
    │   │   │       │               ├── sample.ipynb
    │   │   │       │               ├── sample.ipynb.json
    │   │   │       │               ├── sample.ipynb.text
    │   │   │       │               ├── sample.ipynb.xml
    │   │   │       │               ├── single.altContent.json
    │   │   │       │               ├── single.altContent.text
    │   │   │       │               ├── single.altContent.xml
    │   │   │       │               ├── single_after.ipynb
    │   │   │       │               ├── single_before.ipynb
    │   │   │       │               ├── swapping_cells.ipynb
    │   │   │       │               ├── variables.altContent.json
    │   │   │       │               ├── variables.altContent.text
    │   │   │       │               ├── variables.altContent.xml
    │   │   │       │               ├── variables_after.ipynb
    │   │   │       │               ├── variables_before.ipynb
    │   │   │       │               ├── withOutput.ipynb
    │   │   │       │               ├── withOutput.ipynb.json
    │   │   │       │               ├── withOutput.ipynb.text
    │   │   │       │               └── withOutput.ipynb.xml
    │   │   │       ├── panel/
    │   │   │       │   ├── chatVariables.tsx
    │   │   │       │   ├── codebaseAgentPrompt.tsx
    │   │   │       │   ├── codeBlockFormattingRules.tsx
    │   │   │       │   ├── conversationHistory.tsx
    │   │   │       │   ├── currentEditor.tsx
    │   │   │       │   ├── currentSelection.tsx
    │   │   │       │   ├── customInstructions.tsx
    │   │   │       │   ├── definitionAtPosition.tsx
    │   │   │       │   ├── editCodePrompt.tsx
    │   │   │       │   ├── editCodePrompt2.tsx
    │   │   │       │   ├── editorIntegrationRules.tsx
    │   │   │       │   ├── explain.tsx
    │   │   │       │   ├── fileVariable.tsx
    │   │   │       │   ├── image.tsx
    │   │   │       │   ├── newNotebook.tsx
    │   │   │       │   ├── notebookEditCodePrompt.tsx
    │   │   │       │   ├── notebookSummaryChangePrompt.tsx
    │   │   │       │   ├── notebookVariables.tsx
    │   │   │       │   ├── panelChatBasePrompt.tsx
    │   │   │       │   ├── panelChatFixPrompt.tsx
    │   │   │       │   ├── preferences.tsx
    │   │   │       │   ├── projectLabels.tsx
    │   │   │       │   ├── referencesAtPosition.tsx
    │   │   │       │   ├── safeElements.tsx
    │   │   │       │   ├── search.tsx
    │   │   │       │   ├── searchPanelKeywordsPrompt.tsx
    │   │   │       │   ├── searchPanelPrompt.tsx
    │   │   │       │   ├── startDebugging.tsx
    │   │   │       │   ├── symbolAtCursor.tsx
    │   │   │       │   ├── symbolDefinitions.tsx
    │   │   │       │   ├── terminal.tsx
    │   │   │       │   ├── terminalExplain.tsx
    │   │   │       │   ├── terminalLastCommand.tsx
    │   │   │       │   ├── terminalPrompt.tsx
    │   │   │       │   ├── terminalQuickFix.tsx
    │   │   │       │   ├── terminalSelection.tsx
    │   │   │       │   ├── title.tsx
    │   │   │       │   ├── toolCalling.tsx
    │   │   │       │   ├── unsafeElements.tsx
    │   │   │       │   ├── vscode.tsx
    │   │   │       │   ├── newWorkspace/
    │   │   │       │   │   ├── newWorkspace.tsx
    │   │   │       │   │   └── newWorkspaceContents.tsx
    │   │   │       │   ├── test/
    │   │   │       │   │   ├── fileVariable.spec.ts
    │   │   │       │   │   └── __snapshots__/
    │   │   │       │   │       └── fileVariable.spec.ts.snap
    │   │   │       │   └── workspace/
    │   │   │       │       ├── metaPrompt.tsx
    │   │   │       │       ├── visualFileTree.ts
    │   │   │       │       ├── workspaceContext.tsx
    │   │   │       │       ├── workspaceFoldersHint.tsx
    │   │   │       │       ├── workspacePrompt.tsx
    │   │   │       │       ├── workspaceStructure.tsx
    │   │   │       │       └── test/
    │   │   │       │           └── visualFileTree.spec.ts
    │   │   │       ├── settingsEditor/
    │   │   │       │   └── settingsEditorSuggestQueryPrompt.tsx
    │   │   │       └── test/
    │   │   │           ├── adjustSelection.spec.ts
    │   │   │           ├── projectedText.spec.ts
    │   │   │           ├── summarizeDocument.spec.ts
    │   │   │           ├── summarizeDocumentPlayground.ts
    │   │   │           ├── temporalContext.spec.ts
    │   │   │           ├── utils.ts
    │   │   │           ├── workingCopies.spec.ts
    │   │   │           └── fixtures/
    │   │   │               ├── 5710.selection.ts
    │   │   │               ├── 5710.summarized.ts
    │   │   │               ├── 5710.ts
    │   │   │               ├── BasketService.cs
    │   │   │               ├── BasketService.selection.cs
    │   │   │               ├── BasketService.summarized.cs
    │   │   │               ├── bracketPairsTree.summarized.ts
    │   │   │               ├── bracketPairsTree.ts
    │   │   │               ├── codeEditorWidget.1.summarized.ts
    │   │   │               ├── codeEditorWidget.2.summarized.ts
    │   │   │               ├── codeEditorWidget.3.summarized.ts
    │   │   │               ├── codeEditorWidget.ts
    │   │   │               ├── codeEditorWidget.ts.1.tempo-summarized
    │   │   │               ├── cppNoExtraSemicolons.cpp
    │   │   │               ├── cppNoExtraSemicolons.summarized.cpp
    │   │   │               ├── EditForm.selection.tsx
    │   │   │               ├── EditForm.summarized.tsx
    │   │   │               ├── EditForm.tsx
    │   │   │               ├── editorGroupWatermark.summarized.ts
    │   │   │               ├── editorGroupWatermark.ts
    │   │   │               ├── editorGroupWatermark.ts.summarized.round1
    │   │   │               ├── editorGroupWatermark.ts.summarized.round2
    │   │   │               ├── extHost.api.impl.selection.ts
    │   │   │               ├── extHost.api.impl.summarized.ts
    │   │   │               ├── extHost.api.impl.ts
    │   │   │               ├── keybindingParser.summarized.ts
    │   │   │               ├── keybindingParser.ts
    │   │   │               ├── map.summarized.ts
    │   │   │               ├── map.summarized.ts.view-port
    │   │   │               ├── map.ts
    │   │   │               ├── problem1.cpp
    │   │   │               ├── problem1.summarized.cpp
    │   │   │               ├── problem2.cpp
    │   │   │               ├── problem2.summarized.cpp
    │   │   │               ├── pseudoStartStopConversationCallbackTest.selection.ts
    │   │   │               ├── pseudoStartStopConversationCallbackTest.summarized.ts
    │   │   │               ├── pseudoStartStopConversationCallbackTest.ts
    │   │   │               ├── pullRequestModel.selection.ts
    │   │   │               ├── pullRequestModel.summarized.ts
    │   │   │               ├── pullRequestModel.ts
    │   │   │               ├── simpleClass.summarized.tsx
    │   │   │               ├── simpleClass.tsx
    │   │   │               ├── strings.test-example.2.summarized.ts
    │   │   │               ├── strings.test-example.3.summarized.ts
    │   │   │               ├── strings.test-example.summarized.ts
    │   │   │               ├── strings.test-example.summarized.ts.round2
    │   │   │               ├── strings.test-example.ts
    │   │   │               ├── strings.test-example.ts.summarized.round1
    │   │   │               ├── strings.test-example.ts.summarized.round2
    │   │   │               ├── tempo-actions.html
    │   │   │               ├── tempo-actions.html.3.tempo-summarized
    │   │   │               ├── tempo-actions.ts
    │   │   │               ├── tempo-actions.ts.2.tempo-summarized
    │   │   │               ├── tempo-actions.ts.3.tempo-summarized
    │   │   │               ├── tempo-chatActions.ts
    │   │   │               ├── tempo-chatActions.ts.2.tempo-summarized
    │   │   │               ├── tempo-chatContextActions.ts
    │   │   │               ├── tempo-chatContextActions.ts.2.tempo-summarized
    │   │   │               ├── view.css
    │   │   │               ├── view.summarized.css
    │   │   │               ├── vscode.proposed.chatParticipantAdditions.d.selection.ts
    │   │   │               ├── vscode.proposed.chatParticipantAdditions.d.summarized.ts
    │   │   │               ├── vscode.proposed.chatParticipantAdditions.d.ts
    │   │   │               ├── webview-index.selection.ts
    │   │   │               ├── webview-index.summarized.ts
    │   │   │               ├── webview-index.ts
    │   │   │               ├── workbench-dev.html
    │   │   │               ├── workbench-dev.selection.html
    │   │   │               └── workbench-dev.summarized.html
    │   │   ├── relatedFiles/
    │   │   │   ├── node/
    │   │   │   │   ├── gitRelatedFilesProvider.ts
    │   │   │   │   └── testRelatedFilesProvider.ts
    │   │   │   └── vscode-node/
    │   │   │       └── relatedFiles.contribution.ts
    │   │   ├── renameSuggestions/
    │   │   │   ├── common/
    │   │   │   │   └── namingConvention.ts
    │   │   │   ├── node/
    │   │   │   │   ├── renameSuggestionsPrompt.tsx
    │   │   │   │   └── renameSuggestionsProvider.ts
    │   │   │   └── test/
    │   │   │       ├── common/
    │   │   │       │   └── namingConvention.spec.ts
    │   │   │       └── node/
    │   │   │           └── renameSuggestionsProvider.spec.tsx
    │   │   ├── review/
    │   │   │   └── node/
    │   │   │       ├── doReview.ts
    │   │   │       ├── githubPullRequestReviewerCommentsProvider.ts
    │   │   │       └── githubReviewAgent.ts
    │   │   ├── search/
    │   │   │   └── vscode-node/
    │   │   │       └── commands.ts
    │   │   ├── settingsSchema/
    │   │   │   └── vscode-node/
    │   │   │       └── settingsSchemaFeature.ts
    │   │   ├── survey/
    │   │   │   └── vscode-node/
    │   │   │       └── surveyCommands.ts
    │   │   ├── telemetry/
    │   │   │   └── common/
    │   │   │       └── lifecycleTelemetryContrib.ts
    │   │   ├── test/
    │   │   │   ├── common/
    │   │   │   │   └── importRewriting.spec.ts
    │   │   │   ├── node/
    │   │   │   │   ├── configurations.spec.ts
    │   │   │   │   ├── editFromDiffGeneration.spec.ts
    │   │   │   │   ├── extractCodeSnippets.spec.ts
    │   │   │   │   ├── intent.spec.ts
    │   │   │   │   ├── notebookPromptRendering.spec.ts
    │   │   │   │   ├── patchEditGeneration.spec.ts
    │   │   │   │   ├── pseudoStartStopConversationCallback.spec.ts
    │   │   │   │   ├── services.ts
    │   │   │   │   ├── streaming.spec.ts
    │   │   │   │   ├── summarizedDocumentRendering.spec.tsx
    │   │   │   │   ├── telemetry.spec.ts
    │   │   │   │   ├── testHelpers.ts
    │   │   │   │   ├── utils.fileTree.spec.ts
    │   │   │   │   ├── utils.spec.ts
    │   │   │   │   └── fixtures/
    │   │   │   │       ├── gitdiff/
    │   │   │   │       │   ├── 01-basic
    │   │   │   │       │   ├── 01-basic-add-2-lines
    │   │   │   │       │   ├── 01-basic-add-2-lines.diff
    │   │   │   │       │   ├── 01-basic-add-first-line
    │   │   │   │       │   ├── 01-basic-add-first-line.diff
    │   │   │   │       │   ├── 01-basic-add-last-line
    │   │   │   │       │   ├── 01-basic-add-last-line-with-eol
    │   │   │   │       │   ├── 01-basic-add-last-line-with-eol.diff
    │   │   │   │       │   ├── 01-basic-add-last-line.diff
    │   │   │   │       │   ├── 01-basic-add-line
    │   │   │   │       │   ├── 01-basic-add-line.diff
    │   │   │   │       │   ├── 01-basic-move-lines
    │   │   │   │       │   ├── 01-basic-move-lines.diff
    │   │   │   │       │   ├── 01-basic-remove-first-line
    │   │   │   │       │   ├── 01-basic-remove-first-line.diff
    │   │   │   │       │   ├── 01-basic-remove-last-line
    │   │   │   │       │   ├── 01-basic-remove-last-line-with-eol
    │   │   │   │       │   ├── 01-basic-remove-last-line-with-eol.diff
    │   │   │   │       │   ├── 01-basic-remove-last-line.diff
    │   │   │   │       │   ├── 01-basic-remove-line
    │   │   │   │       │   ├── 01-basic-remove-line.diff
    │   │   │   │       │   ├── 01-basic-replace-line
    │   │   │   │       │   ├── 01-basic-replace-line.diff
    │   │   │   │       │   ├── 02-basicWithEol
    │   │   │   │       │   ├── 02-basicWithEol-add-line
    │   │   │   │       │   ├── 02-basicWithEol-add-line.diff
    │   │   │   │       │   ├── 02-basicWithEol-remove-eol
    │   │   │   │       │   ├── 02-basicWithEol-remove-eol.diff
    │   │   │   │       │   ├── 02-basicWithEol-remove-last-line
    │   │   │   │       │   ├── 02-basicWithEol-remove-last-line.diff
    │   │   │   │       │   ├── 03-large
    │   │   │   │       │   ├── 03-large-many-changes
    │   │   │   │       │   ├── 03-large-many-changes.diff
    │   │   │   │       │   └── generate-diffs.js
    │   │   │   │       ├── patch/
    │   │   │   │       │   ├── basic/
    │   │   │   │       │   │   ├── nested-codeblock.expected.txt
    │   │   │   │       │   │   ├── nested-codeblock.original.txt
    │   │   │   │       │   │   ├── nested-codeblock.patch.txt
    │   │   │   │       │   │   ├── test1.expected.txt
    │   │   │   │       │   │   ├── test1.original.txt
    │   │   │   │       │   │   ├── test1.patch.txt
    │   │   │   │       │   │   ├── two-blocks.expected.txt
    │   │   │   │       │   │   ├── two-blocks.original.txt
    │   │   │   │       │   │   ├── two-blocks.patch.txt
    │   │   │   │       │   │   ├── windows-eol.expected.bin
    │   │   │   │       │   │   ├── windows-eol.original.bin
    │   │   │   │       │   │   └── windows-eol.patch.bin
    │   │   │   │       │   ├── indentation/
    │   │   │   │       │   │   ├── aml-10-58-not-defined-01.expected.txt
    │   │   │   │       │   │   ├── aml-10-58-not-defined-01.original.txt
    │   │   │   │       │   │   ├── aml-10-58-not-defined-01.patch.txt
    │   │   │   │       │   │   ├── aml-8-110-not-defined-00.expected.txt
    │   │   │   │       │   │   ├── aml-8-110-not-defined-00.original.txt
    │   │   │   │       │   │   ├── aml-8-110-not-defined-00.patch.txt
    │   │   │   │       │   │   ├── aml-8-73-no-value-for-argument-in-function-call-00.expected.txt
    │   │   │   │       │   │   ├── aml-8-73-no-value-for-argument-in-function-call-00.original.txt
    │   │   │   │       │   │   ├── aml-8-73-no-value-for-argument-in-function-call-00.patch.txt
    │   │   │   │       │   │   ├── code-mapper-panel-6614-2.expected.txt
    │   │   │   │       │   │   ├── code-mapper-panel-6614-2.original.txt
    │   │   │   │       │   │   ├── code-mapper-panel-6614-2.patch.txt
    │   │   │   │       │   │   ├── code-mapper-panel-6614.expected.txt
    │   │   │   │       │   │   ├── code-mapper-panel-6614.original.txt
    │   │   │   │       │   │   ├── code-mapper-panel-6614.patch.txt
    │   │   │   │       │   │   ├── no-duplicate-case-with-cookbook.expected.txt
    │   │   │   │       │   │   ├── no-duplicate-case-with-cookbook.original.txt
    │   │   │   │       │   │   ├── no-duplicate-case-with-cookbook.patch.txt
    │   │   │   │       │   │   ├── unecessary-parenthesis-00.expected.txt
    │   │   │   │       │   │   ├── unecessary-parenthesis-00.original.txt
    │   │   │   │       │   │   └── unecessary-parenthesis-00.patch.txt
    │   │   │   │       │   └── out-20240514-153256/
    │   │   │   │       │       ├── class-methods-use-this-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── class-methods-use-this-with-cookbook-00.original.txt
    │   │   │   │       │       ├── class-methods-use-this-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── consistent-this-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── consistent-this-with-cookbook-00.original.txt
    │   │   │   │       │       ├── consistent-this-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── constructor-super-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── constructor-super-with-cookbook-00.original.txt
    │   │   │   │       │       ├── constructor-super-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── max-lines-per-function-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── max-lines-per-function-with-cookbook-00.original.txt
    │   │   │   │       │       ├── max-lines-per-function-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── no-dupe-else-if-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── no-dupe-else-if-with-cookbook-00.original.txt
    │   │   │   │       │       ├── no-dupe-else-if-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── no-duplicate-case-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── no-duplicate-case-with-cookbook-00.original.txt
    │   │   │   │       │       ├── no-duplicate-case-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── no-negated-condition-2-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── no-negated-condition-2-with-cookbook-00.original.txt
    │   │   │   │       │       ├── no-negated-condition-2-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── no-negated-condition-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── no-negated-condition-with-cookbook-00.original.txt
    │   │   │   │       │       ├── no-negated-condition-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── no-new-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── no-new-with-cookbook-00.original.txt
    │   │   │   │       │       ├── no-new-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── no-sequences-with-cookbook-00.expected.txt
    │   │   │   │       │       ├── no-sequences-with-cookbook-00.original.txt
    │   │   │   │       │       ├── no-sequences-with-cookbook-00.patch.txt
    │   │   │   │       │       ├── should-not-generate-an-error-for-variables-declared-in-outer-scopes.expected.txt
    │   │   │   │       │       ├── should-not-generate-an-error-for-variables-declared-in-outer-scopes.original.txt
    │   │   │   │       │       └── should-not-generate-an-error-for-variables-declared-in-outer-scopes.patch.txt
    │   │   │   │       └── pseudodiff/
    │   │   │   │           ├── 01-simple
    │   │   │   │           ├── 01-simple-replace-2-lines
    │   │   │   │           ├── 01-simple-replace-2-lines.diff
    │   │   │   │           ├── 02-filewithtabs
    │   │   │   │           ├── 02-filewithtabs-replace
    │   │   │   │           ├── 02-filewithtabs-replace.diff
    │   │   │   │           ├── 03-unusedimport
    │   │   │   │           ├── 03-unusedimport-addone
    │   │   │   │           ├── 03-unusedimport-addone.diff
    │   │   │   │           ├── 04-spaces
    │   │   │   │           ├── 04-spaces-replace
    │   │   │   │           ├── 04-spaces-replace.diff
    │   │   │   │           ├── 05-beginend
    │   │   │   │           ├── 05-beginend-move
    │   │   │   │           ├── 05-beginend-move.diff
    │   │   │   │           ├── 06-similarline
    │   │   │   │           ├── 06-similarline-comma
    │   │   │   │           ├── 06-similarline-comma.diff
    │   │   │   │           ├── 07-indent1
    │   │   │   │           ├── 07-indent1-one
    │   │   │   │           ├── 07-indent1-one.diff
    │   │   │   │           ├── 07-indent1-two
    │   │   │   │           ├── 07-indent1-two.diff
    │   │   │   │           ├── 08-modifyunchanged
    │   │   │   │           ├── 08-modifyunchanged-one
    │   │   │   │           ├── 08-modifyunchanged-one.diff
    │   │   │   │           ├── 09-indent2
    │   │   │   │           ├── 09-indent2-one
    │   │   │   │           ├── 09-indent2-one.diff
    │   │   │   │           ├── 10-test
    │   │   │   │           ├── 10-test-one
    │   │   │   │           ├── 10-test-one.diff
    │   │   │   │           ├── 10-test-one.messages
    │   │   │   │           ├── 11-replaceatend
    │   │   │   │           ├── 11-replaceatend-one
    │   │   │   │           ├── 11-replaceatend-one.diff
    │   │   │   │           ├── 11-replaceatend-one.messages
    │   │   │   │           ├── 12-insertmethod
    │   │   │   │           ├── 12-insertmethod-one
    │   │   │   │           ├── 12-insertmethod-one.diff
    │   │   │   │           ├── 12-insertmethod-one.messages
    │   │   │   │           ├── 12-insertmethod-two
    │   │   │   │           ├── 12-insertmethod-two.diff
    │   │   │   │           ├── 12-insertmethod-two.messages
    │   │   │   │           ├── 13-coroutine
    │   │   │   │           ├── 13-coroutine-one
    │   │   │   │           ├── 13-coroutine-one.diff
    │   │   │   │           ├── 13-coroutine-one.messages
    │   │   │   │           ├── 14-rob
    │   │   │   │           ├── 14-rob-one
    │   │   │   │           └── 14-rob-one.diff
    │   │   │   └── vscode-node/
    │   │   │       ├── endpoints.test.ts
    │   │   │       ├── extension.test.ts
    │   │   │       ├── sanity.sanity-test.ts
    │   │   │       ├── services.ts
    │   │   │       ├── session.test.ts
    │   │   │       └── textDocumentManager.test.ts
    │   │   ├── testing/
    │   │   │   ├── common/
    │   │   │   │   └── files.ts
    │   │   │   ├── node/
    │   │   │   │   ├── aiEvaluationService.tsx
    │   │   │   │   └── setupTestsFileManager.tsx
    │   │   │   └── vscode/
    │   │   │       └── setupTestContributions.ts
    │   │   ├── tools/
    │   │   │   ├── common/
    │   │   │   │   ├── toolNames.ts
    │   │   │   │   ├── toolSchemaNormalizer.ts
    │   │   │   │   ├── toolsRegistry.ts
    │   │   │   │   ├── toolsService.ts
    │   │   │   │   └── terminal/
    │   │   │   │       └── toolUtils.ts
    │   │   │   ├── node/
    │   │   │   │   ├── allTools.ts
    │   │   │   │   ├── applyPatchTool.tsx
    │   │   │   │   ├── codebaseTool.tsx
    │   │   │   │   ├── createDirectoryTool.tsx
    │   │   │   │   ├── createFileTool.tsx
    │   │   │   │   ├── docTool.tsx
    │   │   │   │   ├── editFileToolResult.tsx
    │   │   │   │   ├── editFileToolUtils.tsx
    │   │   │   │   ├── editNotebookTool.tsx
    │   │   │   │   ├── findFilesTool.tsx
    │   │   │   │   ├── findTestsFilesTool.tsx
    │   │   │   │   ├── findTextInFilesTool.tsx
    │   │   │   │   ├── getErrorsTool.tsx
    │   │   │   │   ├── getNotebookCellOutputTool.tsx
    │   │   │   │   ├── getSearchViewResultsTool.tsx
    │   │   │   │   ├── getTaskOutputTool.tsx
    │   │   │   │   ├── githubRepoTool.tsx
    │   │   │   │   ├── insertEditTool.tsx
    │   │   │   │   ├── installExtensionTool.tsx
    │   │   │   │   ├── listDirTool.tsx
    │   │   │   │   ├── newNotebookTool.tsx
    │   │   │   │   ├── notebookSummaryTool.tsx
    │   │   │   │   ├── readFileTool.tsx
    │   │   │   │   ├── readProjectStructureTool.ts
    │   │   │   │   ├── replaceStringTool.tsx
    │   │   │   │   ├── runInTerminalTool.tsx
    │   │   │   │   ├── runNotebookCellTool.tsx
    │   │   │   │   ├── runTaskTool.tsx
    │   │   │   │   ├── runTestsTool.tsx
    │   │   │   │   ├── scmChangesTool.ts
    │   │   │   │   ├── searchWorkspaceSymbolsTool.tsx
    │   │   │   │   ├── simpleBrowserTool.tsx
    │   │   │   │   ├── terminalStateTools.tsx
    │   │   │   │   ├── testFailureTool.tsx
    │   │   │   │   ├── thinkTool.tsx
    │   │   │   │   ├── toolUtils.terminal.ts
    │   │   │   │   ├── toolUtils.ts
    │   │   │   │   ├── usagesTool.tsx
    │   │   │   │   ├── userPreferencesTool.tsx
    │   │   │   │   ├── vscodeAPITool.ts
    │   │   │   │   ├── vscodeCmdTool.tsx
    │   │   │   │   ├── applyPatch/
    │   │   │   │   │   ├── parseApplyPatch.ts
    │   │   │   │   │   └── parser.ts
    │   │   │   │   ├── newWorkspace/
    │   │   │   │   │   ├── createAndRunTaskTool.tsx
    │   │   │   │   │   ├── newWorkspaceTool.tsx
    │   │   │   │   │   └── projectSetupInfoTool.tsx
    │   │   │   │   └── test/
    │   │   │   │       ├── applyPatch.spec.ts
    │   │   │   │       ├── editFileToolUtils.spec.ts
    │   │   │   │       ├── editNotebookTool.spec.tsx
    │   │   │   │       ├── findFiles.spec.tsx
    │   │   │   │       ├── findTextInFiles.spec.tsx
    │   │   │   │       ├── findTextInFilesResult.spec.tsx
    │   │   │   │       ├── getErrorsTool.spec.tsx
    │   │   │   │       ├── readFile.spec.tsx
    │   │   │   │       ├── runInTerminalTool.spec.tsx
    │   │   │   │       ├── testFailure.spec.tsx
    │   │   │   │       ├── testTools.ts
    │   │   │   │       ├── testToolsService.ts
    │   │   │   │       ├── toolCalling.spec.tsx
    │   │   │   │       ├── toolTestUtils.tsx
    │   │   │   │       ├── toolUtils.terminal.spec.ts
    │   │   │   │       ├── __snapshots__/
    │   │   │   │       │   ├── findFiles.spec.tsx.snap
    │   │   │   │       │   ├── getErrorsTool.spec.tsx.snap
    │   │   │   │       │   └── toolCalling.spec.tsx.snap
    │   │   │   │       └── editFileToolUtilsFixtures/
    │   │   │   │           ├── crlf-input.json
    │   │   │   │           ├── crlf-output.json
    │   │   │   │           └── crlf-tool-call.json
    │   │   │   ├── test/
    │   │   │   │   ├── common/
    │   │   │   │   │   └── toolSchemaNormalizer.spec.ts
    │   │   │   │   └── node/
    │   │   │   │       └── applyPatch/
    │   │   │   │           ├── parser.spec.ts
    │   │   │   │           └── corpus/
    │   │   │   │               ├── 0.patch
    │   │   │   │               ├── 1.patch
    │   │   │   │               ├── 10.patch
    │   │   │   │               ├── 11.patch
    │   │   │   │               ├── 12.patch
    │   │   │   │               ├── 13.patch
    │   │   │   │               ├── 14.patch
    │   │   │   │               ├── 15.patch
    │   │   │   │               ├── 16.patch
    │   │   │   │               ├── 17.patch
    │   │   │   │               ├── 18.patch
    │   │   │   │               ├── 19.patch
    │   │   │   │               ├── 2.patch
    │   │   │   │               ├── 20.patch
    │   │   │   │               ├── 21.patch
    │   │   │   │               ├── 22.patch
    │   │   │   │               ├── 23.patch
    │   │   │   │               ├── 24.patch
    │   │   │   │               ├── 25.patch
    │   │   │   │               ├── 26.patch
    │   │   │   │               ├── 27.patch
    │   │   │   │               ├── 28.patch
    │   │   │   │               ├── 29.patch
    │   │   │   │               ├── 3.patch
    │   │   │   │               ├── 30.patch
    │   │   │   │               ├── 31.patch
    │   │   │   │               ├── 32.patch
    │   │   │   │               ├── 33.patch
    │   │   │   │               ├── 34.patch
    │   │   │   │               ├── 35.patch
    │   │   │   │               ├── 36.patch
    │   │   │   │               ├── 37.patch
    │   │   │   │               ├── 38.patch
    │   │   │   │               ├── 39.patch
    │   │   │   │               ├── 4.patch
    │   │   │   │               ├── 40.patch
    │   │   │   │               ├── 41.patch
    │   │   │   │               ├── 42.patch
    │   │   │   │               ├── 43.patch
    │   │   │   │               ├── 44.patch
    │   │   │   │               ├── 45.patch
    │   │   │   │               ├── 46.patch
    │   │   │   │               ├── 47.patch
    │   │   │   │               ├── 48.patch
    │   │   │   │               ├── 49.patch
    │   │   │   │               ├── 5.patch
    │   │   │   │               ├── 6.patch
    │   │   │   │               ├── 7.patch
    │   │   │   │               ├── 8.patch
    │   │   │   │               └── 9.patch
    │   │   │   └── vscode-node/
    │   │   │       ├── allTools.ts
    │   │   │       ├── fetchWebPageTool.tsx
    │   │   │       ├── tools.ts
    │   │   │       └── toolsService.ts
    │   │   ├── typescriptContext/
    │   │   │   ├── DEVELOPMENT.md
    │   │   │   ├── common/
    │   │   │   │   └── serverProtocol.ts
    │   │   │   ├── serverPlugin/
    │   │   │   │   ├── package.json
    │   │   │   │   ├── tsconfig.json
    │   │   │   │   ├── .esbuild.ts
    │   │   │   │   ├── .npmignore
    │   │   │   │   ├── fixtures/
    │   │   │   │   │   ├── readme.md
    │   │   │   │   │   ├── p1/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       ├── f3.ts
    │   │   │   │   │   │       └── f4.ts
    │   │   │   │   │   ├── p10/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       └── f3.ts
    │   │   │   │   │   ├── p11/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       └── f3.ts
    │   │   │   │   │   ├── p12/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       ├── f3.ts
    │   │   │   │   │   │       ├── f4.ts
    │   │   │   │   │   │       └── f5.ts
    │   │   │   │   │   ├── p13/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       └── f3.ts
    │   │   │   │   │   ├── p2/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       └── f2.ts
    │   │   │   │   │   ├── p3/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       └── f2.ts
    │   │   │   │   │   ├── p4/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       ├── f3.ts
    │   │   │   │   │   │       ├── f4.ts
    │   │   │   │   │   │       └── f5.ts
    │   │   │   │   │   ├── p5/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       └── f3.ts
    │   │   │   │   │   ├── p6/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       └── f2.ts
    │   │   │   │   │   ├── p7/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       └── f2.ts
    │   │   │   │   │   ├── p8/
    │   │   │   │   │   │   ├── tsconfig.json
    │   │   │   │   │   │   └── source/
    │   │   │   │   │   │       ├── f1.ts
    │   │   │   │   │   │       ├── f2.ts
    │   │   │   │   │   │       └── f3.ts
    │   │   │   │   │   └── p9/
    │   │   │   │   │       ├── tsconfig.json
    │   │   │   │   │       └── source/
    │   │   │   │   │           ├── f1.ts
    │   │   │   │   │           ├── f2.ts
    │   │   │   │   │           ├── f3.ts
    │   │   │   │   │           └── f4.ts
    │   │   │   │   └── src/
    │   │   │   │       ├── common/
    │   │   │   │       │   ├── api.ts
    │   │   │   │       │   ├── baseContextProviders.ts
    │   │   │   │       │   ├── classContextProvider.ts
    │   │   │   │       │   ├── code.ts
    │   │   │   │       │   ├── contextProvider.ts
    │   │   │   │       │   ├── functionContextProvider.ts
    │   │   │   │       │   ├── host.ts
    │   │   │   │       │   ├── methodContextProvider.ts
    │   │   │   │       │   ├── moduleContextProvider.ts
    │   │   │   │       │   ├── nullContextProvider.ts
    │   │   │   │       │   ├── protocol.ts
    │   │   │   │       │   ├── sourceFileContextProvider.ts
    │   │   │   │       │   ├── typescript.ts
    │   │   │   │       │   ├── typescripts.ts
    │   │   │   │       │   └── utils.ts
    │   │   │   │       └── node/
    │   │   │   │           ├── create.ts
    │   │   │   │           ├── host.ts
    │   │   │   │           ├── main.ts
    │   │   │   │           └── test/
    │   │   │   │               ├── languageServices.ts
    │   │   │   │               ├── simple.spec.ts
    │   │   │   │               └── testing.ts
    │   │   │   └── vscode-node/
    │   │   │       └── languageContextService.ts
    │   │   ├── workspaceChunkSearch/
    │   │   │   ├── node/
    │   │   │   │   └── workspaceChunkSearch.contribution.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── commands.ts
    │   │   │       ├── workspaceChunkSearch.contribution.ts
    │   │   │       └── workspaceIndexingStatus.ts
    │   │   ├── workspaceRecorder/
    │   │   │   ├── common/
    │   │   │   │   ├── jsonlUtil.ts
    │   │   │   │   └── workspaceListenerService.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── safeFileWriteUtils.ts
    │   │   │       ├── utils.ts
    │   │   │       ├── utilsObservable.ts
    │   │   │       ├── workspaceListenerService.ts
    │   │   │       ├── workspaceRecorder.ts
    │   │   │       └── workspaceRecorderFeature.ts
    │   │   ├── workspaceSemanticSearch/
    │   │   │   └── node/
    │   │   │       ├── combinedRank.ts
    │   │   │       ├── semanticSearchTextSearchProvider.ts
    │   │   │       └── test/
    │   │   │           └── ranking.spec.ts
    │   │   └── xtab/
    │   │       ├── common/
    │   │       │   └── promptCrafting.ts
    │   │       ├── node/
    │   │       │   ├── xtabEndpoint.ts
    │   │       │   ├── xtabProvider.ts
    │   │       │   └── xtabUtils.ts
    │   │       └── test/
    │   │           ├── common/
    │   │           │   ├── promptCrafting.spec.ts
    │   │           │   └── responseProcessor.spec.ts
    │   │           └── node/
    │   │               └── xtabProvider.spec.ts
    │   ├── platform/
    │   │   ├── authentication/
    │   │   │   ├── common/
    │   │   │   │   ├── authentication.ts
    │   │   │   │   ├── authenticationUpgrade.ts
    │   │   │   │   ├── authenticationUpgradeService.ts
    │   │   │   │   ├── copilotToken.ts
    │   │   │   │   ├── copilotTokenManager.ts
    │   │   │   │   └── copilotTokenStore.ts
    │   │   │   ├── node/
    │   │   │   │   └── copilotTokenManager.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       ├── authentication.spec.ts
    │   │   │   │       ├── copilotToken.spec.ts
    │   │   │   │       └── simulationTestCopilotTokenManager.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── authenticationService.ts
    │   │   │       ├── copilotTokenManager.ts
    │   │   │       └── session.ts
    │   │   ├── chat/
    │   │   │   ├── common/
    │   │   │   │   ├── blockedExtensionService.ts
    │   │   │   │   ├── chatAgents.ts
    │   │   │   │   ├── chatMLFetcher.ts
    │   │   │   │   ├── chatQuotaService.ts
    │   │   │   │   ├── chatQuotaServiceImpl.ts
    │   │   │   │   ├── chatSessionService.ts
    │   │   │   │   ├── commonTypes.ts
    │   │   │   │   ├── conversationOptions.ts
    │   │   │   │   ├── globalStringUtils.ts
    │   │   │   │   └── interactionService.ts
    │   │   │   ├── test/
    │   │   │   │   └── common/
    │   │   │   │       ├── mockChatMLFetcher.ts
    │   │   │   │       ├── staticChatMLFetcher.ts
    │   │   │   │       └── testChatSessionService.ts
    │   │   │   └── vscode/
    │   │   │       └── chatSessionService.ts
    │   │   ├── chunking/
    │   │   │   ├── common/
    │   │   │   │   ├── chunk.ts
    │   │   │   │   ├── chunkingEndpointClient.ts
    │   │   │   │   ├── chunkingEndpointClientImpl.ts
    │   │   │   │   └── chunkingStringUtils.ts
    │   │   │   └── node/
    │   │   │       ├── naiveChunker.ts
    │   │   │       ├── naiveChunkerService.ts
    │   │   │       └── test/
    │   │   │           └── naiveChunker.spec.ts
    │   │   ├── commands/
    │   │   │   ├── common/
    │   │   │   │   ├── mockRunCommandExecutionService.ts
    │   │   │   │   └── runCommandExecutionService.ts
    │   │   │   └── vscode/
    │   │   │       └── runCommandExecutionServiceImpl.ts
    │   │   ├── configuration/
    │   │   │   ├── common/
    │   │   │   │   ├── configurationService.ts
    │   │   │   │   ├── jsonSchema.ts
    │   │   │   │   ├── jsonSchemaDraft7.ts
    │   │   │   │   └── validator.ts
    │   │   │   ├── test/
    │   │   │   │   └── common/
    │   │   │   │       ├── configurationService.spec.ts
    │   │   │   │       ├── defaultsOnlyConfigurationService.ts
    │   │   │   │       └── inMemoryConfigurationService.ts
    │   │   │   └── vscode/
    │   │   │       ├── configurationContextKey.ts
    │   │   │       └── configurationServiceImpl.ts
    │   │   ├── customInstructions/
    │   │   │   └── common/
    │   │   │       └── customInstructionsService.ts
    │   │   ├── debug/
    │   │   │   ├── common/
    │   │   │   │   └── debugOutputService.ts
    │   │   │   └── vscode/
    │   │   │       ├── debugOutputListener.ts
    │   │   │       └── debugOutputServiceImpl.ts
    │   │   ├── devcontainer/
    │   │   │   └── common/
    │   │   │       └── devContainerConfigurationService.ts
    │   │   ├── dialog/
    │   │   │   ├── common/
    │   │   │   │   └── dialogService.ts
    │   │   │   └── vscode/
    │   │   │       └── dialogServiceImpl.ts
    │   │   ├── diff/
    │   │   │   ├── common/
    │   │   │   │   ├── diffService.ts
    │   │   │   │   └── diffWorker.ts
    │   │   │   └── node/
    │   │   │       ├── diffServiceImpl.ts
    │   │   │       └── diffWorkerMain.ts
    │   │   ├── editing/
    │   │   │   ├── common/
    │   │   │   │   ├── abstractText.ts
    │   │   │   │   ├── edit.ts
    │   │   │   │   ├── edits.ts
    │   │   │   │   ├── notebookDocumentSnapshot.ts
    │   │   │   │   ├── offsetLineColumnConverter.ts
    │   │   │   │   ├── positionOffsetTransformer.ts
    │   │   │   │   └── textDocumentSnapshot.ts
    │   │   │   └── node/
    │   │   │       └── edits.spec.ts
    │   │   ├── editSurvivalTracking/
    │   │   │   ├── common/
    │   │   │   │   ├── arcTracker.ts
    │   │   │   │   ├── editCollector.ts
    │   │   │   │   ├── editComputer.ts
    │   │   │   │   ├── editSurvivalReporter.ts
    │   │   │   │   ├── editSurvivalTracker.ts
    │   │   │   │   └── editSurvivalTrackerService.ts
    │   │   │   └── test/
    │   │   │       └── common/
    │   │   │           └── editCollector.spec.ts
    │   │   ├── embeddings/
    │   │   │   └── common/
    │   │   │       ├── embeddingsComputer.ts
    │   │   │       ├── embeddingsIndex.ts
    │   │   │       ├── remoteEmbeddingsComputer.ts
    │   │   │       └── vscodeIndex.ts
    │   │   ├── endpoint/
    │   │   │   ├── common/
    │   │   │   │   ├── capiClient.ts
    │   │   │   │   ├── chatModelCapabilities.ts
    │   │   │   │   ├── domainService.ts
    │   │   │   │   ├── endpointProvider.ts
    │   │   │   │   ├── endpointTypes.ts
    │   │   │   │   └── licenseAgreement.ts
    │   │   │   ├── node/
    │   │   │   │   ├── autoChatEndpoint.ts
    │   │   │   │   ├── capiClientImpl.ts
    │   │   │   │   ├── chatEndpoint.ts
    │   │   │   │   ├── domainServiceImpl.ts
    │   │   │   │   ├── embeddingsEndpoint.ts
    │   │   │   │   ├── modelMetadataFetcher.ts
    │   │   │   │   ├── proxy4oEndpoint.ts
    │   │   │   │   └── proxyXtabEndpoint.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       ├── azureEndpoint.ts
    │   │   │   │       ├── capiEndpoint.ts
    │   │   │   │       ├── customNesEndpoint.ts
    │   │   │   │       ├── mockEndpoint.ts
    │   │   │   │       ├── openaiEndpoint.ts
    │   │   │   │       ├── stream.splitChunk.spec.ts
    │   │   │   │       ├── stream.sseProcessor.spec.ts
    │   │   │   │       ├── testEndpointProvider.ts
    │   │   │   │       ├── testModelMetadataFetcher.ts
    │   │   │   │       └── __snapshots__/
    │   │   │   │           └── stream.sseProcessor.spec.ts.snap
    │   │   │   └── vscode-node/
    │   │   │       └── extChatEndpoint.ts
    │   │   ├── extContext/
    │   │   │   └── common/
    │   │   │       └── extensionContext.ts
    │   │   ├── extensions/
    │   │   │   ├── common/
    │   │   │   │   ├── extensionsService.ts
    │   │   │   │   └── packageJson.ts
    │   │   │   └── vscode/
    │   │   │       └── extensionsService.ts
    │   │   ├── filesystem/
    │   │   │   ├── common/
    │   │   │   │   ├── fileSystemService.ts
    │   │   │   │   └── fileTypes.ts
    │   │   │   ├── node/
    │   │   │   │   └── fileSystemServiceImpl.ts
    │   │   │   └── vscode/
    │   │   │       └── fileSystemServiceImpl.ts
    │   │   ├── git/
    │   │   │   ├── common/
    │   │   │   │   ├── gitCommitMessageService.ts
    │   │   │   │   ├── gitDiffService.ts
    │   │   │   │   ├── gitExtensionService.ts
    │   │   │   │   ├── gitService.ts
    │   │   │   │   ├── nullGitExtensionService.ts
    │   │   │   │   └── utils.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       └── gitService.spec.ts
    │   │   │   └── vscode/
    │   │   │       ├── git.d.ts
    │   │   │       ├── gitExtensionServiceImpl.ts
    │   │   │       └── gitServiceImpl.ts
    │   │   ├── github/
    │   │   │   ├── common/
    │   │   │   │   ├── githubService.ts
    │   │   │   │   ├── nullOctokitServiceImpl.ts
    │   │   │   │   └── octoKitServiceImpl.ts
    │   │   │   └── node/
    │   │   │       └── githubRepositoryService.ts
    │   │   ├── heatmap/
    │   │   │   ├── common/
    │   │   │   │   └── heatmapService.ts
    │   │   │   ├── test/
    │   │   │   │   └── vscode-node/
    │   │   │   │       └── heatmapServiceImpl.test.ts
    │   │   │   └── vscode/
    │   │   │       └── heatmapServiceImpl.ts
    │   │   ├── ignore/
    │   │   │   ├── common/
    │   │   │   │   └── ignoreService.ts
    │   │   │   ├── node/
    │   │   │   │   ├── ignoreFile.ts
    │   │   │   │   ├── ignoreServiceImpl.ts
    │   │   │   │   └── remoteContentExclusion.ts
    │   │   │   ├── vscode/
    │   │   │   │   └── ignoreInfoFileContentProvider.ts
    │   │   │   └── vscode-node/
    │   │   │       └── ignoreService.ts
    │   │   ├── inlineEdits/
    │   │   │   ├── common/
    │   │   │   │   ├── debugRecorderBookmark.ts
    │   │   │   │   ├── editReason.ts
    │   │   │   │   ├── inlineEditLogContext.ts
    │   │   │   │   ├── nesActivationStatusTelemetry.contribution.ts
    │   │   │   │   ├── observableGit.ts
    │   │   │   │   ├── observableWorkspace.ts
    │   │   │   │   ├── responseProcessor.ts
    │   │   │   │   ├── statelessNextEditProvider.ts
    │   │   │   │   ├── statelessNextEditProviders.ts
    │   │   │   │   ├── dataTypes/
    │   │   │   │   │   ├── documentId.ts
    │   │   │   │   │   ├── edit.ts
    │   │   │   │   │   ├── editUtils.ts
    │   │   │   │   │   ├── fetchCancellationError.ts
    │   │   │   │   │   ├── languageContext.ts
    │   │   │   │   │   ├── languageId.ts
    │   │   │   │   │   ├── permutation.ts
    │   │   │   │   │   ├── rootedLineEdit.ts
    │   │   │   │   │   ├── textEditLength.ts
    │   │   │   │   │   ├── xtabPromptOptions.ts
    │   │   │   │   │   └── textEditLengthHelper/
    │   │   │   │   │       ├── README.md
    │   │   │   │   │       ├── combineTextEditInfos.ts
    │   │   │   │   │       ├── length.ts
    │   │   │   │   │       └── textEditInfo.ts
    │   │   │   │   ├── utils/
    │   │   │   │   │   ├── observable.ts
    │   │   │   │   │   ├── stringifyChatMessages.ts
    │   │   │   │   │   ├── tsExpr.ts
    │   │   │   │   │   └── utils.ts
    │   │   │   │   └── workspaceEditTracker/
    │   │   │   │       ├── historyContextProvider.ts
    │   │   │   │       ├── nesHistoryContextProvider.ts
    │   │   │   │       ├── nesXtabHistoryTracker.ts
    │   │   │   │       ├── singleFileStaticWorkspaceEditTracker.ts
    │   │   │   │       └── staticWorkspaceEditTracker.ts
    │   │   │   └── test/
    │   │   │       ├── common/
    │   │   │       │   └── textEditLength.spec.ts
    │   │   │       └── node/
    │   │   │           ├── edits.spec.ts
    │   │   │           └── random.ts
    │   │   ├── interactive/
    │   │   │   ├── common/
    │   │   │   │   └── interactiveSessionService.ts
    │   │   │   └── vscode/
    │   │   │       └── interactiveSessionServiceImpl.ts
    │   │   ├── languages/
    │   │   │   ├── common/
    │   │   │   │   ├── languageDiagnosticsService.ts
    │   │   │   │   ├── languageFeaturesService.ts
    │   │   │   │   └── testLanguageDiagnosticsService.ts
    │   │   │   └── vscode/
    │   │   │       ├── languageDiagnosticsServiceImpl.ts
    │   │   │       └── languageFeaturesServicesImpl.ts
    │   │   ├── languageServer/
    │   │   │   └── common/
    │   │   │       └── languageContextService.ts
    │   │   ├── log/
    │   │   │   ├── common/
    │   │   │   │   ├── logExecTime.ts
    │   │   │   │   ├── logService.ts
    │   │   │   │   └── messageStringify.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       └── loggerHelpers.ts
    │   │   │   └── vscode/
    │   │   │       └── outputChannelLogTarget.ts
    │   │   ├── multiFileEdit/
    │   │   │   └── common/
    │   │   │       ├── editLogService.ts
    │   │   │       └── multiFileEditQualityTelemetry.ts
    │   │   ├── nesFetch/
    │   │   │   ├── common/
    │   │   │   │   ├── completionHelpers.ts
    │   │   │   │   ├── completionsAPI.ts
    │   │   │   │   ├── completionsFetchService.ts
    │   │   │   │   └── responseStream.ts
    │   │   │   └── node/
    │   │   │       ├── completionsFetchServiceImpl.ts
    │   │   │       └── streamTransformer.ts
    │   │   ├── networking/
    │   │   │   ├── common/
    │   │   │   │   ├── fetch.ts
    │   │   │   │   ├── fetcherService.ts
    │   │   │   │   ├── networking.ts
    │   │   │   │   └── openai.ts
    │   │   │   ├── node/
    │   │   │   │   ├── baseFetchFetcher.ts
    │   │   │   │   ├── chatStream.ts
    │   │   │   │   ├── nodeFetcher.ts
    │   │   │   │   ├── nodeFetchFetcher.ts
    │   │   │   │   ├── stream.ts
    │   │   │   │   └── test/
    │   │   │   │       └── nodeFetcherService.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       ├── headerContributors.spec.ts
    │   │   │   │       └── networking.spec.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── electronFetcher.ts
    │   │   │       └── fetcherServiceImpl.ts
    │   │   ├── notebook/
    │   │   │   ├── common/
    │   │   │   │   ├── alternativeContent.ts
    │   │   │   │   ├── alternativeContentEditGenerator.ts
    │   │   │   │   ├── alternativeContentFormat.ts
    │   │   │   │   ├── alternativeContentProvider.json.ts
    │   │   │   │   ├── alternativeContentProvider.text.ts
    │   │   │   │   ├── alternativeContentProvider.ts
    │   │   │   │   ├── alternativeContentProvider.xml.ts
    │   │   │   │   ├── alternativeNotebookDocument.ts
    │   │   │   │   ├── helpers.ts
    │   │   │   │   ├── mockAlternativeContentService.ts
    │   │   │   │   ├── notebookDiff.ts
    │   │   │   │   ├── notebookService.ts
    │   │   │   │   └── notebookSummaryTracker.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       └── notebookService.spec.ts
    │   │   │   └── vscode/
    │   │   │       ├── notebookExectionServiceImpl.ts
    │   │   │       ├── notebookServiceImpl.ts
    │   │   │       └── notebookSummaryTrackerImpl.ts
    │   │   ├── notification/
    │   │   │   ├── common/
    │   │   │   │   └── notificationService.ts
    │   │   │   └── vscode/
    │   │   │       └── notificationServiceImpl.ts
    │   │   ├── open/
    │   │   │   ├── common/
    │   │   │   │   └── opener.ts
    │   │   │   └── vscode/
    │   │   │       └── opener.ts
    │   │   ├── openai/
    │   │   │   └── node/
    │   │   │       ├── fetch.ts
    │   │   │       └── test/
    │   │   │           └── chatTokens.spec.ts
    │   │   ├── parser/
    │   │   │   ├── node/
    │   │   │   │   ├── chunkGroupTypes.ts
    │   │   │   │   ├── docGenParsing.ts
    │   │   │   │   ├── indentationStructure.ts
    │   │   │   │   ├── languageLoader.ts
    │   │   │   │   ├── nodes.ts
    │   │   │   │   ├── parserImpl.ts
    │   │   │   │   ├── parserService.ts
    │   │   │   │   ├── parserServiceImpl.ts
    │   │   │   │   ├── parserWithCaching.ts
    │   │   │   │   ├── parserWorker.ts
    │   │   │   │   ├── querying.ts
    │   │   │   │   ├── selectionParsing.ts
    │   │   │   │   ├── structure.ts
    │   │   │   │   ├── testGenParsing.ts
    │   │   │   │   ├── treeSitterLanguages.ts
    │   │   │   │   ├── treeSitterQueries.ts
    │   │   │   │   └── util.ts
    │   │   │   └── test/
    │   │   │       └── node/
    │   │   │           ├── getNodeMatchingSelection.spec.ts
    │   │   │           ├── getNodeToDocument.cpp.spec.ts
    │   │   │           ├── getNodeToDocument.java.spec.ts
    │   │   │           ├── getNodeToDocument.ts.spec.ts
    │   │   │           ├── getNodeToDocument.util.ts
    │   │   │           ├── getParseErrorCount.spec.ts
    │   │   │           ├── getStructure.cpp.spec.ts
    │   │   │           ├── getStructure.csharp.spec.ts
    │   │   │           ├── getStructure.golang.spec.ts
    │   │   │           ├── getStructure.java.spec.ts
    │   │   │           ├── getStructure.js.spec.ts
    │   │   │           ├── getStructure.py.spec.ts
    │   │   │           ├── getStructure.ruby.spec.ts
    │   │   │           ├── getStructure.rust.spec.ts
    │   │   │           ├── getStructure.ts.spec.ts
    │   │   │           ├── getStructure.tsx.spec.ts
    │   │   │           ├── getStructure.util.ts
    │   │   │           ├── getTestableNode.js.spec.ts
    │   │   │           ├── getTestableNode.ts.spec.ts
    │   │   │           ├── getTestableNode.util.ts
    │   │   │           ├── getTestableNodes.ts.spec.ts
    │   │   │           ├── getTestableNodes.util.ts
    │   │   │           ├── indentationStructure.spec.ts
    │   │   │           ├── markers.ts
    │   │   │           ├── parser.spec.ts
    │   │   │           ├── __snapshots__/
    │   │   │           │   ├── getStructure.csharp.spec.ts.snap
    │   │   │           │   ├── getStructure.golang.spec.ts.snap
    │   │   │           │   ├── getStructure.js.spec.ts.snap
    │   │   │           │   ├── getStructure.py.spec.ts.snap
    │   │   │           │   ├── getStructure.ruby.spec.ts.snap
    │   │   │           │   ├── getStructure.ts.spec.ts.snap
    │   │   │           │   └── getStructure.tsx.spec.ts.snap
    │   │   │           ├── findLastTest/
    │   │   │           │   ├── ts.spec.ts
    │   │   │           │   └── util.ts
    │   │   │           └── fixtures/
    │   │   │               ├── chatSetup.ts
    │   │   │               ├── chatSetup.ts.getStructure.html
    │   │   │               ├── dllmain.cpp
    │   │   │               ├── dllmain.cpp.getStructure.html
    │   │   │               ├── EditForm.tsx
    │   │   │               ├── problem1.cpp
    │   │   │               ├── problem1.cpp.getStructure.html
    │   │   │               ├── test.cpp
    │   │   │               ├── test.cpp.getStructure.html
    │   │   │               ├── test.cs
    │   │   │               ├── test.go
    │   │   │               ├── test.java
    │   │   │               ├── test.java.getStructure.html
    │   │   │               ├── test.js
    │   │   │               ├── test.py
    │   │   │               ├── test.rb
    │   │   │               ├── test.rs
    │   │   │               ├── test.rs.getStructure.html
    │   │   │               ├── test.tsx
    │   │   │               ├── try.py
    │   │   │               ├── try.py.getStructure.html
    │   │   │               ├── vscode.proposed.chatParticipantAdditions-annotated.d.ts.txt
    │   │   │               └── vscode.proposed.chatParticipantAdditions.d.ts
    │   │   ├── projectTemplatesIndex/
    │   │   │   └── common/
    │   │   │       └── projectTemplatesIndex.ts
    │   │   ├── prompts/
    │   │   │   └── common/
    │   │   │       └── promptPathRepresentationService.ts
    │   │   ├── releaseNotes/
    │   │   │   ├── common/
    │   │   │   │   └── releaseNotesService.ts
    │   │   │   └── vscode/
    │   │   │       └── releaseNotesServiceImpl.ts
    │   │   ├── remoteCodeSearch/
    │   │   │   ├── common/
    │   │   │   │   ├── adoCodeSearchService.ts
    │   │   │   │   ├── githubCodeSearchService.ts
    │   │   │   │   └── remoteCodeSearch.ts
    │   │   │   ├── node/
    │   │   │   │   ├── codeSearchRepoAuth.ts
    │   │   │   │   └── codeSearchRepoTracker.ts
    │   │   │   └── vscode-node/
    │   │   │       └── codeSearchRepoAuth.ts
    │   │   ├── remoteRepositories/
    │   │   │   ├── common/
    │   │   │   │   └── utils.ts
    │   │   │   └── vscode/
    │   │   │       └── remoteRepositories.ts
    │   │   ├── remoteSearch/
    │   │   │   ├── common/
    │   │   │   │   ├── codeOrDocsSearchClient.ts
    │   │   │   │   ├── codeOrDocsSearchErrors.ts
    │   │   │   │   └── utils.ts
    │   │   │   ├── node/
    │   │   │   │   └── codeOrDocsSearchClientImpl.ts
    │   │   │   └── test/
    │   │   │       └── node/
    │   │   │           ├── codeOrDocsSearchErrors.spec.ts
    │   │   │           └── utils.spec.ts
    │   │   ├── requestLogger/
    │   │   │   └── node/
    │   │   │       ├── nullRequestLogger.ts
    │   │   │       └── requestLogger.ts
    │   │   ├── review/
    │   │   │   ├── common/
    │   │   │   │   └── reviewService.ts
    │   │   │   └── vscode/
    │   │   │       └── reviewServiceImpl.ts
    │   │   ├── scopeSelection/
    │   │   │   ├── common/
    │   │   │   │   └── scopeSelection.ts
    │   │   │   └── vscode-node/
    │   │   │       └── scopeSelectionImpl.ts
    │   │   ├── search/
    │   │   │   ├── common/
    │   │   │   │   └── searchService.ts
    │   │   │   ├── vscode/
    │   │   │   │   └── baseSearchServiceImpl.ts
    │   │   │   └── vscode-node/
    │   │   │       └── searchServiceImpl.ts
    │   │   ├── settingsEditor/
    │   │   │   └── common/
    │   │   │       └── settingsEditorSearchService.ts
    │   │   ├── simulationTestContext/
    │   │   │   └── common/
    │   │   │       └── simulationTestContext.ts
    │   │   ├── snippy/
    │   │   │   └── common/
    │   │   │       ├── snippyCompute.ts
    │   │   │       ├── snippyFetcher.ts
    │   │   │       ├── snippyNotifier.ts
    │   │   │       ├── snippyService.ts
    │   │   │       ├── snippyServiceImpl.ts
    │   │   │       └── snippyTypes.ts
    │   │   ├── survey/
    │   │   │   ├── common/
    │   │   │   │   └── surveyService.ts
    │   │   │   └── vscode/
    │   │   │       └── surveyServiceImpl.ts
    │   │   ├── tabs/
    │   │   │   ├── common/
    │   │   │   │   └── tabsAndEditorsService.ts
    │   │   │   └── vscode/
    │   │   │       └── tabsAndEditorsServiceImpl.ts
    │   │   ├── tasks/
    │   │   │   ├── common/
    │   │   │   │   ├── tasksService.ts
    │   │   │   │   └── testTasksService.ts
    │   │   │   └── vscode/
    │   │   │       └── tasksService.ts
    │   │   ├── telemetry/
    │   │   │   ├── common/
    │   │   │   │   ├── baseTelemetryService.ts
    │   │   │   │   ├── failingTelemetryReporter.ts
    │   │   │   │   ├── ghTelemetrySender.ts
    │   │   │   │   ├── ghTelemetryService.ts
    │   │   │   │   ├── msftTelemetrySender.ts
    │   │   │   │   ├── nullExperimentationService.ts
    │   │   │   │   ├── nullTelemetryService.ts
    │   │   │   │   ├── telemetry.ts
    │   │   │   │   └── telemetryData.ts
    │   │   │   ├── node/
    │   │   │   │   ├── azureInsights.ts
    │   │   │   │   ├── azureInsightsReporter.ts
    │   │   │   │   └── spyingTelemetryService.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       ├── telemetry.spec.ts
    │   │   │   │       └── telemetry2.spec.ts
    │   │   │   └── vscode-node/
    │   │   │       ├── githubTelemetrySender.ts
    │   │   │       ├── microsoftExperimentationService.ts
    │   │   │       ├── microsoftTelemetrySender.ts
    │   │   │       └── telemetryServiceImpl.ts
    │   │   ├── terminal/
    │   │   │   ├── common/
    │   │   │   │   └── terminalService.ts
    │   │   │   └── vscode/
    │   │   │       ├── terminalBufferListener.ts
    │   │   │       └── terminalServiceImpl.ts
    │   │   ├── test/
    │   │   │   ├── common/
    │   │   │   │   └── testExtensionsService.ts
    │   │   │   └── node/
    │   │   │       ├── extensionContext.ts
    │   │   │       ├── fetcher.ts
    │   │   │       ├── isInExtensionHost.ts
    │   │   │       ├── promptContextModel.ts
    │   │   │       ├── services.ts
    │   │   │       ├── simulationWorkspace.ts
    │   │   │       ├── simulationWorkspaceServices.ts
    │   │   │       ├── telemetry.ts
    │   │   │       ├── telemetryFake.ts
    │   │   │       ├── testAuthenticationService.ts
    │   │   │       ├── testChatAgentService.ts
    │   │   │       ├── testHeaderContributor.ts
    │   │   │       ├── testWorkbenchService.ts
    │   │   │       └── testWorkspaceService.ts
    │   │   ├── testing/
    │   │   │   ├── common/
    │   │   │   │   ├── nullTestProvider.ts
    │   │   │   │   ├── nullWorkspaceMutationManager.ts
    │   │   │   │   ├── setupTestExtensions.ts
    │   │   │   │   ├── testProvider.ts
    │   │   │   │   └── workspaceMutationManager.ts
    │   │   │   ├── node/
    │   │   │   │   ├── setupTestDetector.mmd
    │   │   │   │   ├── setupTestDetector.tsx
    │   │   │   │   └── testDepsResolver.ts
    │   │   │   ├── test/
    │   │   │   │   └── node/
    │   │   │   │       └── setupTestDetector.spec.ts
    │   │   │   └── vscode/
    │   │   │       └── testProviderImpl.ts
    │   │   ├── tfidf/
    │   │   │   └── node/
    │   │   │       ├── tfidf.ts
    │   │   │       ├── tfidfMessaging.ts
    │   │   │       ├── tfidfWorker.ts
    │   │   │       └── test/
    │   │   │           └── tfidf.spec.ts
    │   │   ├── thinking/
    │   │   │   ├── common/
    │   │   │   │   └── thinking.ts
    │   │   │   ├── node/
    │   │   │   │   └── thinkingDataService.ts
    │   │   │   └── test/
    │   │   │       └── node/
    │   │   │           └── thinkingDataService.spec.ts
    │   │   ├── tokenizer/
    │   │   │   ├── node/
    │   │   │   │   ├── cl100k_base.tiktoken
    │   │   │   │   ├── o200k_base.tiktoken
    │   │   │   │   ├── parseTikTokens.ts
    │   │   │   │   ├── tikTokenizerImpl.ts
    │   │   │   │   ├── tikTokenizerWorker.ts
    │   │   │   │   └── tokenizer.ts
    │   │   │   └── test/
    │   │   │       └── node/
    │   │   │           └── tokenizer.spec.ts
    │   │   ├── urlChunkSearch/
    │   │   │   └── node/
    │   │   │       └── urlChunkEmbeddingsIndex.ts
    │   │   ├── workbench/
    │   │   │   ├── common/
    │   │   │   │   └── workbenchService.ts
    │   │   │   ├── test/
    │   │   │   │   └── vscode-node/
    │   │   │   │       └── workbenchServiceImpl.test.ts
    │   │   │   └── vscode/
    │   │   │       └── workbenchServiceImpt.ts
    │   │   ├── workspace/
    │   │   │   ├── common/
    │   │   │   │   └── workspaceService.ts
    │   │   │   └── vscode/
    │   │   │       └── workspaceServiceImpl.ts
    │   │   ├── workspaceChunkSearch/
    │   │   │   ├── common/
    │   │   │   │   ├── githubAvailableEmbeddingTypes.ts
    │   │   │   │   ├── githubEmbeddingsComputer.ts
    │   │   │   │   └── workspaceChunkSearch.ts
    │   │   │   ├── node/
    │   │   │   │   ├── codeSearchChunkSearch.ts
    │   │   │   │   ├── codeSearchWorkspaceDiff.ts
    │   │   │   │   ├── embeddingLruCache.ts
    │   │   │   │   ├── embeddingsChunkSearch.ts
    │   │   │   │   ├── fullWorkspaceChunkSearch.ts
    │   │   │   │   ├── tfidfChunkSearch.ts
    │   │   │   │   ├── tfidfWithSemanticChunkSearch.ts
    │   │   │   │   ├── workspaceChunkAndEmbeddingCache.ts
    │   │   │   │   ├── workspaceChunkEmbeddingsIndex.ts
    │   │   │   │   ├── workspaceChunkSearchService.ts
    │   │   │   │   └── workspaceFileIndex.ts
    │   │   │   └── test/
    │   │   │       └── node/
    │   │   │           └── isMinified.spec.ts
    │   │   ├── workspaceRecorder/
    │   │   │   └── common/
    │   │   │       ├── workspaceLog.ts
    │   │   │       └── resolvedRecording/
    │   │   │           ├── documentHistory.ts
    │   │   │           ├── operation.ts
    │   │   │           ├── resolvedRecording.ts
    │   │   │           └── sliceRecording.ts
    │   │   └── workspaceState/
    │   │       └── common/
    │   │           └── promptContextModel.ts
    │   └── util/
    │       ├── common/
    │       │   ├── annotatedLineRange.ts
    │       │   ├── anomalyDetection.ts
    │       │   ├── arrays.ts
    │       │   ├── async.ts
    │       │   ├── cache.ts
    │       │   ├── chatResponseStreamImpl.ts
    │       │   ├── crypto.ts
    │       │   ├── debounce.ts
    │       │   ├── debugValueEditorGlobals.ts
    │       │   ├── diff.ts
    │       │   ├── errors.ts
    │       │   ├── fileSystem.ts
    │       │   ├── fileTree.ts
    │       │   ├── glob.ts
    │       │   ├── globals.d.ts
    │       │   ├── imageUtils.ts
    │       │   ├── languages.ts
    │       │   ├── lock.ts
    │       │   ├── markdown.ts
    │       │   ├── notebooks.ts
    │       │   ├── pathRedaction.ts
    │       │   ├── progress.ts
    │       │   ├── progressRecorder.ts
    │       │   ├── range.ts
    │       │   ├── result.ts
    │       │   ├── services.ts
    │       │   ├── taskSingler.ts
    │       │   ├── telemetryCorrelationId.ts
    │       │   ├── time.ts
    │       │   ├── timeTravelScheduler.ts
    │       │   ├── tokenizer.ts
    │       │   ├── tracing.ts
    │       │   ├── types.ts
    │       │   ├── variableLengthQuantity.ts
    │       │   ├── vscodeVersion.ts
    │       │   └── test/
    │       │       ├── annotatedSrc.ts
    │       │       ├── async.spec.ts
    │       │       ├── mockChatResponseStream.ts
    │       │       ├── notebooks.spec.ts
    │       │       ├── simpleMock.ts
    │       │       └── shims/
    │       │           ├── chatTypes.ts
    │       │           ├── codeActions.ts
    │       │           ├── diagnostics.ts
    │       │           ├── editing.ts
    │       │           ├── enums.ts
    │       │           ├── l10n.ts
    │       │           ├── markdownString.ts
    │       │           ├── newSymbolName.ts
    │       │           ├── notebookDocument.ts
    │       │           ├── notebookEditor.ts
    │       │           ├── position.ts
    │       │           ├── prefixSumComputer.ts
    │       │           ├── range.ts
    │       │           ├── selection.ts
    │       │           ├── symbolInformation.ts
    │       │           ├── terminal.ts
    │       │           ├── textDocument.ts
    │       │           ├── textEditor.ts
    │       │           └── vscodeTypesShim.ts
    │       ├── node/
    │       │   ├── crypto.ts
    │       │   ├── jsonFile.ts
    │       │   ├── ports.ts
    │       │   ├── worker.ts
    │       │   └── test/
    │       │       ├── anomalyDetection.spec.ts
    │       │       ├── debounce.spec.ts
    │       │       ├── glob.spec.ts
    │       │       ├── lock.spec.ts
    │       │       ├── markdown.spec.ts
    │       │       └── pathRedaction.spec.ts
    │       ├── test/
    │       │   └── node/
    │       │       └── variableLengthQuantity.spec.ts
    │       └── vs/
    │           ├── base-common.d.ts
    │           ├── crypto.d.ts
    │           ├── nls.messages.ts
    │           ├── nls.ts
    │           ├── vscode-globals-nls.d.ts
    │           ├── vscode-globals-product.d.ts
    │           ├── base/
    │           │   ├── common/
    │           │   │   ├── actions.ts
    │           │   │   ├── arrays.ts
    │           │   │   ├── arraysFind.ts
    │           │   │   ├── assert.ts
    │           │   │   ├── async.ts
    │           │   │   ├── buffer.ts
    │           │   │   ├── cache.ts
    │           │   │   ├── cancellation.ts
    │           │   │   ├── charCode.ts
    │           │   │   ├── codicons.ts
    │           │   │   ├── codiconsLibrary.ts
    │           │   │   ├── codiconsUtil.ts
    │           │   │   ├── collections.ts
    │           │   │   ├── equals.ts
    │           │   │   ├── errorMessage.ts
    │           │   │   ├── errors.ts
    │           │   │   ├── event.ts
    │           │   │   ├── extpath.ts
    │           │   │   ├── filters.ts
    │           │   │   ├── functional.ts
    │           │   │   ├── glob.ts
    │           │   │   ├── hash.ts
    │           │   │   ├── htmlContent.ts
    │           │   │   ├── iconLabels.ts
    │           │   │   ├── iterator.ts
    │           │   │   ├── lazy.ts
    │           │   │   ├── lifecycle.ts
    │           │   │   ├── linkedList.ts
    │           │   │   ├── map.ts
    │           │   │   ├── marshallingIds.ts
    │           │   │   ├── network.ts
    │           │   │   ├── numbers.ts
    │           │   │   ├── objects.ts
    │           │   │   ├── observable.ts
    │           │   │   ├── path.ts
    │           │   │   ├── platform.ts
    │           │   │   ├── process.ts
    │           │   │   ├── resources.ts
    │           │   │   ├── sequence.ts
    │           │   │   ├── stopwatch.ts
    │           │   │   ├── stream.ts
    │           │   │   ├── strings.ts
    │           │   │   ├── symbols.ts
    │           │   │   ├── ternarySearchTree.ts
    │           │   │   ├── themables.ts
    │           │   │   ├── types.ts
    │           │   │   ├── uint.ts
    │           │   │   ├── uri.ts
    │           │   │   ├── uuid.ts
    │           │   │   ├── diff/
    │           │   │   │   ├── diff.ts
    │           │   │   │   └── diffChange.ts
    │           │   │   ├── naturalLanguage/
    │           │   │   │   └── korean.ts
    │           │   │   └── observableInternal/
    │           │   │       ├── base.ts
    │           │   │       ├── changeTracker.ts
    │           │   │       ├── debugName.ts
    │           │   │       ├── index.ts
    │           │   │       ├── map.ts
    │           │   │       ├── set.ts
    │           │   │       ├── transaction.ts
    │           │   │       ├── commonFacade/
    │           │   │       │   ├── cancellation.ts
    │           │   │       │   └── deps.ts
    │           │   │       ├── experimental/
    │           │   │       │   └── utils.ts
    │           │   │       ├── logging/
    │           │   │       │   ├── consoleObservableLogger.ts
    │           │   │       │   ├── logging.ts
    │           │   │       │   └── debugger/
    │           │   │       │       ├── debuggerApi.d.ts
    │           │   │       │       ├── debuggerRpc.ts
    │           │   │       │       ├── devToolsLogger.ts
    │           │   │       │       ├── rpc.ts
    │           │   │       │       └── utils.ts
    │           │   │       ├── observables/
    │           │   │       │   ├── baseObservable.ts
    │           │   │       │   ├── constObservable.ts
    │           │   │       │   ├── derived.ts
    │           │   │       │   ├── derivedImpl.ts
    │           │   │       │   ├── lazyObservableValue.ts
    │           │   │       │   ├── observableFromEvent.ts
    │           │   │       │   ├── observableSignal.ts
    │           │   │       │   ├── observableSignalFromEvent.ts
    │           │   │       │   ├── observableValue.ts
    │           │   │       │   └── observableValueOpts.ts
    │           │   │       ├── reactions/
    │           │   │       │   ├── autorun.ts
    │           │   │       │   └── autorunImpl.ts
    │           │   │       └── utils/
    │           │   │           ├── promise.ts
    │           │   │           ├── runOnChange.ts
    │           │   │           ├── utils.ts
    │           │   │           ├── utilsCancellation.ts
    │           │   │           └── valueWithChangeEvent.ts
    │           │   └── node/
    │           │       └── ports.ts
    │           ├── editor/
    │           │   └── common/
    │           │       ├── languageSelector.ts
    │           │       ├── core/
    │           │       │   ├── editOperation.ts
    │           │       │   ├── position.ts
    │           │       │   ├── range.ts
    │           │       │   ├── wordHelper.ts
    │           │       │   ├── edits/
    │           │       │   │   ├── arrayEdit.ts
    │           │       │   │   ├── edit.ts
    │           │       │   │   ├── lengthEdit.ts
    │           │       │   │   ├── lineEdit.ts
    │           │       │   │   ├── stringEdit.ts
    │           │       │   │   └── textEdit.ts
    │           │       │   ├── ranges/
    │           │       │   │   ├── lineRange.ts
    │           │       │   │   └── offsetRange.ts
    │           │       │   └── text/
    │           │       │       ├── abstractText.ts
    │           │       │       ├── positionToOffset.ts
    │           │       │       └── textLength.ts
    │           │       ├── diff/
    │           │       │   ├── legacyLinesDiffComputer.ts
    │           │       │   ├── linesDiffComputer.ts
    │           │       │   ├── rangeMapping.ts
    │           │       │   └── defaultLinesDiffComputer/
    │           │       │       ├── computeMovedLines.ts
    │           │       │       ├── defaultLinesDiffComputer.ts
    │           │       │       ├── heuristicSequenceOptimizations.ts
    │           │       │       ├── lineSequence.ts
    │           │       │       ├── linesSliceCharSequence.ts
    │           │       │       ├── utils.ts
    │           │       │       └── algorithms/
    │           │       │           ├── diffAlgorithm.ts
    │           │       │           ├── dynamicProgrammingDiffing.ts
    │           │       │           └── myersDiffAlgorithm.ts
    │           │       └── model/
    │           │           └── prefixSumComputer.ts
    │           └── platform/
    │               └── instantiation/
    │                   └── common/
    │                       ├── descriptors.ts
    │                       ├── graph.ts
    │                       ├── instantiation.ts
    │                       ├── instantiationService.ts
    │                       └── serviceCollection.ts
    ├── test/
    │   ├── cacheSalt.ts
    │   ├── jsonOutputPrinter.ts
    │   ├── outputColorer.ts
    │   ├── requirements.txt
    │   ├── simulationLogger.ts
    │   ├── simulationMain.ts
    │   ├── simulationTests.ts
    │   ├── taskRunner.ts
    │   ├── testExecutionInExtension.ts
    │   ├── testExecutor.ts
    │   ├── testVisualizationRunner.ts
    │   ├── testVisualizationRunnerSTest.ts
    │   ├── testVisualizationRunnerSTestRunner.ts
    │   ├── util.ts
    │   ├── base/
    │   │   ├── cache-cli.ts
    │   │   ├── cache.ts
    │   │   ├── cachingChatMLFetcher.ts
    │   │   ├── cachingChunksEndpointClient.ts
    │   │   ├── cachingCodeSearchClient.ts
    │   │   ├── cachingCompletionsFetchService.ts
    │   │   ├── cachingEmbeddingsFetcher.ts
    │   │   ├── cachingResourceFetcher.ts
    │   │   ├── chatMLCache.ts
    │   │   ├── completionsCache.ts
    │   │   ├── embeddingsCache.ts
    │   │   ├── fileUtils.ts
    │   │   ├── hash.ts
    │   │   ├── pausableThrottledWorker.ts
    │   │   ├── rubric.ts
    │   │   ├── salts.ts
    │   │   ├── simulationBaseline.ts
    │   │   ├── simulationContext.ts
    │   │   ├── simulationEndpointHealth.ts
    │   │   ├── simulationOptions.ts
    │   │   ├── simulationOutcome.ts
    │   │   ├── simuliationWorkspaceChunkSearch.ts
    │   │   ├── spyingChatMLFetcher.ts
    │   │   ├── stdout.ts
    │   │   ├── stest.ts
    │   │   ├── testProgress.ts
    │   │   ├── throttlingChatMLFetcher.ts
    │   │   ├── throttlingCodeOrDocsSearchClient.ts
    │   │   ├── validate.ts
    │   │   └── extHostContext/
    │   │       ├── simulationExtHostContext.ts
    │   │       ├── simulationExtHostToolsService.ts
    │   │       └── simulationWorkspaceExtHost.ts
    │   ├── codeMapper/
    │   │   └── codeMapper.stest.ts
    │   ├── e2e/
    │   │   ├── edit.stest.ts
    │   │   ├── explain.stest.ts
    │   │   ├── fetchWebPageTool.stest.ts
    │   │   ├── findFilesTool.stest.ts
    │   │   ├── markdown.stest.ts
    │   │   ├── newNotebook.stest.ts
    │   │   ├── newWorkspace.stest.ts
    │   │   ├── notebook.stest.ts
    │   │   ├── notebookTools.stest.ts
    │   │   ├── pythonFix.stest.ts
    │   │   ├── scenarioLoader.ts
    │   │   ├── scenarioTest.ts
    │   │   ├── search.stest.ts
    │   │   ├── semanticSearch.stest.ts
    │   │   ├── semanticSearchView.stest.ts
    │   │   ├── startDebugging.stest.ts
    │   │   ├── system.stest.ts
    │   │   ├── terminal.stest.ts
    │   │   ├── testHelper.ts
    │   │   ├── tools.stest.ts
    │   │   ├── toolSimTest.ts
    │   │   ├── typescriptFix.stest.ts
    │   │   ├── variables.stest.ts
    │   │   ├── vscode-metaprompt.stest.ts
    │   │   ├── vscode.stest.ts
    │   │   ├── workspace-e2e.stest.ts
    │   │   ├── workspace-metaprompt.stest.ts
    │   │   └── evaluators/
    │   │       └── pythonFix.ts
    │   ├── inline/
    │   │   ├── agent.stest.ts
    │   │   ├── fixing.stest.ts
    │   │   ├── inlineEditCode.stest.ts
    │   │   ├── inlineExplain.stest.ts
    │   │   ├── inlineGenerateCode.stest.ts
    │   │   ├── multiFileEdit.stest.ts
    │   │   ├── review.stest.ts
    │   │   ├── slashDoc.cpp.stest.ts
    │   │   ├── slashDoc.java.stest.ts
    │   │   ├── slashDoc.py.stest.ts
    │   │   ├── slashDoc.rb.stest.ts
    │   │   ├── slashDoc.ts.stest.ts
    │   │   ├── slashDoc.util.ts
    │   │   └── test/
    │   │       └── assertPyDocstring.spec.ts
    │   ├── intent/
    │   │   ├── inline-chat.json
    │   │   ├── inlineChatIntent.stest.ts
    │   │   ├── intentTest.ts
    │   │   ├── panel-chat-github.json
    │   │   ├── panel-chat-unknown.json
    │   │   ├── panel-chat.json
    │   │   └── panelChatIntent.stest.ts
    │   ├── outcome/
    │   │   ├── -doc-inline.json
    │   │   ├── -doc-inline2-inline.json
    │   │   ├── -review-inline.json
    │   │   ├── -tests-custom-instructions-inline.json
    │   │   ├── -tests-inline.json
    │   │   ├── -tests-inline2-inline.json
    │   │   ├── -tests-panel.json
    │   │   ├── -tests-real-world-inline.json
    │   │   ├── codemapper-context.json
    │   │   ├── custom-instructions-inline.json
    │   │   ├── debug-config-to-command-context.json
    │   │   ├── debug-tools-list-context.json
    │   │   ├── dev-container-configuration-external.json
    │   │   ├── edit-inline.json
    │   │   ├── edit-inline2-inline.json
    │   │   ├── edit-toolcalling-panel.json
    │   │   ├── explain-expanded-context-panel.json
    │   │   ├── explain-inline.json
    │   │   ├── fetchwebpagetool-toolcalling-panel.json
    │   │   ├── findfilestool-toolcalling-panel.json
    │   │   ├── fix-cpp-inline.json
    │   │   ├── fix-eslint-inline.json
    │   │   ├── fix-inline2-cpp-inline.json
    │   │   ├── fix-inline2-eslint-inline.json
    │   │   ├── fix-inline2-powershell-inline.json
    │   │   ├── fix-inline2-pylint-inline.json
    │   │   ├── fix-inline2-pyright-inline.json
    │   │   ├── fix-inline2-roslyn-inline.json
    │   │   ├── fix-inline2-ruff-inline.json
    │   │   ├── fix-inline2-tsc-inline.json
    │   │   ├── fix-powershell-inline.json
    │   │   ├── fix-pylint-inline.json
    │   │   ├── fix-pyright-inline.json
    │   │   ├── fix-python-panel.json
    │   │   ├── fix-roslyn-inline.json
    │   │   ├── fix-ruff-inline.json
    │   │   ├── fix-tsc-inline.json
    │   │   ├── fix-typescript-panel.json
    │   │   ├── generate-inline.json
    │   │   ├── generate-inline2-inline.json
    │   │   ├── generate-markdown-panel.json
    │   │   ├── git-commit-message-external.json
    │   │   ├── inlineedit-goldenscenario-xtab-external.json
    │   │   ├── intent-inline.json
    │   │   ├── intent-panel.json
    │   │   ├── multifile-edit-claude-panel.json
    │   │   ├── multifile-edit-panel.json
    │   │   ├── new-prompt-panel.json
    │   │   ├── newnotebook-prompt-panel.json
    │   │   ├── notebook-edit-inline.json
    │   │   ├── notebook-fix-inline.json
    │   │   ├── notebook-fix-runtime-inline.json
    │   │   ├── notebook-generate-inline.json
    │   │   ├── notebook-generate-runtime-inline.json
    │   │   ├── notebookedits-bug-reports-json-panel.json
    │   │   ├── notebookedits-bug-reports-text-panel.json
    │   │   ├── notebookedits-bug-reports-xml-panel.json
    │   │   ├── notebookedits-modification-json-panel.json
    │   │   ├── notebookedits-modification-text-panel.json
    │   │   ├── notebookedits-modification-xml-panel.json
    │   │   ├── notebooks-toolcalling-panel.json
    │   │   ├── pr-title-and-description-context.json
    │   │   ├── rename-suggestions-external.json
    │   │   ├── search-panel.json
    │   │   ├── settingseditorsearchresultsselector-external.json
    │   │   ├── setuptests-invoke-panel.json
    │   │   ├── setuptests-recommend-panel.json
    │   │   ├── startdebugging-panel.json
    │   │   ├── system-identity-panel.json
    │   │   ├── terminal-general-panel.json
    │   │   ├── terminal-git-panel.json
    │   │   ├── toolcalling-panel.json
    │   │   ├── variables-panel.json
    │   │   └── vscode-metaprompt-panel.json
    │   ├── prompts/
    │   │   ├── customInstructions.stest.ts
    │   │   ├── devContainerConfigGenerator.stest.ts
    │   │   ├── gitCommitMessageGenerator.stest.ts
    │   │   ├── newNotebookCell.stest.ts
    │   │   ├── newWorkspace.stest.ts
    │   │   ├── settingsEditorSearchResultsSelector.stest.ts
    │   │   └── fixtures/
    │   │       └── devcontainer/
    │   │           ├── devContainerConfigTestData.json
    │   │           └── devContainerIndex.json
    │   ├── scenarios/
    │   │   ├── test-current-selection-impls/
    │   │   │   ├── test.ts
    │   │   │   ├── workspaceState.state.json
    │   │   │   ├── workspaceState1.state.json
    │   │   │   └── workspaceState2.state.json
    │   │   ├── test-explain/
    │   │   │   ├── bar.ts
    │   │   │   ├── baz.ts
    │   │   │   ├── classes.py
    │   │   │   ├── classes.rb
    │   │   │   ├── classes.ts
    │   │   │   ├── cursor.ts
    │   │   │   ├── explain.0.conversation.json
    │   │   │   ├── explain.0.state.json
    │   │   │   ├── explain.1.conversation.json
    │   │   │   ├── explain.1.state.json
    │   │   │   ├── explain.10.conversation.json
    │   │   │   ├── explain.10.state.json
    │   │   │   ├── explain.11.conversation.json
    │   │   │   ├── explain.11.state.json
    │   │   │   ├── explain.12.conversation.json
    │   │   │   ├── explain.12.state.json
    │   │   │   ├── explain.13.conversation.json
    │   │   │   ├── explain.13.state.json
    │   │   │   ├── explain.15.conversation.json
    │   │   │   ├── explain.15.state.json
    │   │   │   ├── explain.16.conversation.json
    │   │   │   ├── explain.16.state.json
    │   │   │   ├── explain.2.conversation.json
    │   │   │   ├── explain.2.state.json
    │   │   │   ├── explain.3.conversation.json
    │   │   │   ├── explain.3.state.json
    │   │   │   ├── explain.4.conversation.json
    │   │   │   ├── explain.5.conversation.json
    │   │   │   ├── explain.5.state.json
    │   │   │   ├── explain.6.conversation.json
    │   │   │   ├── explain.6.state.json
    │   │   │   ├── explain.7.conversation.json
    │   │   │   ├── explain.7.state.json
    │   │   │   ├── explain.8.conversation.json
    │   │   │   ├── explain.8.state.json
    │   │   │   ├── explain.9.conversation.json
    │   │   │   ├── explain.9.state.json
    │   │   │   ├── foo.ts
    │   │   │   ├── functions.cpp
    │   │   │   ├── functions.cs
    │   │   │   ├── functions.go
    │   │   │   ├── functions.py
    │   │   │   ├── functions.rb
    │   │   │   ├── functions.ts
    │   │   │   ├── methods.java
    │   │   │   ├── methods.ts
    │   │   │   └── types.ts
    │   │   ├── test-generate-markdown/
    │   │   │   ├── file.ts
    │   │   │   ├── test0.conversation.json
    │   │   │   └── workspaceState.state.json
    │   │   ├── test-new-notebooks/
    │   │   │   ├── fib.md
    │   │   │   ├── test0.conversation.json
    │   │   │   └── workspaceState.state.json
    │   │   ├── test-new-workspace/
    │   │   │   ├── fib.md
    │   │   │   ├── functions.ts
    │   │   │   ├── newWorkspace0.conversation.json
    │   │   │   ├── newWorkspace1.conversation.json
    │   │   │   ├── newWorkspace2.conversation.json
    │   │   │   ├── newWorkspace3.conversation.json
    │   │   │   ├── newWorkspace4.conversation.json
    │   │   │   ├── newWorkspace5.conversation.json
    │   │   │   ├── newWorkspace6.conversation.json
    │   │   │   ├── newWorkspace7.conversation.json
    │   │   │   ├── newWorkspace8.conversation.json
    │   │   │   ├── newWorkspace9.conversation.json
    │   │   │   ├── workspaceState.9.state.json
    │   │   │   └── workspaceState.state.json
    │   │   ├── test-notebook-tools/
    │   │   │   ├── Chipotle.solution.ipynb
    │   │   │   ├── Chipotle1.state.json
    │   │   │   └── LICENSE
    │   │   ├── test-notebooks/
    │   │   │   ├── Chipotle.conversation.json
    │   │   │   ├── Chipotle.solution.ipynb
    │   │   │   ├── Chipotle1.state.json
    │   │   │   ├── Chipotle10.state.json
    │   │   │   ├── Chipotle11.state.json
    │   │   │   ├── Chipotle12.state.json
    │   │   │   ├── Chipotle13.state.json
    │   │   │   ├── Chipotle14.state.json
    │   │   │   ├── Chipotle15.state.json
    │   │   │   ├── Chipotle16.state.json
    │   │   │   ├── Chipotle2.state.json
    │   │   │   ├── Chipotle3.state.json
    │   │   │   ├── Chipotle4.state.json
    │   │   │   ├── Chipotle5.state.json
    │   │   │   ├── Chipotle6.state.json
    │   │   │   ├── Chipotle7.state.json
    │   │   │   ├── Chipotle8.state.json
    │   │   │   ├── Chipotle9.state.json
    │   │   │   └── LICENSE
    │   │   ├── test-scenario-1/
    │   │   │   ├── bar.js
    │   │   │   ├── emptySelection.state.json
    │   │   │   ├── fib.js
    │   │   │   ├── test1.conversation.json
    │   │   │   ├── test2.conversation.json
    │   │   │   └── workspaceState.state.json
    │   │   ├── test-scenario-fix-python/
    │   │   │   ├── case1.conversation.json
    │   │   │   ├── case1.py
    │   │   │   ├── case1.state.json
    │   │   │   ├── case10.conversation.json
    │   │   │   ├── case10.py
    │   │   │   ├── case10.state.json
    │   │   │   ├── case2.conversation.json
    │   │   │   ├── case2.py
    │   │   │   ├── case2.state.json
    │   │   │   ├── case3.conversation.json
    │   │   │   ├── case3.py
    │   │   │   ├── case3.state.json
    │   │   │   ├── case4.conversation.json
    │   │   │   ├── case4.py
    │   │   │   ├── case4.state.json
    │   │   │   ├── case5.conversation.json
    │   │   │   ├── case5.py
    │   │   │   ├── case5.state.json
    │   │   │   ├── case6.conversation.json
    │   │   │   ├── case6.py
    │   │   │   ├── case6.state.json
    │   │   │   ├── case7.conversation.json
    │   │   │   ├── case7.py
    │   │   │   ├── case7.state.json
    │   │   │   ├── case8.conversation.json
    │   │   │   ├── case8.py
    │   │   │   ├── case8.state.json
    │   │   │   ├── case9.conversation.json
    │   │   │   ├── case9.py
    │   │   │   └── case9.state.json
    │   │   ├── test-scenario-fix-typescript/
    │   │   │   ├── file1.ts
    │   │   │   ├── file2.ts
    │   │   │   ├── fix-implements-typescript.conversation.json
    │   │   │   └── implements.state.json
    │   │   ├── test-scenario-search/
    │   │   │   ├── search0.testArgs.json
    │   │   │   ├── search1.testArgs.json
    │   │   │   ├── search10.testArgs.json
    │   │   │   ├── search11.testArgs.json
    │   │   │   ├── search12.testArgs.json
    │   │   │   ├── search13.testArgs.json
    │   │   │   ├── search14.testArgs.json
    │   │   │   ├── search15.testArgs.json
    │   │   │   ├── search16.testArgs.json
    │   │   │   ├── search17.testArgs.json
    │   │   │   ├── search18.testArgs.json
    │   │   │   ├── search19.testArgs.json
    │   │   │   ├── search2.testArgs.json
    │   │   │   ├── search20.testArgs.json
    │   │   │   ├── search21.testArgs.json
    │   │   │   ├── search22.testArgs.json
    │   │   │   ├── search23.testArgs.json
    │   │   │   ├── search24.testArgs.json
    │   │   │   ├── search25.testArgs.json
    │   │   │   ├── search3.testArgs.json
    │   │   │   ├── search4.testArgs.json
    │   │   │   ├── search5.testArgs.json
    │   │   │   ├── search6.testArgs.json
    │   │   │   ├── search7.testArgs.json
    │   │   │   ├── search8.testArgs.json
    │   │   │   ├── search9.testArgs.json
    │   │   │   ├── example-files/
    │   │   │   │   ├── bar.html
    │   │   │   │   ├── example.ts
    │   │   │   │   ├── foo.md
    │   │   │   │   ├── style.css
    │   │   │   │   └── test.py
    │   │   │   └── replace-samples/
    │   │   │       ├── foo.replace2.md
    │   │   │       └── style.replace17.css
    │   │   ├── test-semantic-search/
    │   │   │   ├── workspace0.conversation.json
    │   │   │   ├── workspace1.conversation.json
    │   │   │   ├── workspaceState.state.json
    │   │   │   └── workspaceState1.state.json
    │   │   ├── test-setupTest/
    │   │   │   ├── testSetup.0.conversation.json
    │   │   │   ├── testSetup.1.conversation.json
    │   │   │   ├── testSetup.2.conversation.json
    │   │   │   ├── testSetup.3.conversation.json
    │   │   │   ├── testSetup.4.conversation.json
    │   │   │   ├── testSetup.5.conversation.json
    │   │   │   └── testSetup.6.conversation.json
    │   │   ├── test-setupTestRecommend/
    │   │   │   ├── testSetup.0.conversation.json
    │   │   │   ├── testSetup.1.conversation.json
    │   │   │   ├── testSetup.2.conversation.json
    │   │   │   ├── testSetup.3.conversation.json
    │   │   │   ├── testSetup.4.conversation.json
    │   │   │   ├── testSetup.5.conversation.json
    │   │   │   ├── testSetup.6.conversation.json
    │   │   │   ├── testSetup.7.conversation.json
    │   │   │   └── testSetup.8.conversation.json
    │   │   ├── test-startDebugging/
    │   │   │   ├── startDebugging.0.conversation.json
    │   │   │   └── startDebugging.1.conversation.json
    │   │   ├── test-system/
    │   │   │   ├── fib.md
    │   │   │   ├── puppeteer.js
    │   │   │   ├── system.5.conversation.json
    │   │   │   ├── system.6.conversation.json
    │   │   │   ├── system0.conversation.json
    │   │   │   ├── system1.conversation.json
    │   │   │   ├── system2.conversation.json
    │   │   │   ├── system3.conversation.json
    │   │   │   ├── system4.conversation.json
    │   │   │   ├── workspaceState.state.json
    │   │   │   └── workspaceState3.state.json
    │   │   ├── test-terminal/
    │   │   │   ├── bash.state.json
    │   │   │   ├── fish.state.json
    │   │   │   ├── powershell.state.json
    │   │   │   └── zsh.state.json
    │   │   ├── test-tools/
    │   │   │   ├── chatSetup.state.json
    │   │   │   ├── tools.0.conversation.json
    │   │   │   ├── tools.1.conversation.json
    │   │   │   ├── tools.state.json
    │   │   │   └── workspace/
    │   │   │       ├── chatSetup.ts
    │   │   │       ├── file.md
    │   │   │       └── functions.ts
    │   │   └── test-variables/
    │   │       ├── functions.ts
    │   │       ├── variables.0.conversation.json
    │   │       ├── variables.0.state.json
    │   │       ├── variables.1.conversation.json
    │   │       └── variables.1.state.json
    │   ├── simulation/
    │   │   ├── baseline.json
    │   │   ├── baseline.old.json
    │   │   ├── debugCommandToConfig.stest.ts
    │   │   ├── debugTools.stest.ts
    │   │   ├── externalScenarios.ts
    │   │   ├── inlineChatSimulator.ts
    │   │   ├── nesCoffeTests.ts
    │   │   ├── nesCoffeTestsTypes.ts
    │   │   ├── nesExternalTests.ts
    │   │   ├── nesOptionsToConfigurations.ts
    │   │   ├── notebookEdits.stest.ts
    │   │   ├── notebooks.stest.ts
    │   │   ├── notebookValidator.ts
    │   │   ├── outcomeValidators.ts
    │   │   ├── panelCodeMapperSimulator.ts
    │   │   ├── prTitleAndDescription.stest.ts
    │   │   ├── renameSuggestionsProvider.stest.ts
    │   │   ├── setupTests.stest.ts
    │   │   ├── simulationTestProvider.ts
    │   │   ├── stestUtil.ts
    │   │   ├── testInformation.ts
    │   │   ├── testSnapshot.ts
    │   │   ├── types.ts
    │   │   ├── cache/
    │   │   │   ├── base.sqlite
    │   │   │   └── layers/
    │   │   │       ├── 186d13d6-3c0c-45dd-9d45-054632ec599d.sqlite
    │   │   │       ├── 1dd0f60e-1fe0-4b14-9f27-047dc8aa800a.sqlite
    │   │   │       ├── 2d4b6535-29bd-4897-96ae-399aae047f3b.sqlite
    │   │   │       ├── 53e98a53-b403-4038-b94d-8192c72ac082.sqlite
    │   │   │       ├── 7a0bf361-b530-4259-9036-53be022c74f5.sqlite
    │   │   │       ├── c49cde85-f02d-4ba1-91f1-b0b2f7cfaf2f.sqlite
    │   │   │       ├── c5166f81-3f13-42ad-b532-8390fcda8f07.sqlite
    │   │   │       ├── cbdbc41c-98cb-45a2-a12d-a78ed24463c9.sqlite
    │   │   │       ├── d719ef71-8404-49a4-9f6d-5e9f3118ce51.sqlite
    │   │   │       └── f9bd58e9-8b91-477c-8aad-2222025f4607.sqlite
    │   │   ├── diagnosticProviders/
    │   │   │   ├── cpp.ts
    │   │   │   ├── diagnosticsProvider.ts
    │   │   │   ├── eslint.ts
    │   │   │   ├── index.ts
    │   │   │   ├── python.ts
    │   │   │   ├── roslyn.ts
    │   │   │   ├── ruff.ts
    │   │   │   ├── tsc.ts
    │   │   │   └── utils.ts
    │   │   ├── fixtures/
    │   │   │   ├── codeMapper/
    │   │   │   │   ├── extHostExtensionActivator.test.ts
    │   │   │   │   ├── fibonacci_iterative.ts
    │   │   │   │   ├── fibonacci_recursive.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   ├── notebookEditorWidget.ts
    │   │   │   │   ├── package.json
    │   │   │   │   ├── product-build-linux.yml
    │   │   │   │   ├── product-icons-mixed.md
    │   │   │   │   ├── product-icons-sorted.md
    │   │   │   │   ├── quickInput.ts
    │   │   │   │   ├── scanner.ts
    │   │   │   │   └── scannerTypes.ts
    │   │   │   ├── cpp/
    │   │   │   │   ├── basic/
    │   │   │   │   │   └── main.cpp
    │   │   │   │   └── headers/
    │   │   │   │       ├── abi_macros.hpp
    │   │   │   │       └── json_fwd.hpp
    │   │   │   ├── doc/
    │   │   │   │   └── issue-6406/
    │   │   │   │       └── debugModel.ts
    │   │   │   ├── doc-everywhere-issue-3763/
    │   │   │   │   └── githubServer.ts
    │   │   │   ├── doc-explain-ts-code/
    │   │   │   │   ├── charCode.ts
    │   │   │   │   └── strings.ts
    │   │   │   ├── doc-hello-world/
    │   │   │   │   └── colors.ts
    │   │   │   ├── doc-ruby/
    │   │   │   │   └── fib.rb
    │   │   │   ├── doc-ts-class/
    │   │   │   │   └── keybindingResolver.ts
    │   │   │   ├── doc-ts-class-full/
    │   │   │   │   └── keybindingResolver.ts
    │   │   │   ├── doc-ts-interface/
    │   │   │   │   └── codeImportPatterns.ts
    │   │   │   ├── doc-ts-large-fn/
    │   │   │   │   └── resolver.ts
    │   │   │   ├── edit/
    │   │   │   │   ├── 3575.ts
    │   │   │   │   ├── 4302.ts
    │   │   │   │   ├── 5710.ts
    │   │   │   │   ├── 6276.ts
    │   │   │   │   ├── issue-2988/
    │   │   │   │   │   └── pseudoStartStopConversationCallback.test.ts
    │   │   │   │   ├── issue-5755/
    │   │   │   │   │   └── vscode.proposed.chatParticipantAdditions.d.ts
    │   │   │   │   ├── issue-6059/
    │   │   │   │   │   └── serializers.ts
    │   │   │   │   ├── issue-6329/
    │   │   │   │   │   └── math.js
    │   │   │   │   ├── issue-6469/
    │   │   │   │   │   └── inlineChat.css
    │   │   │   │   ├── issue-6614/
    │   │   │   │   │   └── workbench-dev.html
    │   │   │   │   ├── issue-6973/
    │   │   │   │   │   └── utils.ts
    │   │   │   │   ├── issue-7202/
    │   │   │   │   │   └── languageModelToolsContribution.ts
    │   │   │   │   ├── issue-7282/
    │   │   │   │   │   └── math.js
    │   │   │   │   ├── issue-7487/
    │   │   │   │   │   └── EditForm.tsx
    │   │   │   │   ├── issue-7996/
    │   │   │   │   │   └── codeEditorWidget.ts
    │   │   │   │   ├── issue-8129/
    │   │   │   │   │   └── optimize.ts
    │   │   │   │   ├── issue-release-142/
    │   │   │   │   │   └── testAuthProvider.ts
    │   │   │   │   ├── issue-release-275/
    │   │   │   │   │   └── BasketService.cs
    │   │   │   │   └── markdown/
    │   │   │   │       ├── README.md
    │   │   │   │       └── explanation.md
    │   │   │   ├── edit-add-enum-variant/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-add-explicit-type-issue-3759/
    │   │   │   │   └── pullRequestModel.ts
    │   │   │   ├── edit-add-toString/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-add-toString2/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-asyncawait-4151/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-convert-ternary-to-if-else/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-import-assert/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-import-assert2/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-issue-1198/
    │   │   │   │   └── main.py
    │   │   │   ├── edit-refactor-loop/
    │   │   │   │   └── index.ts
    │   │   │   ├── edit-single-line-await-issue-3702/
    │   │   │   │   └── interactiveEditorWidget.ts
    │   │   │   ├── edit-slice-4149/
    │   │   │   │   └── index.ts
    │   │   │   ├── editing/
    │   │   │   │   ├── mainThreadChatAgents2.ts
    │   │   │   │   └── math.js
    │   │   │   ├── editing-html/
    │   │   │   │   └── index.html
    │   │   │   ├── explain-project-context/
    │   │   │   │   ├── inlineChat.css
    │   │   │   │   ├── package.json
    │   │   │   │   └── tsconfig.json
    │   │   │   ├── fix/
    │   │   │   │   ├── issue-7544/
    │   │   │   │   │   └── notebookMulticursor.ts
    │   │   │   │   └── issue-7894/
    │   │   │   │       └── shellIntegration.ps1
    │   │   │   ├── fixing/
    │   │   │   │   ├── cpp/
    │   │   │   │   │   ├── basic/
    │   │   │   │   │   │   └── main.cpp
    │   │   │   │   │   └── headers/
    │   │   │   │   │       ├── abi_macros.hpp
    │   │   │   │   │       └── json_fwd.hpp
    │   │   │   │   ├── csharp/
    │   │   │   │   │   ├── roslyn_call_not_awaited.cs
    │   │   │   │   │   ├── roslyn_does_not_contain_definition_for.cs
    │   │   │   │   │   ├── roslyn_does_not_exist.cs
    │   │   │   │   │   ├── roslyn_field_never_used.cs
    │   │   │   │   │   ├── roslyn_has_same_name_as.cs
    │   │   │   │   │   ├── roslyn_missing_using_directive.cs
    │   │   │   │   │   ├── roslyn_no_argument_given.cs
    │   │   │   │   │   └── roslyn_semi_colon_expected.cs
    │   │   │   │   ├── python/
    │   │   │   │   │   ├── pylint_line_too_long_1.py
    │   │   │   │   │   ├── pylint_line_too_long_2.py
    │   │   │   │   │   ├── pylint_line_too_long_3.py
    │   │   │   │   │   ├── pylint_line_too_long_4.py
    │   │   │   │   │   ├── pylint_line_too_long_5.py
    │   │   │   │   │   ├── pylint_unecessary_parenthesis.py
    │   │   │   │   │   ├── pylint_unused_import.py
    │   │   │   │   │   ├── pyright_annotated_types_missing_argument.py
    │   │   │   │   │   ├── pyright_assignment_scopes.py
    │   │   │   │   │   ├── pyright_async_in_non_async_function.py
    │   │   │   │   │   ├── pyright_await_in_non_async_function.py
    │   │   │   │   │   ├── pyright_badtoken.py
    │   │   │   │   │   ├── pyright_can_not_access_member.py
    │   │   │   │   │   ├── pyright_can_not_be_assigned_to_1.py
    │   │   │   │   │   ├── pyright_can_not_be_assigned_to_2.py
    │   │   │   │   │   ├── pyright_can_not_be_assigned_to_3.py
    │   │   │   │   │   ├── pyright_general_type_issue.py
    │   │   │   │   │   ├── pyright_missing_import.py
    │   │   │   │   │   ├── pyright_missing_method.py
    │   │   │   │   │   ├── pyright_no_abstract_class_instantiation.py
    │   │   │   │   │   ├── pyright_no_to_string_member.py
    │   │   │   │   │   ├── pyright_no_value_for_argument.py
    │   │   │   │   │   ├── pyright_not_defined.py
    │   │   │   │   │   ├── pyright_object_not_subscriptable.py
    │   │   │   │   │   ├── pyright_optional_member_access.py
    │   │   │   │   │   ├── pyright_parameter_already_assigned.py
    │   │   │   │   │   ├── pyright_self_as_first_argument.py
    │   │   │   │   │   ├── pyright_unbound_variable.py
    │   │   │   │   │   └── pyright_undefined_variable.py
    │   │   │   │   ├── ruff/
    │   │   │   │   │   └── ruff_error_E231.py
    │   │   │   │   └── typescript/
    │   │   │   │       ├── eslint_class_methods_use_this.ts
    │   │   │   │       ├── eslint_comma_expected.ts
    │   │   │   │       ├── eslint_consistent_this.ts
    │   │   │   │       ├── eslint_constructor_super.ts
    │   │   │   │       ├── eslint_do_not_access_hasOwnProperty.ts
    │   │   │   │       ├── eslint_expected_conditional_expression.ts
    │   │   │   │       ├── eslint_func_names.ts
    │   │   │   │       ├── eslint_func_style.ts
    │   │   │   │       ├── eslint_max_lines_per_function.ts
    │   │   │   │       ├── eslint_max_params.ts
    │   │   │   │       ├── eslint_max_statements.ts
    │   │   │   │       ├── eslint_no_case_declarations.ts
    │   │   │   │       ├── eslint_no_dupe_else_if.ts
    │   │   │   │       ├── eslint_no_duplicate_case.ts
    │   │   │   │       ├── eslint_no_duplicate_imports.ts
    │   │   │   │       ├── eslint_no_fallthrough.ts
    │   │   │   │       ├── eslint_no_inner_declarations.ts
    │   │   │   │       ├── eslint_no_multi_assign.ts
    │   │   │   │       ├── eslint_no_negated_condition.ts
    │   │   │   │       ├── eslint_no_negated_condition_2.ts
    │   │   │   │       ├── eslint_no_new.ts
    │   │   │   │       ├── eslint_no_sequences.ts
    │   │   │   │       ├── eslint_no_sparse_arrays.ts
    │   │   │   │       ├── eslint_no_sparse_arrays_2.ts
    │   │   │   │       ├── eslint_no_sparse_arrays_3.ts
    │   │   │   │       ├── eslint_require_await.ts
    │   │   │   │       ├── eslint_sort_keys.ts
    │   │   │   │       ├── eslint_unexpected_constant_condition_1.ts
    │   │   │   │       ├── eslint_unexpected_constant_condition_2.ts
    │   │   │   │       ├── eslint_unexpected_control_character.ts
    │   │   │   │       ├── eslint_unexpected_token.ts
    │   │   │   │       ├── eslint_unreachable_code.ts
    │   │   │   │       ├── inlineChatSimulator.ts
    │   │   │   │       ├── tsc_error_1015.ts
    │   │   │   │       ├── tsc_error_1128.ts
    │   │   │   │       ├── tsc_error_18047.ts
    │   │   │   │       ├── tsc_error_18048.ts
    │   │   │   │       ├── tsc_error_2300.ts
    │   │   │   │       ├── tsc_error_2304_1.ts
    │   │   │   │       ├── tsc_error_2304_2.ts
    │   │   │   │       ├── tsc_error_2304_3.ts
    │   │   │   │       ├── tsc_error_2307_can_not_find_module.ts
    │   │   │   │       ├── tsc_error_2322.ts
    │   │   │   │       ├── tsc_error_2339_1.ts
    │   │   │   │       ├── tsc_error_2339_2.ts
    │   │   │   │       ├── tsc_error_2339_3.ts
    │   │   │   │       ├── tsc_error_2339_4.ts
    │   │   │   │       ├── tsc_error_2341.ts
    │   │   │   │       ├── tsc_error_2345.ts
    │   │   │   │       ├── tsc_error_2355.ts
    │   │   │   │       ├── tsc_error_2391.ts
    │   │   │   │       ├── tsc_error_2454.ts
    │   │   │   │       ├── tsc_error_2532.ts
    │   │   │   │       ├── tsc_error_2554.ts
    │   │   │   │       ├── tsc_error_2695.ts
    │   │   │   │       ├── tsc_error_7006.ts
    │   │   │   │       ├── tsc_error_7053.ts
    │   │   │   │       ├── tsc_implicit_any.ts
    │   │   │   │       ├── tsc_error_2304/
    │   │   │   │       │   ├── file0.ts
    │   │   │   │       │   └── file1.ts
    │   │   │   │       ├── tsc_error_2345_2/
    │   │   │   │       │   ├── database_mock.ts
    │   │   │   │       │   ├── file0.ts
    │   │   │   │       │   └── file1.ts
    │   │   │   │       ├── tsc_error_2345_3/
    │   │   │   │       │   ├── database_mock.ts
    │   │   │   │       │   └── file0.ts
    │   │   │   │       ├── tsc_error_2420/
    │   │   │   │       │   ├── file0.ts
    │   │   │   │       │   └── file1.ts
    │   │   │   │       ├── tsc_error_2554/
    │   │   │   │       │   ├── database_mock.ts
    │   │   │   │       │   ├── file1.ts
    │   │   │   │       │   └── legacy_database.ts
    │   │   │   │       └── tsc_large_onigscanner/
    │   │   │   │           ├── tsc_error_2802.ts
    │   │   │   │           └── tsc_error_2802_tsconfig.json
    │   │   │   ├── gen/
    │   │   │   │   ├── 4080.ts
    │   │   │   │   ├── 4179.ts
    │   │   │   │   ├── 5439.py
    │   │   │   │   ├── CHANGELOG.md
    │   │   │   │   ├── commandCenterControl.ts
    │   │   │   │   ├── inlayHintsController.ts
    │   │   │   │   ├── keybindingParser.ts
    │   │   │   │   ├── modelLines.ts
    │   │   │   │   ├── strings.ts
    │   │   │   │   ├── 6234/
    │   │   │   │   │   └── top-packages.ts
    │   │   │   │   ├── 6554/
    │   │   │   │   │   └── update-vs-base.ps1
    │   │   │   │   └── variables/
    │   │   │   │       ├── example.ts
    │   │   │   │       └── output.ts
    │   │   │   ├── gen-json/
    │   │   │   │   └── test.json
    │   │   │   ├── gen-method-issue-3602/
    │   │   │   │   └── editor.ts
    │   │   │   ├── gen-nestjs-route-issue-3604/
    │   │   │   │   └── app.controller.ts
    │   │   │   ├── gen-python-palindrome/
    │   │   │   │   └── new.py
    │   │   │   ├── gen-top-level-function/
    │   │   │   │   ├── charCode.ts
    │   │   │   │   └── strings.ts
    │   │   │   ├── gen-twice-issue-3597/
    │   │   │   │   └── new.js
    │   │   │   ├── generate/
    │   │   │   │   ├── issue-6163/
    │   │   │   │   │   └── package.json
    │   │   │   │   ├── issue-6505/
    │   │   │   │   │   └── chatParserTypes.ts
    │   │   │   │   ├── issue-6788/
    │   │   │   │   │   └── terminalSuggestAddon.ts
    │   │   │   │   ├── issue-6956/
    │   │   │   │   │   └── .eslintrc.js
    │   │   │   │   ├── issue-7088/
    │   │   │   │   │   └── Microsoft.PowerShell_profile.ps1
    │   │   │   │   └── issue-7772/
    │   │   │   │       └── builds.ts
    │   │   │   ├── ghpr/
    │   │   │   │   └── commands.ts
    │   │   │   ├── inlineEdits/
    │   │   │   │   ├── 1-point.ts/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   ├── 2-helloworld-sample-remove-generic-parameter/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   ├── 5-devcontainers.github.io-part-1/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   ├── 6-vscode-remote-try-java-part-1/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   ├── 6-vscode-remote-try-java-part-2/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   ├── 8-cppIndividual-1-point.cpp/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   ├── 8-cppIndividual-2-collection-farewell/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   ├── 9-cppProject-add-header-expect-implementation/
    │   │   │   │   │   ├── recording.w.json
    │   │   │   │   │   └── scoredEdits.w.json
    │   │   │   │   └── 9-cppProject-add-implementation-expect-header/
    │   │   │   │       ├── recording.w.json
    │   │   │   │       └── scoredEdits.w.json
    │   │   │   ├── multiFile/
    │   │   │   │   ├── multiple-questions/
    │   │   │   │   │   └── package.json
    │   │   │   │   └── unicode-string-sequences/
    │   │   │   │       └── example.js
    │   │   │   ├── multiFileEdit/
    │   │   │   │   ├── asciiart/
    │   │   │   │   │   ├── package.json
    │   │   │   │   │   └── src/
    │   │   │   │   │       └── extension.ts
    │   │   │   │   ├── fibonacci/
    │   │   │   │   │   ├── bar.ts
    │   │   │   │   │   ├── foo.ts
    │   │   │   │   │   ├── version1.ts
    │   │   │   │   │   └── version2.ts
    │   │   │   │   ├── filepaths/
    │   │   │   │   │   ├── 1.ts
    │   │   │   │   │   ├── 2.ts
    │   │   │   │   │   └── 3.ts
    │   │   │   │   ├── fsprovider/
    │   │   │   │   │   ├── package.json
    │   │   │   │   │   └── src/
    │   │   │   │   │       ├── extension.ts
    │   │   │   │   │       └── fileSystemProvider.ts
    │   │   │   │   ├── issue-8098/
    │   │   │   │   │   ├── debugTelemetry.ts
    │   │   │   │   │   └── debugUtils.ts
    │   │   │   │   ├── issue-8131/
    │   │   │   │   │   └── extension.ts
    │   │   │   │   ├── issue-9130/
    │   │   │   │   │   └── empty.html
    │   │   │   │   ├── readme-generation/
    │   │   │   │   │   └── .devcontainer/
    │   │   │   │   │       ├── devcontainer.json
    │   │   │   │   │       └── post-install.sh
    │   │   │   │   └── two-edits/
    │   │   │   │       └── generate-command-ts.js
    │   │   │   ├── notebook/
    │   │   │   │   ├── datacleansing.ipynb
    │   │   │   │   ├── dataframe.ipynb
    │   │   │   │   ├── edit.ipynb
    │   │   │   │   ├── errors.ipynb
    │   │   │   │   ├── fibonacci.ipynb
    │   │   │   │   ├── filtered-mbpp.json
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── mbpp.ipynb
    │   │   │   │   ├── md.ipynb
    │   │   │   │   ├── model.ipynb
    │   │   │   │   ├── plot.ipynb
    │   │   │   │   ├── sales.ipynb
    │   │   │   │   ├── variables.ipynb
    │   │   │   │   ├── variablesruntime.ipynb
    │   │   │   │   ├── edits/
    │   │   │   │   │   ├── data_visualization.ipynb
    │   │   │   │   │   ├── data_visualization_2.ipynb
    │   │   │   │   │   ├── empty.ipynb
    │   │   │   │   │   ├── empty_julia.ipynb
    │   │   │   │   │   ├── github.ipynb
    │   │   │   │   │   ├── imports.ipynb
    │   │   │   │   │   ├── large_cell.ipynb
    │   │   │   │   │   ├── matplotlib_to_plotly.ipynb
    │   │   │   │   │   ├── multicells.ipynb
    │   │   │   │   │   ├── plot.ipynb
    │   │   │   │   │   ├── plotly_to_matplotlib.ipynb
    │   │   │   │   │   ├── point.ipynb
    │   │   │   │   │   ├── reorder.ipynb
    │   │   │   │   │   └── single.ipynb
    │   │   │   │   └── fixing/
    │   │   │   │       ├── fixing0.ipynb
    │   │   │   │       ├── fixing1.ipynb
    │   │   │   │       ├── fixing10.ipynb
    │   │   │   │       ├── fixing11.ipynb
    │   │   │   │       ├── fixing12.ipynb
    │   │   │   │       ├── fixing13.ipynb
    │   │   │   │       ├── fixing14.ipynb
    │   │   │   │       ├── fixing15.ipynb
    │   │   │   │       ├── fixing16.ipynb
    │   │   │   │       ├── fixing17.ipynb
    │   │   │   │       ├── fixing18.ipynb
    │   │   │   │       ├── fixing2.ipynb
    │   │   │   │       ├── fixing3.ipynb
    │   │   │   │       ├── fixing4.ipynb
    │   │   │   │       ├── fixing5.ipynb
    │   │   │   │       ├── fixing6.ipynb
    │   │   │   │       ├── fixing7.ipynb
    │   │   │   │       ├── fixing8.ipynb
    │   │   │   │       └── fixing9.ipynb
    │   │   │   ├── review/
    │   │   │   │   ├── bank-account-1.py
    │   │   │   │   ├── bank-account-2.py
    │   │   │   │   ├── binary-search-1.js
    │   │   │   │   ├── binary-search-2.js
    │   │   │   │   ├── nested-services-1.ts
    │   │   │   │   └── nested-services-2.ts
    │   │   │   ├── tests/
    │   │   │   │   ├── another-unit-test/
    │   │   │   │   │   ├── charCode.ts
    │   │   │   │   │   ├── strings.test.ts
    │   │   │   │   │   └── strings.ts
    │   │   │   │   ├── cs-newtest/
    │   │   │   │   │   └── src/
    │   │   │   │   │       └── services/
    │   │   │   │   │           └── Model.cs
    │   │   │   │   ├── for-method-issue-3699/
    │   │   │   │   │   └── foldingRanges.ts
    │   │   │   │   ├── generate-for-selection/
    │   │   │   │   │   └── base/
    │   │   │   │   │       ├── common/
    │   │   │   │   │       │   └── map.ts
    │   │   │   │   │       └── test/
    │   │   │   │   │           └── common/
    │   │   │   │   │               └── map.test.ts
    │   │   │   │   ├── generate-jest/
    │   │   │   │   │   └── some/
    │   │   │   │   │       ├── app.js
    │   │   │   │   │       ├── sum.js
    │   │   │   │   │       └── sum.test.js
    │   │   │   │   ├── in-suite-issue-3701/
    │   │   │   │   │   └── notebookFolding.test.ts
    │   │   │   │   ├── panel/
    │   │   │   │   │   └── tsq/
    │   │   │   │   │       ├── foo.ts
    │   │   │   │   │       └── workspaceState.state.json
    │   │   │   │   └── py-extra-nested/
    │   │   │   │       └── focus_module/
    │   │   │   │           └── data_controllers/
    │   │   │   │               ├── __init__.py
    │   │   │   │               └── grocery.py
    │   │   │   └── vscode/
    │   │   │       ├── codeEditorWidget.ts
    │   │   │       ├── editorGroupWatermark.ts
    │   │   │       ├── extHost.api.impl.ts
    │   │   │       ├── vscode.proposed.notebookDocumentWillSave.d.ts
    │   │   │       └── src/
    │   │   │           └── vs/
    │   │   │               └── workbench/
    │   │   │                   └── api/
    │   │   │                       └── common/
    │   │   │                           └── extHostChat.ts
    │   │   ├── inlineEdit/
    │   │   │   ├── fileLoading.ts
    │   │   │   ├── inlineEdit.stest.ts
    │   │   │   ├── inlineEditScoringService.ts
    │   │   │   ├── inlineEditTester.ts
    │   │   │   └── spyingServerPoweredNesProvider.ts
    │   │   ├── language/
    │   │   │   ├── lsifLanguageFeatureService.ts
    │   │   │   ├── simulationLanguageFeatureService.ts
    │   │   │   └── tsServerClient.ts
    │   │   ├── shared/
    │   │   │   ├── grepFilter.ts
    │   │   │   └── sharedTypes.ts
    │   │   ├── slash-test/
    │   │   ├── tools/
    │   │   │   ├── README.md
    │   │   │   └── toolcall.stest.ts
    │   │   └── workbench/
    │   │       ├── initArgs.ts
    │   │       ├── simulationWorkbench.tsx
    │   │       ├── tsconfig.json
    │   │       ├── components/
    │   │       │   ├── amlModeToolbar.tsx
    │   │       │   ├── amlPicker.tsx
    │   │       │   ├── app.tsx
    │   │       │   ├── baselineJSONPicker.tsx
    │   │       │   ├── compareAgainstRunPicker.tsx
    │   │       │   ├── contextMenu.tsx
    │   │       │   ├── currentRunPicker.tsx
    │   │       │   ├── diffEditor.tsx
    │   │       │   ├── draggableBottomBorder.tsx
    │   │       │   ├── editor.tsx
    │   │       │   ├── errorComparison.tsx
    │   │       │   ├── filterUtils.tsx
    │   │       │   ├── localModeToolbar.tsx
    │   │       │   ├── monacoUtils.ts
    │   │       │   ├── openInVSCode.tsx
    │   │       │   ├── output.tsx
    │   │       │   ├── pickerStyle.ts
    │   │       │   ├── request.tsx
    │   │       │   ├── scorecard.tsx
    │   │       │   ├── scorecardByLanguage.tsx
    │   │       │   ├── testCaseSummary.tsx
    │   │       │   ├── testFilterer.tsx
    │   │       │   ├── testList.tsx
    │   │       │   ├── testRun.tsx
    │   │       │   ├── testView.tsx
    │   │       │   └── toolbar.tsx
    │   │       ├── stores/
    │   │       │   ├── amlResults.ts
    │   │       │   ├── amlSimulations.ts
    │   │       │   ├── baselineJSONProvider.ts
    │   │       │   ├── detectedTests.ts
    │   │       │   ├── resolvedAMLRun.ts
    │   │       │   ├── resolvedSimulationRun.ts
    │   │       │   ├── runnerOptions.ts
    │   │       │   ├── runnerTestStatus.ts
    │   │       │   ├── simulationBaseline.ts
    │   │       │   ├── simulationRunner.ts
    │   │       │   ├── simulationStorage.ts
    │   │       │   ├── simulationTestsProvider.ts
    │   │       │   ├── simulationWorkspaceState.ts
    │   │       │   ├── storage.ts
    │   │       │   ├── testRun.ts
    │   │       │   └── testSource.ts
    │   │       └── utils/
    │   │           ├── simulationExec.ts
    │   │           └── utils.ts
    │   └── simulationExtension/
    ├── .devcontainer/
    ├── .eslintplugin/
    ├── .github/
    │   ├── CODEOWNERS
    │   ├── commands.json
    │   ├── copilot-instructions.md
    │   ├── dependabot.yml
    │   ├── ISSUE_TEMPLATE/
    │   │   └── config.yml
    │   └── workflows/
    │       ├── ensure-node-modules-cache.yml
    │       └── pr.yml
    └── .husky/
```

---

## Directory Responsibilities

- **assets/**: Contains static resources such as icons (`copilot.png`), fonts (`copilot.woff`), and SVGs used by the extension UI.
- **build/**: Build scripts and CI/CD configuration files (YAML for GitHub Actions, shell scripts for setup, cache management).
- **docs/**: Project documentation and images for guides, tools, and UI documentation.
- **script/**: Utility scripts for development, setup, build, simulation, and test generation. Subfolders organize scripts by purpose (build, electron, setup, test).
- **src/**: Main source code for the extension.
  - **extension/**: VS Code extension entry points, chat UI, inline chat, authentication, tools, and integration modules.
  - **platform/**: Core business logic and abstractions for chat, authentication, search, editing, and more. Designed for cross-platform use.
  - **util/**: Common utility functions and helpers used throughout the codebase.
- **test/**: Comprehensive test suite.
  - **base/**: Test infrastructure, caching, and helpers.
  - **codeMapper/**, **e2e/**, **inline/**, **intent/**, **outcome/**, **prompts/**, **scenarios/**, **simulation/**, **simulationExtension/**: Organized by test type and feature.
- **[root config files]**: TypeScript, ESLint, Prettier, and other configuration files for building, linting, and formatting.

---

## Key Files

- `package.json`: Project manifest, dependencies, and npm scripts.
- `tsconfig.json`, `tsconfig.base.json`, `tsconfig.worker.json`: TypeScript configuration for different build targets.
- `.esbuild.ts`: Build configuration for esbuild.
- `eslint.config.mjs`: Linting rules and configuration.
- `vite.config.ts`: Vite build configuration.
- `README.md`: User-facing documentation (do not overwrite).

---

## Development Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Build the extension:**
   ```sh
   npm run build
   ```

3. **Run tests:**
   ```sh
   npm test
   ```

4. **Development scripts:**
   See `package.json` for scripts like `build`, `watch`, `test:unit`, `test:extension`, `lint`, and more.

---

## Testing & Development Workflow

- **Test-Driven Development (TDD):**
  Write and maintain tests for all new features and bug fixes. Use the comprehensive test suite in `test/` to ensure code quality.

- **Modulink Approach:**
  Develop features in modular, isolated branches. Each issue should have its own branch. Use the `gh` CLI to document progress and maintain traceability. Commit at checkpoints.

- **Branching & Documentation:**
  - Create a new branch for each issue/feature.
  - Use clear, descriptive commit messages.
  - Document changes and rationale using GitHub issues and PRs.

---

## Technical Architecture

- **Extension Layer (`src/extension/`):**
  Handles VS Code-specific integration, UI, commands, and extension activation.

- **Platform Layer (`src/platform/`):**
  Contains core logic, abstractions, and business rules, decoupled from VS Code APIs.

- **Utilities (`src/util/`):**
  Shared helpers and utility functions.

- **Testing:**
  Organized by feature and type, supporting TDD and robust validation.

---

## Contributing

- Follow TDD and Modulink practices.
- Keep code modular and well-documented.
- Use the provided scripts for building, testing, and linting.
- See `CONTRIBUTING.md` for more details.

---

## Additional Resources

- [README.md](README.md): User-facing documentation
- [CONTRIBUTING.md](CONTRIBUTING.md): Contribution guidelines
- [docs/](docs/): Additional documentation and guides
