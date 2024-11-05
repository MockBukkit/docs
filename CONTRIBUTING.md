# Contributing to the Mockbukkit Documentation

Thank you for your interest in contributing to our documentation!
We welcome contributions from the community to help improve and expand our documentation.

## Getting Started

### Prerequisites

Before you start contributing, ensure you have the following prerequisites installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [pnpm](https://pnpm.io/)

### Setting Up the Development Environment

1. **Fork the Repository**: Start by forking the documentation repository to your own GitHub account.

2. **Clone the Repository**: Next, clone the forked repository to your local machine.

   ```bash
   git clone https://github.com/your-username/docs.git
   ```

3. **Install Dependencies**: Install the necessary dependencies for the documentation project.

   ```bash
   cd docs
   pnpm install
   ```

4. **Start the Development Server**: Start the Vitepress development server to preview your changes.

   ```bash
   pnpm run docs:dev
   ```

   The development server will start, and you can access the documentation site at `http://localhost:5173`.

## Making Changes

1. **Create a New Branch**: Create a new branch for your changes.

   ```bash
   git checkout -b my-feature-branch
   ```

2. **Update the Documentation**: Make your changes to the documentation. This could include:

   - Adding new pages
   - Updating existing content
   - Fixing typos or grammatical errors
   - Improving the organization or structure of the documentation
   - Adding new translations

3. **Preview Your Changes**: Use the Vitepress development server to preview your changes and ensure they look as expected.

4. **Commit and Push Your Changes**: Once you're satisfied with your changes,
   commit them and push the branch to your forked repository.

   ```bash
   git add .
   git commit -m "Add a new guide for setting up the development environment"
   git push origin my-feature-branch
   ```

## Submitting a Pull Request

1. **Create a Pull Request**: Go to the original repository on GitHub and create a new pull request,
   comparing your feature branch with the main branch of the original repository.

2. **Describe Your Changes**: In the pull request description,
   provide a clear and concise explanation of the changes you've made and why they are valuable to the project.

3. **Address Feedback**: The maintainers may request changes or provide feedback on your pull request.
   Please be responsive to this feedback and make any necessary updates to your branch.

## Coding Style and Guidelines

- Follow the existing coding style and formatting used in the documentation repository.
- Ensure your changes are consistent with the overall tone and voice of the documentation.
- Make use of Vitepress's built-in features, such as frontmatter, custom components, and Markdown extensions, where appropriate.
- Write clear and concise documentation that is easy for users to understand.

### Code blocks

For code blocks where multiple languages can be used, vitepress provides a way to
specify blocks for multiple languages. Use the following syntax:

````md
::: code-group

```java [Java]
// Java code goes here
```

```kotlin [Kotlin]
// Kotlin code goes here
```

:::
````

## Vitepress Markdown Extensions

Vitepress provides a variety of Markdown extensions that can be used to enhance the documentation.
You can find a list of available extensions in the [Vitepress documentation](https://vitepress.dev/guide/markdown).

## Thank You

We appreciate your contributions to the Mockbukkit documentation.
By working together, we can create high-quality, user-friendly documentation that benefits the entire community.
