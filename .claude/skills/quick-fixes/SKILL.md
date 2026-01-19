---
name: quick-fixes
description: A process for making a quick single feature fix or improvement and deploying it to the production environment. Use anytime the user asks to for any improvements or fixes.
---

Steps to deploy a quick improvement:

1. **Make sure you understand the issue**

- If uncertain, talk to the user to understand the issue and what they want to achieve.

2. **Find a solution**

- What's the best way to make the change?

3. **Make the change**

- Make the change in the codebase.

4. **Update storybook**

- Update storybook if necessary

5. **Test the change**

- If you have made testable changes that are available in storybook, test them with agent-browser

6. **Update docs**

- Update llm documentation if necessary
- Update human docs if necessary

7. **Prep for deployment**

- Update CHANGELOG.md if necessary
- Bump the version in package.json

8. **Create a pull request**

- Create a pull request to the main branch
- Assign the pull request to the user
- Give a direct link to the pull request
