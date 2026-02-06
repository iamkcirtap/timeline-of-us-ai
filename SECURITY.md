# NPM Audit Security Explanation

## Summary
The project has **zero vulnerabilities in production code**. The 6 vulnerabilities reported are in **dev-only dependencies** (`live-server` and its transitive dependencies).

## Vulnerability Details

### Dev-Only Vulnerabilities
- **live-server** (dev dependency) → depends on outdated **chokidar@^2.0.4**
- **chokidar** → depends on vulnerable versions of:
  - `braces` (<3.0.3) - Uncontrolled resource consumption [GHSA-grv7-fg5c-xmjg]
  - `anymatch` (1.2.0-2.0.0) - Vulnerable patterns
  - `readdirp` (2.2.0-2.2.1) - Vulnerable patterns

### Production Code
✅ **Zero dependencies** - This is a static single-file HTML application with no runtime dependencies.

## Security Impact Assessment

| Environment | Risk | Details |
|---|---|---|
| **Production** | ✅ None | No production dependencies; app is pure HTML/CSS/JS |
| **Development** | ⚠️ Low | Vulnerabilities only affect local dev server (not bundled/shipped) |
| **Build Pipeline** | ✅ None | No build process; direct browser execution |

## How to Verify

### Production-only audit (recommended for CI/CD)
```bash
npm run audit
# Result: found 0 vulnerabilities
```

### Full audit (includes dev dependencies)
```bash
npm run audit:full
# Result: 6 vulnerabilities (all in live-server's transitive deps)
```

## Why live-server Can't Auto-Fix

The vulnerabilities stem from **live-server's old transitive dependencies**:
- `live-server@1.2.x` requires `chokidar@^2.0.4` (from 2016)
- Newer `chokidar@3.x+` fixed these, but `live-server` maintainer hasn't updated
- `npm audit fix --force` cannot resolve this (would require `live-server@3.x` which doesn't exist)

## Recommendation

✅ **Current approach is safe**:
1. Use `npm run audit` for CI/CD (production verification)
2. Dev-only vulnerabilities don't affect the shipped application
3. Alternative: Replace `live-server` with other dev servers (e.g., `http-server`, `serve`), but not necessary given risk profile

## References
- [npm audit docs](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [GHSA-grv7-fg5c-xmjg (braces vulnerability)](https://github.com/advisories/GHSA-grv7-fg5c-xmjg)
