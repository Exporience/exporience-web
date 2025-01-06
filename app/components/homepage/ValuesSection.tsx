export function OurValues() {
  const values = [
    { label: "Quality", image: "/images/values-quality.png" },
    { label: "Long-term Relationship", image: "/images/values-relationship.png" },
    { label: "Safe Packaging", image: "/images/values-packaging.png" },
    { label: "Secure Payment", image: "/images/values-transaction.png" },
  ];

  return (
    <section className="flex flex-col items-center px-4 pt-8 w-full h-auto relative xl:px-[36px] xl:pt-[68px]">
      <hr className="w-full border-t border-black" />
      <h2 className="font-['League_Spartan'] text-[28px] font-semibold text-black text-center leading-[32px] my-8 xl:w-full xl:text-[64px] xl:leading-[50px] xl:my-[70px]">
        Our <span className="text-[#182989]"> Values </span>
      </h2>
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:justify-between w-full h-auto xl:w-[1280px]">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 w-full max-w-[280px] xl:w-[271px]"
          >
            <div className="w-full h-[150px] bg-[#D9D9D9] rounded-[20px] xl:h-[170px] xl:rounded-[30px] flex items-center justify-center">
              {/* Add image only for "Quality" */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${item.label} Image`}
                  className="w-full h-full object-cover rounded-[20px] xl:rounded-[30px]"
                />
              ) : null}
            </div>
            <p
              className="font-['League_Spartan'] text-[16px] font-medium text-black text-center xl:text-[20px]"
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}