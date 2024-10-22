---
outline: deep
title: Migrate to Mockbukkit 4 using OpenRewrite
next: false
prev:
    link: '/docs/en/user_guide/migration/migrate_mockbukkit_4.0'
    text: 'Migrate to Mockbukkit 4'
---

# Migrate to Mockbukkit 4 using OpenRewrite

Migration to version 4 was carefully automated by the MockBukkit team using OpenRewrite scripts to facilitate the migration process. To run the scripts, follow the steps for your package manager.

Add OpenRewrite as a dependency to your project

::: code-group

```xml [Maven]
<dependency>
    <groupId>org.openrewrite</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>5.x.x</version>
</dependency>
```

```kotlin [Gradle Kotlin DSL]
plugins {
    id("org.openrewrite.rewrite") version "6.x.x"
}
```

```groovy [Gradle Groovy DSL]
plugins {
    id("org.openrewrite.rewrite") version "6.x.x"
}
```
:::

Add the Mockbukkit recipes

::: code-group

```xml [Maven]
<dependency>
    <groupId>org.mockbukkit</groupId>
    <artifactId>rewrite-recipes</artifactId> 
    <version>1.0.0</version>
</dependency>
```

```kotlin [Gradle Kotlin DSL]
dependencies {
    implementation("org.mockbukkit:rewrite-recipes:1.0.0") 
}
```

```groovy [Gradle Groovy DSL]
dependencies {
    implementation("org.mockbukkit:rewrite-recipes:1.0.0") 
}
```
:::

Add the recipe source to your project’s rewrite configuration
::: code-group

```xml [Maven]
<configuration>
    <activeRecipes>
        <recipe>org.mockbukkit.rewrite.PackageRename</recipe>
        <recipe>org.mockbukkit.rewrite.ClassRename</recipe>
    </activeRecipes>
</configuration>
```

```kotlin [Gradle Kotlin DSL]
rewrite {
    activeRecipe("org.mockbukkit.rewrite.PackageRename")
    activeRecipe("org.mockbukkit.rewrite.ClassRename")
}
```

```groovy [Gradle Groovy DSL]
rewrite {
   activeRecipe("org.mockbukkit.rewrite.PackageRename")
   activeRecipe("org.mockbukkit.rewrite.ClassRename")
}
```
:::

Run OpenRewrite to refactor your code

::: code-group
```bash [Maven]
mvn rewrite:run
```
```bash [Gradle]
./gradlew rewriteRun
```
:::