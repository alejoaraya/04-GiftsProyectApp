import { useState } from "react";
import { GiftGrid, GiftSercher, Nabvar } from "./components";
import { MainLayout } from "./layouts/MainLayout";

export const GiftGaleryApp = () => {
  const [categories, setCategories] = useState(["Dashund"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onRemoveCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  return (
    <>
      <Nabvar />
      <MainLayout>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-2xl font-bold'>GiftGaleryApp</h1>
          <GiftSercher onAddCategory={onAddCategory} />
          <div>
            {categories.map((category) => (
              <GiftGrid
                key={category}
                category={category}
                onRemoveCategory={onRemoveCategory}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};
