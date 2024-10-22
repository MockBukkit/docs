---
outline: deep
title: Migrate to Mockbukkit 4
next:
    text: 'Migrate to Mockbukkit 4 using OpenRewrite'
    link: '/docs/en/user_guide/migration/migrate_mockbukkit_4.0_openrewrite.html'

---

# Migrate to Mockbukkit 4

::: tip
We have OpenRewrite Recipes for this migration. You can more information
on the page for the [OpenRewrite Migration for v4](migrate_mockbukkit_4.0_openrewrite.md)

:::

The 4.0 release includes a large refactor, where the root package and many classnames have changed.
All features that had previously been marked for removal has now been removed.

## Renaming packages

Package names were renamed from `be.seeseemelk.mockbukkit` to `org.mockbukkit.mockbukkit`.
If you prefer to do the migration manually, we suggest you to execute a _find and replace_.

## Renaming classes

Some class names have been renamed for easier interpretation.
The table below creates a mapping between the class names from version 3 and the version 4.

| v3                                                        | v4                                                              |
|-----------------------------------------------------------|-----------------------------------------------------------------|
| be.seeseemelk.mockbukkit.ban.MockIpBanEntry               | org.mockbukkit.mockbukkit.ban.IpbanEntryMock                    |
| be.seeseemelk.mockbukkit.ban.MockIpBanEList               | org.mockbukkit.mockbukkit.ban.IpbanListMock                     |
| be.seeseemelk.mockbukkit.block.data.AmethystClusterMock   | org.mockbukkit.mockbukkit.block.data.AmethystClusterDataMock    |
| be.seeseemelk.mockbukkit.block.data.BedMock               | org.mockbukkit.mockbukkit.block.data.BedDataMock                |
| be.seeseemelk.mockbukkit.block.data.BambooMock            | org.mockbukkit.mockbukkit.block.data.BambooDataMock             |
| be.seeseemelk.mockbukkit.block.data.CampfireMock          | org.mockbukkit.mockbukkit.block.data.CampfireDataMock           |
| be.seeseemelk.mockbukkit.block.data.SlabMock              | org.mockbukkit.mockbukkit.block.data.SlabDataMock               |
| be.seeseemelk.mockbukkit.block.data.StairsMock            | org.mockbukkit.mockbukkit.block.data.StairsDataMock             |
| be.seeseemelk.mockbukkit.block.data.SwitchMock            | org.mockbukkit.mockbukkit.block.data.SwitchDataMock             |
| be.seeseemelk.mockbukkit.block.data.TrapDoorMock          | org.mockbukkit.mockbukkit.block.data.TrapDoorDataMock           |
| be.seeseemelk.mockbukkit.block.data.WallSignMock          | org.mockbukkit.mockbukkit.block.data.WallSignDataMock           |
| be.seeseemelk.mockbukkit.block.state.AbstractFurnaceMock  | org.mockbukkit.mockbukkit.block.state.AbstractFurnaceStateMock  |
| be.seeseemelk.mockbukkit.block.state.BannerMock           | org.mockbukkit.mockbukkit.block.state.BannerStateMock           |
| be.seeseemelk.mockbukkit.block.state.BarrelMock           | org.mockbukkit.mockbukkit.block.state.BarrelStateMock           |
| be.seeseemelk.mockbukkit.block.state.BeaconMock           | org.mockbukkit.mockbukkit.block.state.BeaconStateMock           |
| be.seeseemelk.mockbukkit.block.state.BedMock              | org.mockbukkit.mockbukkit.block.state.BedStateMock              |
| be.seeseemelk.mockbukkit.block.state.BeehiveMock          | org.mockbukkit.mockbukkit.block.state.BeehiveStateMock          |
| be.seeseemelk.mockbukkit.block.state.BellMock             | org.mockbukkit.mockbukkit.block.state.BellStateMock             |
| be.seeseemelk.mockbukkit.block.state.BlastFurnaceMock     | org.mockbukkit.mockbukkit.block.state.BlastFurnaceStateMock     |
| be.seeseemelk.mockbukkit.block.state.BrewingStandMock     | org.mockbukkit.mockbukkit.block.state.BrewingStandStateMock     |
| be.seeseemelk.mockbukkit.block.state.CampfireMock         | org.mockbukkit.mockbukkit.block.state.CampfireStateMock         |
| be.seeseemelk.mockbukkit.block.state.ChestMock            | org.mockbukkit.mockbukkit.block.state.ChestStateMock            |
| be.seeseemelk.mockbukkit.block.state.CommandBlockMock     | org.mockbukkit.mockbukkit.block.state.CommandBlockStateMock     |
| be.seeseemelk.mockbukkit.block.state.ComparatorMock       | org.mockbukkit.mockbukkit.block.state.CompatatorStateMock       |
| be.seeseemelk.mockbukkit.block.state.ConduitMock          | org.mockbukkit.mockbukkit.block.state.ConduitStateMock          |
| be.seeseemelk.mockbukkit.block.state.ContainerMock        | org.mockbukkit.mockbukkit.block.state.ContainerStateMock        |
| be.seeseemelk.mockbukkit.block.state.CreatureSpawnerMock  | org.mockbukkit.mockbukkit.block.state.CreatureSpawnerStateMock  |
| be.seeseemelk.mockbukkit.block.state.DaylightDetectorMock | org.mockbukkit.mockbukkit.block.state.DaylightDetectorStateMock |
| be.seeseemelk.mockbukkit.block.state.DispenserMock        | org.mockbukkit.mockbukkit.block.state.DispenserStateMock        |
| be.seeseemelk.mockbukkit.block.state.DropperMock          | org.mockbukkit.mockbukkit.block.state.DropperStateMock          |
| be.seeseemelk.mockbukkit.block.state.EnchantingTableMock  | org.mockbukkit.mockbukkit.block.state.EnchantingTableStateMock  |
| be.seeseemelk.mockbukkit.block.state.EnderChestMock       | org.mockbukkit.mockbukkit.block.state.EnderChestStateMock       |
| be.seeseemelk.mockbukkit.block.state.EndGatewayMock       | org.mockbukkit.mockbukkit.block.state.EndGatewayStateMock       |
| be.seeseemelk.mockbukkit.block.state.HopperMock           | org.mockbukkit.mockbukkit.block.state.HopperStateMock           |
| be.seeseemelk.mockbukkit.block.state.JigsawMock           | org.mockbukkit.mockbukkit.block.state.JigsawStateMock           |
| be.seeseemelk.mockbukkit.block.state.LecternMock          | org.mockbukkit.mockbukkit.block.state.LecternStateMock          |
| be.seeseemelk.mockbukkit.block.state.SculkCatalystMock    | org.mockbukkit.mockbukkit.block.state.SculkCatalystStateMock    |
| be.seeseemelk.mockbukkit.block.state.SculkSensorMock      | org.mockbukkit.mockbukkit.block.state.SculkSensorStateMock      |
| be.seeseemelk.mockbukkit.block.state.SculkShriekerMock    | org.mockbukkit.mockbukkit.block.state.SculkShriekerStateMock    |
| be.seeseemelk.mockbukkit.block.state.ShulkerBoxMock       | org.mockbukkit.mockbukkit.block.state.ShulkerBoxStateMock       |
| be.seeseemelk.mockbukkit.block.state.SignMock             | org.mockbukkit.mockbukkit.block.state.SignStateMock             |
| be.seeseemelk.mockbukkit.block.state.SkullMock            | org.mockbukkit.mockbukkit.block.state.SkullStateMock            |
| be.seeseemelk.mockbukkit.block.state.SmokerMock           | org.mockbukkit.mockbukkit.block.state.SmokerStateMock           |
| be.seeseemelk.mockbukkit.block.state.StructureMock        | org.mockbukkit.mockbukkit.block.state.StructuteStateMock        |
| be.seeseemelk.mockbukkit.command.MockCommandMap           | org.mockbukkit.mockbukkit.command.commandMapMock                |
| be.seeseemelk.mockbukkit.MockChunkData                    | org.mockbukkit.mockbukkit.ChunkDataMock                         |
| be.seeseemelk.mockbukkit.MockPlayerList                   | org.mockbukkit.mockbukkit.PlayerListMock                        |
| be.seeseemelk.mockbukkit.MockPlugin                       | org.mockbukkit.mockbukkit.plugin.PluginMock                     |
| be.seeseemelk.mockbukkit.MockUnsafeValues                 | org.mockbukkit.mockbukkit.UnsafeValuesMock                      |
