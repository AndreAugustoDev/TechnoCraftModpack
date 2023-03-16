ServerEvents.recipes(event =>
{
  event.shaped('minecraft:golden_carrot', [
    'GGG',
    'GCG',
    'GGG'
  ], {
    G: 'minecraft:gold_nugget',
    C: 'minecraft:carrot'
  })
})