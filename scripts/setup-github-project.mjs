#!/usr/bin/env node

import { Octokit } from '@octokit/rest'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

if (!GITHUB_TOKEN) {
  console.error('❌ GITHUB_TOKEN environment variable is required')
  console.error('   Get your token from: https://github.com/settings/tokens')
  console.error('   Required scopes: repo, project, issues, pull_requests')
  process.exit(1)
}

const [, , repo, ...flags] = process.argv
const isDryRun = flags.includes('--dry-run')

if (!repo) {
  console.error('❌ Repository name is required')
  console.error('   Usage: node setup-github-project.mjs <owner/repo> [--dry-run]')
  process.exit(1)
}

const [owner, repoName] = repo.split('/')
if (!owner || !repoName) {
  console.error('❌ Invalid repository format. Use: owner/repo')
  process.exit(1)
}

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
})

console.log(`🚀 Setting up GitHub project for ${repo}`)
if (isDryRun) {
  console.log('🔍 DRY RUN MODE - No changes will be made')
}
console.log('')

async function setupRepository() {
  try {
    // Check if repository exists
    const { data: repoData } = await octokit.repos.get({ owner, repo: repoName })
    console.log(`✅ Repository found: ${repoData.full_name}`)
    console.log(`   Description: ${repoData.description || 'No description'}`)
    console.log(`   Visibility: ${repoData.private ? 'Private' : 'Public'}`)
    console.log('')
  } catch (error) {
    if (error.status === 404) {
      console.error(`❌ Repository ${repo} not found`)
      console.error('   Make sure the repository exists and you have access to it')
      process.exit(1)
    }
    throw error
  }
}

