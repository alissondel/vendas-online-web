import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd {
  description?: string;
  margin: string;
}

const Input = ({ description, margin, ...props }: InputProps) => {
  return (
    <BoxInput style={{ margin: margin }}>
      {description && <TitleInput>{description}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
