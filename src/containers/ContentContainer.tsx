import { Container } from "../components";
import { Colors } from "../styles/themeStyle";

interface IContentContainer {
  readonly children: React.ReactNode;
  readonly color?: string;
  readonly padding?: boolean;
  readonly style?: object;
}

export default function ContentContainer({
  children,
  color,
  padding = true,
  style,
}: IContentContainer) {
  return (
    <Container padding={padding} style={[style, { backgroundColor: color ?? Colors.greyLight }]}>
      {children}
    </Container>
  );
}
