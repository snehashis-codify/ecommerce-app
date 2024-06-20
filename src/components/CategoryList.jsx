import { useEffect, useState } from "react";
import { axiosCreate } from "../axios";

function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      await axiosCreate
        .get(`${import.meta.env.VITE_APP_AXIOS_BASE_URL}/products/categories`)
        .then((res) => {
          if (res.status === 200) {
            let updated_arr = res.data.map((item) => {
              const firstLetter = item.charAt(0);
              const firstLetterCap = firstLetter.toUpperCase();
              const remainingLetters = item.slice(1);
              const capitalizedWord = firstLetterCap + remainingLetters;
              return capitalizedWord;
            });
            setCategoryList(updated_arr);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchCategories();
  }, []);
  return (
    <div className=" bg-[#232F3E] p-2 text-white">
      <ul className="flex">
        {categoryList.length > 0 &&
          categoryList.map((category, idx) => (
            <li key={idx} className="p-2">
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CategoryList;
