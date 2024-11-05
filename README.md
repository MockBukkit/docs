# Mockbukkit Docs

This repository is the place where you can find the code for all documentation
provided by the MockBukkit project. The repository is published under
[docs.mockbukkit.org](https://docs.mockbukkit.org).

## Getting started

This is how you can get started working on the docs on your local development
machine.

### Prerequisites

- [node](https://nodejs.org)
- [pnpm](https://pnpm.io/)

### Building

1. First, clone the repository:

   ```bash
   git clone https://github.com/MockBukkit/docs.git
   ```

2. Then, install the dependencies:

   ```bash
   pnpm install
   ```

3. Finally, run the server:

   ```bash
   pnpm docs:dev // dev server
   pnpm docs:build // build for production
   ```

In the case of building for production, the site will be generated in the
`.vitepress/dist` directory.

### Previewing

You can preview the site by running the following command:

```bash
pnpm docs:preview
```

This will start a local server on port 5173.
You can then access the site at <http://localhost:5173>.

## Contributing

Contributions are welcome! Please read the
<!-- markdownlint-disable-next-line MD013 -->
[contribution guidelines](https://github.com/MockBukkit/docs/blob/main/CONTRIBUTING.md)
before submitting a pull request.

## License

The MockBukkit documentation is licensed under two licenses:

- Docs:
  [Creative Commons Attribution-ShareAlike 4.0 International](https://github.com/MockBukkit/docs/blob/main/docs/LICENSE)
- Supporting Code:
- [MIT License](https://github.com/MockBukkit/docs/blob/main/LICENSE)
