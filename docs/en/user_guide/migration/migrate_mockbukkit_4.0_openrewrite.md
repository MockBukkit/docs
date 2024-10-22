---
outline: deep
title: Migrate to Mockbukkit 4 using OpenRewrite
next: false
prev:
    link: '/docs/en/user_guide/migration/migrate_mockbukkit_4.0'
    text: 'Migrate to Mockbukkit 4'
---

# Migrate to Mockbukkit 4 using OpenRewrite

Migration to version 4 was carefully automated by the MockBukkit team using OpenRewrite scripts to
facilitate the migration process.

To run the scripts follow the steps for your package manager:

<details>
    <summary>Maven</summary>

```bash
mvn org.openrewrite.maven:rewrite-maven-plugin:run \
    # TODO: Create command to migrate
```

</details>

<details>
    <summary>Gradle</summary>

```bash
gradle rewriteRun \
    # TODO: Create command to migrate
```

</details>