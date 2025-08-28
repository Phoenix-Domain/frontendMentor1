function App() {

  return (
    <div class="flex justify-center md:my-24 md:items-center min-h-screen">
    <div class="flex flex-col w-full md:w-132 md:rounded-xl md:p-4 bg-white">
      <img class="rounded mb-8" src={`${import.meta.env.BASE_URL}image-omelette.jpeg`} alt="Picture of omelette with spinach and seasoning" />
      <div class="mx-8 mb-4 md:mx-2 md:mb-6">
        <h1 class="text-left young-serif mb-4 text-4xl text-stone-900 md:text-xl">Simple Omelette Recipe</h1>
        <p class="text-left outfit font-light m-auto text-stone-600 md:text-sm">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      </div>
      <div class="bg-rose-50 mx-8 mb-4 py-4 pl-8 rounded-xl md:mx-2">
        <h3 class="outfit text-rose-800 mb-4 text-lg md:text-sm">Preparation time</h3>
        <ul class="outfit list-disc marker:text-rose-800 text-stone-600 px-4 md:text-sm">
          <li class="px-4 mb-2"><b>Total:</b> Approximately 10 minutes</li>
          <li class="px-4 mb-2"><b>Preparation:</b> 5 minutes</li>
          <li class="px-4 mb-2"><b>Cooking:</b> 5 minutes</li>
        </ul>
      </div>
      <div class="mx-8 mb-4 md:mx-2">
        <h2 class="young-serif brown text-2xl mb-4 md:text-lg">Ingredients</h2>
        <ul class="px-4 outfit text-stone-600 md:text-sm">
          <li class="px-4 mb-2 custom-marker">2-3 large eggs</li>
          <li class="px-4 mb-2 custom-marker">Salt, to taste</li>
          <li class="px-4 mb-2 custom-marker">Pepper, to taste</li>
          <li class="px-4 mb-2 custom-marker">1 tablespoon of butter or oil</li>
          <li class="px-4 mb-2 custom-marker">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>
      <hr class="mx-8 text-stone-300 mb-4" />
      <div class="mx-8 mb-4 md:mx-2">
        <h2 class="young-serif brown text-2xl mb-4 md:text-lg">Instructions</h2>
        <ol class="pl-4 list-decimal outfit marker:font-bold text-stone-600 md:text-sm">
          <li class="px-4 mb-2 custom-marker"><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
          <li class="px-4 mb-2 custom-marker"><b>Heat the pan:</b> Place a non-stick frying pan over the medium heat and add butter or oil.</li>
          <li class="px-4 mb-2 custom-marker"><b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
          <li class="px-4 mb-2 custom-marker"><b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
          <li class="px-4 mb-2 custom-marker"><b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
          <li class="px-4 mb-2 custom-marker"><b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</li>
        </ol>
      </div>
      <hr class="mx-8 text-stone-300 mb-4" />
      <div class="mx-8 mb-4 md:mx-2">
        <h2 class="young-serif brown text-2xl mb-4 md:text-lg">Nutrition</h2>
        <p class="mb-4 text-stone-600 md:text-xs">The table below shows nutritional values per serving without the additional fillings.</p>
        <div class="grid grid-cols-2 pl-4 outfit md:text-sm md:pl-2">
          <div class="text-stone-600 px-4 outfit">Calories</div>
          <div class="brown md:pl-4"><b>277kcal</b></div>
        </div>
        <hr class="text-stone-300 my-3" />
        <div class="grid grid-cols-2 pl-4 outfit md:text-sm md:pl-2">
          <p class="text-stone-600 px-4">Carbs</p>
          <p class="brown md:pl-4"><b>0g</b></p>
        </div>
        <hr class="text-stone-300 my-3" />
        <div class="grid grid-cols-2 pl-4 outfit md:text-sm md:pl-2">
          <p class="text-stone-600 px-4">Protein</p>
          <p class="brown md:pl-4"><b>20g</b></p>
        </div>
        <hr class="text-stone-300 my-3" />
        <div class="grid grid-cols-2 pl-4 outfit mb-4 md:text-sm md:pl-2">
          <p class="text-stone-600 px-4">Fat</p>
          <p class="brown md:pl-4"><b>22g</b></p>
        </div>
  {/*<table class="outfit text-stone-300 mx-4 border-separate border-spacing-4">
          <tbody>
            <tr class="border-b">
              <th class="text-stone-600">Calories</th>
              <th class="brown pl-16">277kcal</th>
            </tr>
            <tr class="border-b">
              <th class="text-stone-600">Carbs</th>
              <th class="brown pl-16">0g</th>
            </tr>
            <tr class="border-b">
              <th class="text-stone-600">Protein</th>
              <th class="brown pl-16">20g</th>
            </tr>
            <tr>
              <th class="text-stone-600">Fat</th>
              <th class="brown pl-16">22g</th>
            </tr>
          </tbody>
        </table>*/}
      </div>
    </div>
  </div>
  )
}

export default App
