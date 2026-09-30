import clsx from "clsx";
import Price from "./price";

const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx(
        "absolute inset-x-0 bottom-0 flex w-full flex-col gap-1 bg-gradient-to-t from-ink via-ink/90 to-transparent px-4 pt-10 pb-4 @container/label",
        {
          "lg:px-16 lg:pt-[35%]": position === "center",
        },
      )}
    >
      <h3 className="line-clamp-2 text-sm leading-snug font-medium text-cream">
        {title}
      </h3>
      <Price
        className="flex-none text-base font-semibold text-amber-300"
        amount={amount}
        currencyCode={currencyCode}
        currencyCodeClassName="ml-1 text-xs font-normal text-amber-300/70 hidden @[275px]/label:inline"
      />
    </div>
  );
};

export default Label;
