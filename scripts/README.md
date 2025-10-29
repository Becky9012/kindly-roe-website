# GitHub Project Setup Scripts

This directory contains scripts to help set up and manage the Kindly Roe GitHub project.

## Setup GitHub Project

The `setup-github-project.mjs` script automates the creation of:
- GitHub issues for project tasks
- Project board with columns
- Issue and PR templates
- Repository labels
- Project management structure

### Prerequisites

1. **GitHub Token**: You need a personal access token with the following scopes:
   - `repo` - Full control of private repositories
   - `project` - Full control of user projects
   - `issues` - Read and write access to issues
   - `pull_requests` - Read and write access to pull requests

2. **Get your token**:
   - Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
   - Click "Generate new token (classic)"
   - Select the required scopes
   - Copy the token

### Usage

#### Dry Run (Recommended First)
```bash
# Test what the script will do without making changes
GITHUB_TOKEN=your_token_here npm run setup-github:dry-run Becky9012/kindly-roe-website
```

#### Run the Setup
```bash
# Actually create the issues, project, and templates
GITHUB_TOKEN=your_token_here npm run setup-github Becky9012/kindly-roe-website
```

#### Alternative Direct Usage
```bash
# Dry run
node scripts/setup-github-project.mjs Becky9012/kindly-roe-website --dry-run

# Actual setup
GITHUB_TOKEN=your_token_here node scripts/setup-github-project.mjs Becky9012/kindly-roe-website
```

### What Gets Created

#### Issues
The script creates 8 pre-defined issues covering:
- 🎨 Design System Documentation
- 🧪 Add Testing Framework
- 📊 Add Analytics and Monitoring
- 🔧 Content Management System
- 🚀 Production Deployment Setup
- ♿ Accessibility Audit and Improvements
- 📱 Mobile Optimization
- 🔒 Security Audit and Hardening

#### Project Board
- Creates a project board with columns: To Do, In Progress, In Review, Done
- Links to the repository for easy management

#### Labels
Creates a comprehensive set of labels:
- `bug`, `enhancement`, `documentation`
- `design-system`, `testing`, `accessibility`
- `mobile`, `responsive`, `performance`
- `security`, `deployment`, `priority`
- `good first issue`, `help wanted`

#### Templates
- Bug report template
- Pull request template

### Troubleshooting

#### "Repository not found"
- Make sure the repository `Becky9012/kindly-roe-website` exists
- Verify you have access to the repository
- Check the repository name format: `owner/repo`

#### "GITHUB_TOKEN environment variable is required"
- Make sure you've set the `GITHUB_TOKEN` environment variable
- Verify the token has the required scopes
- Check that the token is valid and not expired

#### "Failed to create issue"
- Check your token permissions
- Verify the repository exists and you have write access
- Some issues might already exist (this is normal)

### Security Notes

- Never commit your GitHub token to the repository
- Use environment variables or secure credential storage
- Consider using GitHub Apps for production use
- Rotate tokens regularly

### Customization

You can modify the script to:
- Add more issues
- Change the project structure
- Modify labels and colors
- Update templates
- Add more automation

The script is well-documented and easy to customize for your specific needs.
