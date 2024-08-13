import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community",
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className="text-3xl font-bold">
        <h1>
          Delicious meals, created
          <span>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. it is easy and fun.
        </p>
        <p>
          <Link href="/meals/share">share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
