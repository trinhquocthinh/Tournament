# Changelog Guide

## How It Works

The `update-changelog.cjs` script automatically extracts changes from git commit messages and organizes them into the appropriate changelog sections.

## Commit Message Prefixes

Use these prefixes in your commit messages to automatically categorize changes:

### Added (New Features)
- `feat:` - New feature
- `feature:` - New feature
- `add:` - Add something
- `added:` - Added something

**Examples:**
```bash
git commit -m "feat: add user authentication"
git commit -m "add: new tournament registration form"
```

### Fixed (Bug Fixes)
- `fix:` - Bug fix
- `fixed:` - Fixed bug
- `bugfix:` - Bug fix

**Examples:**
```bash
git commit -m "fix: resolve navigation menu not closing on mobile"
git commit -m "bugfix: tournament date display issue"
```

### Changed (Updates/Improvements)
- `change:` - Change something
- `changed:` - Changed something
- `update:` - Update something
- `updated:` - Updated something
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `style:` - Code style changes

**Examples:**
```bash
git commit -m "update: improve hero section layout"
git commit -m "refactor: optimize image loading"
git commit -m "perf: enhance scroll performance"
```

### Removed (Deletions)
- `remove:` - Remove something
- `removed:` - Removed something
- `delete:` - Delete something
- `deleted:` - Deleted something

**Examples:**
```bash
git commit -m "remove: deprecated API endpoints"
git commit -m "delete: unused CSS files"
```

### Deprecated (To be Removed)
- `deprecate:` - Deprecate feature
- `deprecated:` - Deprecated feature

**Examples:**
```bash
git commit -m "deprecated: old tournament API v1"
```

### Security (Security Fixes)
- `security:` - Security fix
- `sec:` - Security fix

**Examples:**
```bash
git commit -m "security: patch XSS vulnerability"
git commit -m "sec: update dependencies with security issues"
```

## Automatic Detection

If you don't use a prefix, the script will try to detect the category from keywords in your commit message:

- Contains "add", "new", "implement", "create" → **Added**
- Contains "fix", "resolve", "patch", "bug" → **Fixed**
- Contains "update", "change", "modify", "improve" → **Changed**
- Contains "remove", "delete", "drop" → **Removed**
- Contains "deprecate" → **Deprecated**
- Contains "security", "vulnerability", "cve" → **Security**

## Manual Entries

You can also manually add entries to the `[Unreleased]` section in `CHANGELOG.md`:

```markdown
## [Unreleased]

### Added
- New feature X
- New component Y

### Fixed
- Bug with navigation
```

## Release Process

When you run the release script:

```bash
./scripts/release.sh patch  # or minor, major
```

The script will:
1. Get all commits since the last tag
2. Categorize them based on prefixes/keywords
3. Merge with manual entries in `[Unreleased]`
4. Create a new version section with all changes
5. Reset the `[Unreleased]` section

## Best Practices

1. **Use consistent prefixes** for better categorization
2. **Write clear commit messages** that explain what changed
3. **Add manual entries** to `[Unreleased]` for important changes
4. **Review the changelog** before releasing

## Example Workflow

```bash
# Make changes and commit with prefixes
git commit -m "feat: add tournament bracket view"
git commit -m "fix: resolve score calculation bug"
git commit -m "update: improve mobile responsiveness"

# Run release (this auto-generates changelog)
./scripts/release.sh patch

# The changelog will be updated automatically!
```

## Skipped Commits

These commits are automatically skipped:
- Version bumps: `chore:`, `release:`, `version:`, `bump:`
- Merge commits: `Merge ...`

## Result

The changelog will look like this:

```markdown
## [1.0.2] - 2025-10-09

### Added
- Add tournament bracket view

### Changed
- Improve mobile responsiveness

### Fixed
- Resolve score calculation bug
```
