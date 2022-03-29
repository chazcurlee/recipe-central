
const db = require('../db')
const { Recipe, Chef } = require('../models')




db.on('error', console.error.bind(console, 'MongoDB connection error: '))



const recipes = [...Array(1)].map((recipe) => {
    return new Recipe({
        name: "Stuffed Pork Tenderloin",
        description: "Yummy pork stuffed with manchego cheese and herbs/spices.",
        ingredients: "- 1kg pork loin roasting joint, skin scored - 175g Manchego cheese, finely sliced - 150g membrillo - 2 sage sprigs - Olive oil, for drizzling - 1 head of garlic, cut in half horizontally - 1 thyme sprig - 200ml medium-dry sherry - Sea salt and freshly ground pepper",
        steps: "Preheat the oven to 220°C/Gas. Lay the joint, skin side down, on a chopping board and cut three-quarters of the way into the flesh lengthways from top to bottom. Open the meat out to form a long rectangle and season with salt and pepper. Arrange the slices of cheese and the membrillo along the centre of the meat. Scatter the leaves from 1 sage sprig on top, and roll the meat up to enclose the stuffing. Tie at 3cm intervals along the length of the meat with string. Place the thyme and remaining sage in a hob-proof roasting tray with the garlic. Lay the pork on top, skin side up. Drizzle with olive oil and season generously with salt and pepper. Transfer the roasting tray to the preheated oven and cook for 20 minutes until the skin is crispy and golden. Turn the oven down to 180°/Gas 4 and cook for a further 50 minutes until the pork is just cooked through. Remove the pork from the tin and set aside on a serving dish to rest. Put the roasting tray on the hob. Pour in the sherry and bring to the boil, scraping up any bits stuck in the bottom of the tray. Lower the heat, squash the garlic and remove the herbs. Add any resting juices from the meat. To serve, carve the pork into thick slices, strain the sauce and pour it over the meat.",
        category: "Dinner",
        chef: [{ type: Schema.Types.ObjectId, ref: 'chefs'}],
    },
    {
        name: "Scrambled Eggs with Sour Cream",
        description: "Creamy eggs with bacon from the legend himself.",
        ingredients: "Thick-cut bacon. Eggs, highest-quality large eggs you can find. Sour cream, full-fat. Chives, or thinly sliced green onions. Sea salt/black pepper.",
        steps: "Fry bacon. Slice the bacon into thin strips and cook in a nonstick pan over medium-high heat until crispy. Spoon out some of the grease, leaving some in the pan as ourfat. Cook eggs. Whisk eggs in a small bowl. Pour the egg mixture into the nonstick skillet (with bacon) over medium-low heat (no milk, no water!!!) and stir constantly, untileggs are set. Finish Bourdain scrambled eggs. When eggs are finished cooking, stir in a spoonful of sour cream and chopped chives and get ready for the best scrambled eggs.",
        category: "Breakfast",
        chef: [{ type: Schema.Types.ObjectId, ref: 'chefs'}],



    },
    {

        name: "New England Clam Chowder Kissed by Manhattan",
        description: "Soup for the Soul on the go!",
        ingredients: "Clams:1 1/2 cups dry white wine - 3 dozen littleneck clams, scrubbed - 12 cockles, scrubbed - Potato: 1 large Yukon gold potato, scrubbed - Kosher salt andfreshly ground black pepper - 2 tablespoons unsalted butter - 2 tablespoons canola oil - Bacon: 1 tablespoon canola oil - 1/2 pound slab bacon, cut into 1/2-inch dice - FriedOkra: 1 cup canola oil2 medium okra, cut into 1/4-inch-thick slices - Kosher salt and freshly ground black pepper - 1 cup yellow or white cornmeal - Chowder: 2 tablespoonscanola oil - 2 shallots, finely diced - 1/4 cup finely diced carrot - 1/4 cup finely diced celery - 2 anchovy fillets in oil, patted dry and chopped - Pinch Calabrian chileflakes or red pepper flakes - 2 tablespoons tomato paste - 2 cups clam juice - 2 tablespoons finely chopped fresh parsley, plus more leaves for garnish - 1 teaspoon finelychopped fresh oregano - 1 teaspoon finely chopped fresh thyme - 1/2 cup creme fraiche - 1 teaspoon finely grated lemon zest - Kosher salt and freshly ground black pepper",
        steps: "For the clams: Bring the wine and 1/2 cup water to a boil in a large saucepan, stir in the littleneck clams, cover and steam until the clams open, about 5 minutes.Discard any clams that do not open. Remove the clams with a slotted spoon and place in a bowl to cool.Bring the broth back to a boil, add the cockles and cook until open, about5 minutes. Discard any cockles that do not open. Remove with a slotted spoon to a separate bowl (these will be used in their shells as a garnish).Strain the clam broth througha mesh strainer lined with cheesecloth into a bowl. Set aside.Remove the littleneck clams from their shells and coarsely chop.For the potato: Put the potato in a smallsaucepan, cover with cold water, add 1 tablespoon salt and bring to a boil. Cook until a paring knife inserted into the center meets with some resistance, about 15 minutes.Drain and let cool slightly, about 10 minutes.Heat the butter and oil in a cast-iron or nonstick pan until it begins to shimmer. Cut the potato into a 1/2-inch dice. Add thepotato to the pan, season with salt and pepper and cook until lightly golden brown on all sides.For the bacon: Heat the oil in a small pan over medium heat. Add the bacon andcook until golden brown and the fat has rendered, about 10 minutes. Remove the bacon to a plate lined with paper towels.For the fried okra: Heat the oil in a small saucepanuntil it begins to shimmer. While the oil heats, season the okra with salt and pepper, dredge in the cornmeal. Fry in the oil, in batches if needed, until golden brown and justtender, about 4 minutes. Remove to a plate lined with paper towels and season with salt.For the chowder: Heat the oil in a large saucepan over medium heat. Add the shallots,carrot and celery and cook until soft, about 4 minutes. Add the anchovy and chile flakes and cook for 1 minute. Add the tomato paste and cook for 2 minutes, stirring constantlyAdd the clam juice and reserved clam broth and bring to a boil. Reduce the heat to low, add the reserved littleneck clams and cook for 10 minutes. Add the parsley, oregano andthyme and cook for 1 minute. Whisk in the creme fraiche and lemon zest until smooth. Season with salt and pepper to taste.Ladle the soup into bowls, top with some of thepotatoes, bacon, okra and reserved cockles. Garnish with parsley leaves.",
        category: "Lunch",
        chef: [{ type: Schema.Types.ObjectId, ref: 'chefs'}],




    },
    {
        name: "Madeleines",
        description: "",
        ingredients: "eggs, sugar, flour, unsalted butter, lemon zest, lemon juice, vanilla extract and salt",
        steps: "Preheat oven to 350° F. Spray Madeleiine pan with non-stick baking spray. Set aside. Measure ¼ cup of the eggs into a bowl, reserving the rest for a later addition. Addthe flour and sugar; beat on high until a thick paste forms. Let rest for 10 minutes. Meanwhile, melt the butter in a saucepan over medium heat; bring to a boil, and let thebutter brown lightly, about 10 minutes. Place the pan in a ice water bath until the butter is cool, but still liquid. Add the remaining egg, lemon zest, lemon juice, vanillaextract, salt and butter to the batter. Beat until thoroughly blended., about 1 minute. Place a generous tablespoon of batter into each of the Madeleine cups. Bake at 350° Ffor 14 to 15 minutes, or until cakes are lightly browned around the edges, humped in the middle and slightly shrunk from the cups. Unmold onto a wire rack to cool completely.When cool, turn the shell side up and dust with confectioners sugar if desired. Yield: 1 ½ dozen.",
        category: "Snack",
        chef: [{ type: Schema.Types.ObjectId, ref: 'chefs'}],



    }
        
        
        
    )
}
)




const run = async () => {
    await chefs()
    recipes()


}

run()

