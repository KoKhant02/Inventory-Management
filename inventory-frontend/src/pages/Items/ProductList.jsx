import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Item.css";

const ProductList = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const mockProducts = [
      {
        id: "12345-A",
        category: "Category A",
        stock: 10,
        supplier: "Tech Supplies",
        image:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "12345-B",
        category: "Category B",
        stock: 10,
        supplier: "Tech Supplies",
        image:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "12345-B",
        category: "Category B",
        stock: 10,
        supplier: "Tech Supplies",
        image:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: "12345-B",
        category: "Category B",
        stock: 10,
        supplier: "Tech Supplies",
        image:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ];
    setProducts(mockProducts);
  }, [itemId]);

  const filtered = products.filter((p) =>
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="item-list-container">
      <div className="item-list-header">
        <input
          className="search-input"
          type="text"
          placeholder="Search Items"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="add-button"
          onClick={() => navigate(`/items/${itemId}/products/add`)}
        >
          + Add
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "1rem 0",
        }}
      >
        <button className="back-button" onClick={() => navigate("/items")}>
          ←
        </button>
        <h2 style={{ margin: 0 }}>Item: {itemId}</h2>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {filtered.map((product) => (
          <Link
            key={product.id}
            to={`/items/${itemId}/products/${product.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                width: "180px",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1.0)")
              }
            >
              <img
                src={product.image}
                alt={product.category}
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  marginBottom: "0.75rem",
                }}
              />
              <div>
                <strong>{product.category}</strong>
              </div>
              <div style={{ fontSize: "13px", marginTop: "0.5rem" }}>
                In-Stock: {product.stock}
                <br />
                Supplier: {product.supplier}
                <br />
                Item ID: {product.id}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
