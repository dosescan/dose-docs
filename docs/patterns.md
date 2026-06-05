# Security Patterns

DOSE uses two finding levels: blocking patterns and warning patterns. Blocking patterns stop the workflow. Warning patterns ask for review without failing the command.

## Blocking Patterns

Blocking patterns represent high-risk behavior that can lead to data loss, code execution, credential leakage, persistence, or exfiltration.

| Category | Examples |
| --- | --- |
| Dangerous system access | shell execution, OS command execution, process spawning, background execution |
| Dynamic runtime execution | `eval`, `exec`, `compile`, `new Function`, VM sandbox execution |
| Reflection and dynamic loading | reflection execution, dynamic `require`, dynamic `import` |
| Unsafe deserialization | `pickle.loads`, `yaml.load`, `Marshal.load`, `BinaryFormatter`, `unserialize` |
| Privilege and permissions | `sudo`, `setuid`, `chmod +s`, `chmod 777` |
| File system risk | recursive deletion, system path writes, destructive file APIs |
| Network abuse | suspicious `curl` or `wget`, DNS tooling, raw sockets, reverse shell indicators |
| SSRF signals | user-controlled `fetch`, `axios`, or `requests` calls |
| Secrets exposure | AWS keys, JWTs, bearer tokens, private keys, Slack tokens, GitHub tokens, Google API keys, Stripe live keys |
| Obfuscation | long base64 payloads, hex shellcode, encoded execution, unicode escapes |
| Persistence | cron, scheduled tasks, launch agents, system services |
| Injection | SQL string concatenation and command chaining into network or shell tools |

## Warning Patterns

Warning patterns are suspicious or risky, but may be intentional in normal development.

| Category | Examples |
| --- | --- |
| Debug output | `console.log`, `print`, `debugger`, verbose logging |
| Code quality | TODO markers, empty catch blocks, broad exception handlers, long obfuscated lines |
| Weak security practices | weak crypto, weak random values, disabled SSL verification, wildcard permissions |
| Dependency risk | unpinned npm versions and known deprecated package names |
| Sensitive information | emails, phone numbers, commented secrets, test credentials |
| Local endpoints | localhost and private IP addresses |
| Resource risk | unsafe buffers, excessive retry loops, large allocations |
| Suspicious code | unicode control characters, encoded blobs, sensitive environment access, minified suspicious code |

## Dependency Checks

When DOSE scans `package.json`, it warns about unpinned npm dependency ranges such as:

```json
{
  "dependencies": {
    "example": "^1.2.3"
  }
}
```

Pinning dependencies can make builds and audits more reproducible. Whether that is required depends on your repository policy.

## How to Interpret Results

| Result | Recommended action |
| --- | --- |
| `BLOCK` | Fix immediately or add a carefully reviewed `dose-ignore` marker for a known false positive. |
| `WARN` | Review the code path and decide whether the risk is acceptable. |
| No findings | Continue, but remember that pattern scanning is a guardrail rather than a complete security audit. |

Pattern scanning is not a replacement for threat modeling, dependency scanning, or human review. It is a fast guardrail that catches common dangerous operations before they become part of the repository.
