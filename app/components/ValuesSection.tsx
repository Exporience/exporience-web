export function OurValues() {
  const values = [
    { label: "Quality", width: "64px", height: "17px" },
    { label: "Long-term Relationship", width: "209px", height: "35px" },
    { label: "Safe Packaging", width: "133px", height: "17px" },
    { label: "Secure Payment", width: "137px", height: "17px" },
  ];

  return (
    <section className="flex flex-col items-center px-[36px] pt-[68px] w-full h-auto relative z-[3]">
      <hr className="w-full border-t border-black" />
      <h2 className="w-[190px] font-[League Spartan] text-[40px] font-semibold text-black text-justify leading-[37px] my-[70px]">
        Our Values
      </h2>
      <div className="flex flex-row items-center justify-between w-[1280px] h-auto">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-[10px] w-[271px]"
          >
            <div className="w-[271px] h-[170px] bg-[#D9D9D9] rounded-[30px]"></div>
            <p
              className="font-[League Spartan] text-[20px] font-medium text-black text-justify"
              style={{
                width: item.width,
                height: item.height,
                lineHeight: "18px",
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}