async function setupIssues() {
  console.log('📝 Setting up issues...')

  const issues = [
    {
      title: '🎨 Design System Documentation',
      body: `## Overview
Create comprehensive documentation for the Kindly Roe design system.

## Tasks
- [ ] Document color palette usage guidelines
- [ ] Create component usage examples
- [ ] Document typography hierarchy
- [ ] Add spacing and layout guidelines
- [ ] Create accessibility guidelines

## Acceptance Criteria
- [ ] All design tokens are documented
- [ ] Component examples are provided
- [ ] Guidelines are clear and actionable
- [ ] Documentation is accessible to developers`,
      labels: ['documentation', 'design-system', 'enhancement'],
    },
    {
      title: '🧪 Add Testing Framework',
      body: `## Overview
Implement a comprehensive testing framework for the Kindly Roe website.

## Tasks
- [ ] Set up Jest and React Testing Library
- [ ] Add unit tests for components
- [ ] Add integration tests for user flows
- [ ] Set up visual regression testing
- [ ] Add accessibility testing

## Acceptance Criteria
- [ ] Test coverage > 80%
- [ ] All critical user flows are tested
- [ ] Tests run in CI/CD pipeline
- [ ] Accessibility tests are included`,
      labels: ['testing', 'quality', 'enhancement'],
    },
    {
      title: '📊 Add Analytics and Monitoring',
      body: `## Overview
Implement analytics and monitoring to track website performance and user engagement.

## Tasks
- [ ] Set up Google Analytics or similar
- [ ] Add performance monitoring
- [ ] Implement error tracking
- [ ] Add user behavior analytics
- [ ] Set up uptime monitoring

## Acceptance Criteria
- [ ] Analytics are privacy-compliant
- [ ] Performance metrics are tracked
- [ ] Error tracking is functional
- [ ] Dashboard is accessible to team`,
      labels: ['analytics', 'monitoring', 'enhancement'],
    },
    {
      title: '🔧 Content Management System',
      body: `## Overview
Implement a CMS to make content updates easier for non-technical team members.

## Tasks
- [ ] Research headless CMS options
- [ ] Set up content management
- [ ] Create content editing interface
- [ ] Migrate static content to CMS
- [ ] Train team on CMS usage

## Acceptance Criteria
- [ ] Content can be updated without code changes
- [ ] CMS is user-friendly
- [ ] Content is versioned
- [ ] Team is trained on usage`,
      labels: ['cms', 'content', 'enhancement'],
    },
    {
      title: '🚀 Production Deployment Setup',
      body: `## Overview
Set up production deployment pipeline and hosting infrastructure.

## Tasks
- [ ] Choose hosting platform (Vercel, Netlify, etc.)
- [ ] Set up CI/CD pipeline
- [ ] Configure custom domain
- [ ] Set up SSL certificates
- [ ] Configure environment variables

## Acceptance Criteria
- [ ] Automated deployment from main branch
- [ ] Custom domain is configured
- [ ] SSL is properly set up
- [ ] Environment is production-ready`,
      labels: ['deployment', 'infrastructure', 'priority'],
    },
    {
      title: '♿ Accessibility Audit and Improvements',
      body: `## Overview
Conduct comprehensive accessibility audit and implement improvements.

## Tasks
- [ ] Run automated accessibility tests
- [ ] Conduct manual accessibility review
- [ ] Test with screen readers
- [ ] Improve keyboard navigation
- [ ] Add ARIA labels where needed

## Acceptance Criteria
- [ ] WCAG 2.1 AA compliance
- [ ] Screen reader compatibility
- [ ] Keyboard navigation works
- [ ] Color contrast meets standards`,
      labels: ['accessibility', 'a11y', 'priority'],
    },
    {
      title: '📱 Mobile Optimization',
      body: `## Overview
Optimize the website for mobile devices and improve mobile user experience.

## Tasks
- [ ] Test on various mobile devices
- [ ] Optimize touch interactions
- [ ] Improve mobile navigation
- [ ] Optimize images for mobile
- [ ] Test mobile performance

## Acceptance Criteria
- [ ] Works well on all mobile devices
- [ ] Touch interactions are smooth
- [ ] Mobile performance is optimized
- [ ] Navigation is mobile-friendly`,
      labels: ['mobile', 'responsive', 'optimization'],
    },
    {
      title: '🔒 Security Audit and Hardening',
      body: `## Overview
Conduct security audit and implement security best practices.

## Tasks
- [ ] Run security vulnerability scan
- [ ] Review dependencies for vulnerabilities
- [ ] Implement security headers
- [ ] Add rate limiting
- [ ] Review data handling practices

## Acceptance Criteria
- [ ] No high/critical vulnerabilities
- [ ] Security headers are configured
- [ ] Dependencies are up to date
- [ ] Security best practices are followed`,
      labels: ['security', 'audit', 'priority'],
    },
  ]

  for (const issue of issues) {
    if (isDryRun) {
      console.log(`  🔍 Would create issue: "${issue.title}"`)
      console.log(`     Labels: ${issue.labels.join(', ')}`)
    } else {
      try {
        const { data } = await octokit.issues.create({
          owner,
          repo: repoName,
          title: issue.title,
          body: issue.body,
          labels: issue.labels,
        })
        console.log(`  ✅ Created issue: "${issue.title}" (#${data.number})`)
      } catch (error) {
        console.error(`  ❌ Failed to create issue: "${issue.title}"`)
        console.error(`     Error: ${error.message}`)
      }
    }
  }
  console.log('')
}

async function setupProject() {
  console.log('📋 Setting up GitHub project...')

  const projectData = {
    name: 'Kindly Roe Website Development',
    body: 'Project management for the Kindly Roe website development and maintenance.',
    state: 'open',
  }

  if (isDryRun) {
    console.log(`  🔍 Would create project: "${projectData.name}"`)
  } else {
    try {
      const { data: project } = await octokit.projects.createForRepo({
        owner,
        repo: repoName,
        name: projectData.name,
        body: projectData.body,
      })
      console.log(`  ✅ Created project: "${projectData.name}" (ID: ${project.id})`)

      // Add project columns
      const columns = ['To Do', 'In Progress', 'In Review', 'Done']
      for (const columnName of columns) {
        await octokit.projects.createColumn({
          project_id: project.id,
          name: columnName,
        })
        console.log(`    ✅ Added column: "${columnName}"`)
      }
    } catch (error) {
      console.error(`  ❌ Failed to create project: ${error.message}`)
    }
  }
  console.log('')
}

