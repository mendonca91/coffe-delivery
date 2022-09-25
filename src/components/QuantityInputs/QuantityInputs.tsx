import { QuantityInputContainer, IconWrapper } from "./QuantityInputs.styles";
import { FaMinus, FaPlus } from "react-icons/fa";

interface QuantityInputProps {
  size?: "medium" | "small";
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
        <FaMinus size={14}/>
      </IconWrapper>
      <span>{quantity}</span>
      <IconWrapper onClick={onIncrease}>
        <FaPlus size={14}/>
      </IconWrapper>
    </QuantityInputContainer>
  );
}