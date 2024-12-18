"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const fruits = {
  mangosteen: {
    name: "Mangosteen",
    image: "/images/mangosteen.png",
    description: [
      "Enjoy the delicious taste and health benefits of our Organic Mangosteen, grown without harmful chemicals and rich in antioxidants, vitamin C, and fiber. Mangosteen is known for its unique xanthones content, which has strong anti-inflammatory and antioxidant properties, helping to fight free radicals and support the immune system.",
      "With its unique sweet and tangy flavor and soft texture, our mangosteen is the perfect choice for a healthy and eco-friendly lifestyle.",
    ],
    specifications: [
      { title: "Grades", value: "5A, 6A (Mixed & can by request)" },
      { title: "Weight per Fruits", value: "100 - 150 grams" },
      { title: "Color", value: "Dark red & Purple" },
      { title: "Taste", value: "Sweet & Sour" },
      { title: "Ripeness (for shipping)", value: "Adjusted to destination" },
      { title: "Packaging", value: "Plastic Crate" },
      { title: "Packaging Type", value: "By Request" },
      { title: "Treatment", value: "Sorting, Cleaning, Coating" },
    ],
  },
  dragonfruit: {
    name: "Dragon Fruit (Red Pitaya)",
    image: "/images/dragon-fruit.png",
    description: [
      "Our dragon fruit is rich in vitamin C, fiber, and antioxidants, and is grown without harmful chemicals, making it the perfect choice for boosting health and the immune system. With its refreshing sweetness and soft texture, this dragon fruit is an ideal snack.",
      "This environmentally friendly fruit supports sustainable farming practices with the help of local farmers in Java, Indonesia. It's a treat for both your taste buds and the planet.",
    ],
    specifications: [
      { title: "Weight per Fruits", value: "500 - 1000 grams" },
      { title: "Color", value: "Red" },
      { title: "Taste", value: "Sweet" },
      { title: "Ripeness (for shipping)", value: "60 - 70%" },
      { title: "Packaging", value: "18 pieces (Net weight: 10-14 kg/box)" },
      { title: "Packaging Type", value: "Export Carton (CT) Box" },
      {
        title: "Treatment",
        value: "Strict Sorting and Phytosanitary Certification",
      },
    ],
  },
  salak: {
    name: "Snakefruit",
    image: "/images/salak.png",
    description: [
      "Snake fruit, also known as salak, is not only a delicious treat but also a nutritional powerhouse. Rich in vitamins, particularly vitamin C, it provides a significant boost to the immune system. Additionally, it contains essential minerals and antioxidants that promote overall health. The taste of snake fruit is a delightful blend of sweet and slightly acidic flavors, often compared to a mix of apple, banana, and pineapple. ",
      "Its unique, crunchy texture adds to its appeal, making it a versatile fruit that can be enjoyed on its own or incorporated into various dishes. This combination of health benefits and distinctive taste makes snake fruit an excellent choice for consumers seeking both nutrition and flavor.",
    ],
    specifications: [
      { title: "Color", value: "Brown-skin" },
      { title: "Taste", value: "Sweet and Crunchy" },
      { title: "Ripeness (for shipping)", value: "60-75%" },
      { title: "Shelf life", value: "4 week (put to refrigerator)" },
      { title: "Weight per Packaging", value: "10 Kg" },
      { title: "Packaging Type", value: "Plastic Crate" },
      { title: "Treatment", value: "Intensive Sorting" },
    ],
  },
};

export default function ProductSection() {
  const [selectedFruit, setSelectedFruit] =
    useState<keyof typeof fruits>("dragonfruit");
  const [activeTab, setActiveTab] = useState("description");

  const fruit = fruits[selectedFruit];

  return (
    <section className="font-['League_Spartan'] p-8 max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl xl:text-[64px] xl:pt-[50px] xl:pb-[100px] font-semibold text-center text-black pb-[54px]">
        Our <span className="text-[#182989]">Products</span>
      </h2>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Fruit Image */}
        <div>
          <Image
            src={fruit.image}
            alt={fruit.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Fruit Details */}
        <div className="flex-1">
          <h3 className="text-4xl font-semibold text-black mb-4">
            {fruit.name}
          </h3>

          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button
              className={clsx(
                `py-2 px-4 text-black font-['League_Spartan']`,
                activeTab === "description"
                  ? "border-b-2 border-[#182989] font-bold"
                  : ""
              )}
              onClick={() => setActiveTab("description")}
            >
              Descriptions
            </button>
            <button
              className={clsx(
                `py-2 px-4 text-black font-['League_Spartan']`,
                activeTab === "specifications"
                  ? "border-b-2 border-[#182989] font-bold"
                  : ""
              )}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "description" ? (
            <div className="text-justify text-gray-700 space-y-4">
              {fruit.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 text-black">
              {fruit.specifications.map((spec, index) => (
                <div key={index}>
                  <p className="font-bold">{spec.title}</p>
                  <p className="text-gray-700">{spec.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fruit Options */}
      <div className="flex md:justify-center gap-20 md:gap-[154px] mt-7 pt-7 overflow-auto">
        {Object.entries(fruits).map(([key, value]) => (
          <button
            key={key}
            className={`flex flex-col items-center text-center ${
              selectedFruit === key
                ? "text-[#182989] font-bold text-[18]"
                : "text-gray-600 font-semibold text-[18px]"
            }`}
            onClick={() => setSelectedFruit(key as keyof typeof fruits)}
          >
            <div className="w-[150px] h-[150px] rounded-full bg-gray-100 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
              <Image
                src={value.image}
                alt={value.name}
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <span className="mt-2">{value.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
