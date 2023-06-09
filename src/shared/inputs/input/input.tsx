import { Input as InputAntd, InputProps as InputPropsAntd } from 'antd';

import { BoxInput, TitleInput } from './input.styles';

interface InputProps extends InputPropsAntd {
  description?: string;
}

const Input = ({ description, ...props }: InputProps) => {
  return (
    <BoxInput>
      {description && <TitleInput>{description}</TitleInput>}
      <InputAntd {...props} />
    </BoxInput>
  );
};

export default Input;
