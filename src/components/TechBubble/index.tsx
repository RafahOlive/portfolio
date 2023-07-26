import { BubbleTechs } from "./styles";

type TechBubbleProps = {
  name: string;
};

export function TechBubble(props: TechBubbleProps) {
  return <BubbleTechs>{props.name}</BubbleTechs>;
}
