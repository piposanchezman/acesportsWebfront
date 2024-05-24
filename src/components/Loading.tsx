import logoLoading from "../assets/Loading.gif";
import { LogoContainer, LogoImage } from "../styles/LoadingStyles";

export const LoadingAnimation = () => {
  return (
    <LogoContainer>
      <LogoImage src={logoLoading} alt="Loading..." />
    </LogoContainer>
  );
};
