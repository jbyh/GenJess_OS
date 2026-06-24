# GenJess-OS Architecture

Current slice:

```text
Slack command -> slack-ingress -> orchestrator -> job-ledger -> Slack status reply
```

Test command:

```text
/run-outbound-batch vertical=coffee city=Houston count=3 mode=research-only
```

Packages added:

- `apps/slack-ingress`
- `apps/orchestrator`
- `runtime/job-ledger`
- `integrations/slack`
- `workflows/slack-to-outbound-batch.yaml`

Local checks:

```bash
node --test apps/slack-ingress/test/*.test.js
node --test runtime/job-ledger/test/*.test.js
node --test apps/orchestrator/test/*.test.js
```
