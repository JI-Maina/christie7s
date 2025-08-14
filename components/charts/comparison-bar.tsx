type BarProps = {
  hValue: number;
  hTotal: number;
  aValue: number;
  aTotal: number;
  stat: string;
};

const ComparisonBar = ({ hValue, aValue, hTotal, aTotal, stat }: BarProps) => {
  const combinedTotal = hValue + aValue;
  const hWidthPercent =
    combinedTotal === 0 ? 50 : (hValue / combinedTotal) * 100;
  const aWidthPercent =
    combinedTotal === 0 ? 50 : (aValue / combinedTotal) * 100;

  const hPercent = hTotal === 0 ? 0 : Math.round((hValue / hTotal) * 100);
  const aPercent = aTotal === 0 ? 0 : Math.round((aValue / aTotal) * 100);

  return (
    <div className="w-full flex flex-col gap-1">
      {/* Stats Header - Flex layout */}
      <div className="flex items-center justify-between">
        <div className="text-right">
          <span className="text-sm font-medium">
            {hValue}/{hTotal}
          </span>
          <span className="text-xs text-muted-foreground ml-1">
            ({hPercent}%)
          </span>
        </div>

        <p className="text-xs font-mono capitalize text-white px-2">{stat}</p>

        <div className="text-left">
          <span className="text-xs text-muted-foreground">({aPercent}%)</span>
          <span className="text-sm font-medium ml-1">
            {aValue}/{aTotal}
          </span>
        </div>
      </div>

      {/* Seamless Comparison Bar */}
      <div className="relative h-4 w-full bg-secondary rounded-full overflow-hidden">
        {/* Home team portion */}
        <div
          className="absolute h-full bg-[#3498db]"
          style={{
            width: `${hWidthPercent}%`,
            left: 0,
            borderTopRightRadius: hWidthPercent === 100 ? "0.25rem" : "0",
            borderBottomRightRadius: hWidthPercent === 100 ? "0.25rem" : "0",
          }}
        />

        {/* Away team portion */}
        <div
          className="absolute h-full bg-[#e74c3c]"
          style={{
            width: `${aWidthPercent}%`,
            left: `${hWidthPercent}%`,
            borderTopLeftRadius: aWidthPercent === 100 ? "0.25rem" : "0",
            borderBottomLeftRadius: aWidthPercent === 100 ? "0.25rem" : "0",
          }}
        />
      </div>
    </div>
  );
};

export default ComparisonBar;
