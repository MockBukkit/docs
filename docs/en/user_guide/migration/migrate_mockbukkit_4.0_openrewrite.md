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
Add OpenRewrite as a dependency to your project:

```xml
<dependency>
    <groupId>org.openrewrite</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>5.x.x</version>
</dependency>
```
Add the mockbukkit recipes:

```xml
<dependency>
    <groupId>org.mockbukkit</groupId>
    <artifactId>rewrite-recipes</artifactId> 
    <version>1.0.0</version>
</dependency>
```
Add the recipe source to your projects rewrite configuration:

```xml
<configuration>
    <activeRecipes>
        <recipe>org.mockbukkit.rewrite.PackageRename</recipe>
        <recipe>org.mockbukkit.rewrite.ClassRename</recipe>
    </activeRecipes>
</configuration>
```
Run OpenRewrite to refactor your code:

```bash
mvn rewrite:run
```

</details>

<details>
<summary>Gradle Kotlin-DSL</summary>
Add OpenRewrite as a dependency to your project:

```kotlin
plugins {
    id("org.openrewrite.rewrite") version "6.x.x"
}
```
Add the Mockbukkit recipes:

```kotlin
dependencies {
    implementation("org.mockbukkit:rewrite-recipes:1.0.0") 
}
```
Add the recipe source to your project’s rewrite configuration:

```kotlin
rewrite {
    activeRecipe("org.mockbukkit.rewrite.PackageRename")
    activeRecipe("org.mockbukkit.rewrite.ClassRename")
}
```
Run OpenRewrite to refactor your code:
```bash
./gradlew rewriteRun
```

</details>

<details>
<summary>Gradle Groovy-DSL</summary>
Add OpenRewrite as a dependency to your project:

```groovy
plugins {
    id("org.openrewrite.rewrite") version "6.x.x"
}
```
Add the Mockbukkit recipes:

```groovy
dependencies {
    implementation("org.mockbukkit:rewrite-recipes:1.0.0") 
}
```
Add the recipe source to your project’s rewrite configuration:

```groovy
rewrite {
   activeRecipe("org.mockbukkit.rewrite.PackageRename")
   activeRecipe("org.mockbukkit.rewrite.ClassRename")
}
```
Run OpenRewrite to refactor your code:
```bash
./gradlew rewriteRun
```

</details>