import CategoryList from "../components/CategoryList";

// import Header from "../components/Header";
import ProductList from "../components/ProductList";

function HomePage() {
  return (
    <div className="bg-gray-100">
      {/* <Header /> */}
      <CategoryList />
      <main className="relative ">
        <ProductList />
      </main>
    </div>
  );
}

export default HomePage;
