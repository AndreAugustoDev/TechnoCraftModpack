ServerEvents.tags('item', event => {
    const raw_ores = event.get('forge:ores').getObjectIds();
    const raw_to_fix = Ingredient.of(/.*exnihilosequentia:raw_.*/);

    raw_ores.forEach(ore => {
        const ore_str = ore.toString();
        if (raw_to_fix.test(ore)) {

            event.removeAllTagsFrom(ore_str);

            event.add('forge:raw_materials', ore_str);

            const material = ore_str.substring(ore_str.lastIndexOf("_") + 1);

            event.add('forge:raw_materials/' + material, ore_str);

            const nugget = `exnihilosequentia:${material}_nugget`

            event.add('forge:nuggets', nugget);

            event.add('forge:nuggets/' + material, nugget);
        }
    })
})