ServerEvents.recipes((event) => {
  // essence crafting for custom seeds
  function essenceRecipe(result, material) {
    event
      .shaped(result, ["AAA", "A A", "AAA"], {
        A: `mysticalagriculture:${material}_essence`,
      })
      .id(`kubejs:mysticalagriculture/${material}_essence_crafting`);
  }

  essenceRecipe("allthemodium:allthemodium_nugget", "allthemodium");
  essenceRecipe("allthemodium:vibranium_nugget", "vibranium");
  essenceRecipe("allthemodium:unobtainium_nugget", "unobtainium");
  essenceRecipe("6x silentgear:azure_silver_ingot", "azure_silver");
  essenceRecipe("6x silentgear:crimson_iron_ingot", "crimson_iron");

  //magical soil crafting
  event.custom({
    type: "mysticalagriculture:infusion",
    input: { item: "mysticalagradditions:insanium_farmland" },
    ingredients: [
      { item: "mysticalagradditions:dragon_scale" },
      { item: "mysticalagradditions:insanium_block" },
      { item: "mysticalagradditions:dragon_scale" },
      { item: "mysticalagradditions:insanium_block" },
      { item: "mysticalagradditions:dragon_scale" },
      { item: "mysticalagradditions:insanium_block" },
      { item: "mysticalagradditions:dragon_scale" },
      { item: "mysticalagradditions:insanium_block" },
    ],
    result: { item: "kubejs:magical_soil" },
  });

  //MA EXP droplets to fluid EXP
  event.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "mysticalagriculture:experience_droplet",
    },
    result: [
      {
        fluid: "cofh_core:experience",
        amount: 250,
      },
    ],
    energy: 400,
  });

  //remove gaia crux
  //event.remove({ id: "mysticalagradditions:gaia_spirit_crux" });
});
