import { ChangeEvent, useEffect, useRef, useState } from "react";

type RangeCallback = (event: ChangeEvent<HTMLInputElement>) => void;

type Props = {
  rangeName: string;
  callBack: RangeCallback;
}

export const DoubleRange = ({ rangeName, callBack }: Props) => {

  const sliderMaxValue = 100;
  const [min, setMin] = useState<number>(20)
  const [max, setMax] = useState<number>(80)
  const [isMinFocused, setIsMinFocused] = useState(false);
  const [isMaxFocused, setIsMaxFocused] = useState(false);
  const [leftProgress, setLeftProgress] = useState("0%")

  const minTooltipRef = useRef<HTMLDivElement>(null);
  const maxTooltipRef = useRef<HTMLDivElement>(null);

  const setArea = (): void => {

    const left = `${(min / sliderMaxValue) * 100}%`;
    const right = `${100 - (max / sliderMaxValue) * 100}%`;

    if (minTooltipRef.current) {
      minTooltipRef.current.style.left = left;
    }
    if (maxTooltipRef.current) {
      maxTooltipRef.current.style.right = right;
    }

    setLeftProgress(left);
  };

  const onInpuChange = (event: ChangeEvent<HTMLInputElement>): void => {

    const { name, value } = event.target

    if (name === `${rangeName}Max`) {
      setMax(parseInt(value))
      console.log(`Max:  ${max}`)
    } else if (name === `${rangeName}Min`) {
      setMin(parseInt(value))
      console.log(`Min:  ${min}`)
    }

    setArea()
    callBack(event)
  }

  useEffect(() => {
    setArea();
  }, [])

  return (
    <div className="c-form__range">
      <span className="c-type c-type--sm" > {rangeName} </span>

      <div className="c-form__range-container">

        <div
          className="c-form__range-track"
          style={{ left: leftProgress, right: `calc(${100 - (max / sliderMaxValue) * 100}%)` }} >

        </div>

        <input
          type="range"
          name={`${rangeName}Min`}
          min={0} max={100}
          defaultValue={20}
          onChange={onInpuChange}
          onFocus={() => setIsMinFocused(true)}
          onBlur={() => setIsMinFocused(false)}
          aria-label={`${rangeName}Min`}

        />

        <input
          type="range"
          name={`${rangeName}Max`}
          min={0} max={100}
          defaultValue={80}
          onChange={onInpuChange}
          onFocus={() => setIsMaxFocused(true)}
          onMouseLeave={() => setIsMaxFocused(false)}
          aria-label={`${rangeName}Max`}
        />

        <div ref={minTooltipRef} className={`c-form__range-tooltip is-min ${isMinFocused ? "is-focused" : "" }`}>{min}</div>
        <div ref={maxTooltipRef} className={`c-form__range-tooltip is-max ${isMaxFocused ? "is-focused" : "" }`}>{max}</div>

      </div>


    </div>
  )
}