async function setupLabels() {
  console.log('🏷️  Setting up labels...')

  const labels = [
    { name: 'bug', color: 'd73a4a', description: "Something isn't working" },
    { name: 'enhancement', color: 'a2eeef', description: 'New feature or request' },
    {
      name: 'documentation',
      color: '0075ca',
      description: 'Improvements or additions to documentation',
    },
    { name: 'design-system', color: '7057ff', description: 'Design system related' },
    { name: 'testing', color: 'f9d0c4', description: 'Testing related' },
    { name: 'accessibility', color: '0e8a16', description: 'Accessibility improvements' },
    { name: 'a11y', color: '0e8a16', description: 'Accessibility' },
    { name: 'mobile', color: 'fbca04', description: 'Mobile related' },
    { name: 'responsive', color: 'fbca04', description: 'Responsive design' },
    { name: 'performance', color: 'ff6b6b', description: 'Performance improvements' },
    { name: 'security', color: 'ff0000', description: 'Security related' },
    { name: 'deployment', color: '1d76db', description: 'Deployment related' },
    { name: 'priority', color: 'ff0000', description: 'High priority' },
    { name: 'good first issue', color: '7057ff', description: 'Good for newcomers' },
    { name: 'help wanted', color: '008672', description: 'Extra attention is needed' },
  ]

  for (const label of labels) {
    if (isDryRun) {
      console.log(`  🔍 Would create label: "${label.name}" (${label.color})`)
    } else {
      try {
        await octokit.issues.createLabel({
          owner,
          repo: repoName,
          name: label.name,
          color: label.color,
          description: label.description,
        })
        console.log(`  ✅ Created label: "${label.name}"`)
      } catch (error) {
        if (error.status === 422) {
          console.log(`  ℹ️  Label "${label.name}" already exists`)
        } else {
          console.error(`  ❌ Failed to create label: "${label.name}"`)
        }
      }
    }
  }
  console.log('')
}

async function setupTemplates() {
  console.log('📄 Setting up issue and PR templates...')

  const issueTemplate = `---
name: Bug report
about: Create a report to help us improve
title: ''
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
`

  const prTemplate = `## Description
Brief description of the changes in this PR.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] I have tested this change locally
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] Any dependent changes have been merged and published

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional information that reviewers should know.
`

  if (isDryRun) {
    console.log('  🔍 Would create issue template')
    console.log('  🔍 Would create PR template')
  } else {
    try {
      // Create .github directory structure
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo: repoName,
        path: '.github/ISSUE_TEMPLATE/bug_report.md',
        message: 'Add bug report template',
        content: Buffer.from(issueTemplate).toString('base64'),
      })
      console.log('  ✅ Created issue template')

      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo: repoName,
        path: '.github/pull_request_template.md',
        message: 'Add PR template',
        content: Buffer.from(prTemplate).toString('base64'),
      })
      console.log('  ✅ Created PR template')
    } catch (error) {
      console.error(`  ❌ Failed to create templates: ${error.message}`)
    }
  }
  console.log('')
}

async function main() {
  try {
    await setupRepository()
    await setupLabels()
    await setupIssues()
    await setupProject()
    await setupTemplates()

    console.log('🎉 GitHub project setup complete!')
    console.log('')
    console.log('Next steps:')
    console.log('1. Review the created issues and prioritize them')
    console.log('2. Assign team members to issues')
    console.log('3. Set up branch protection rules')
    console.log('4. Configure CI/CD pipeline')
    console.log('5. Set up project board automation')
  } catch (error) {
    console.error('❌ Setup failed:', error.message)
    process.exit(1)
  }
}

main()
